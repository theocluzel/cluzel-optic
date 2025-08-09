"use client";

/* global google */

import { useEffect, useRef, useState } from "react";

interface StreetViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  panoId?: string;
  lat?: number;
  lng?: number;
}

function loadGoogleMaps(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined" && (window as any).google?.maps) {
      resolve();
      return;
    }
    if (!apiKey) {
      reject(new Error("Clé API Google Maps manquante"));
      return;
    }
    const existing = document.getElementById("google-maps-js");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Échec chargement Google Maps")));
      return;
    }
    const script = document.createElement("script");
    script.id = "google-maps-js";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=quarterly&language=fr`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Échec chargement Google Maps"));
    document.head.appendChild(script);
  });
}

export default function StreetViewModal({ isOpen, onClose, panoId, lat = 48.84861, lng = 2.29608 }: StreetViewModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
    setLoading(true);
    setError(null);

    let timeoutId: any;

    loadGoogleMaps(apiKey)
      .then(() => {
        if (!containerRef.current) return;
        const sv = new (window as any).google.maps.StreetViewService();
        const panorama = new (window as any).google.maps.StreetViewPanorama(containerRef.current, {
          addressControl: false,
          linksControl: true,
          panControl: true,
          enableCloseButton: false,
          motionTracking: false,
          visible: true,
        });

        const applyPanoData = (data: any) => {
          panorama.setPano(data.location.pano);
          panorama.setPov({ heading: 0, pitch: 0 });
          panorama.setZoom(1);
          setLoading(false);
        };

        const tryByIdThenFallback = () => {
          if (panoId) {
            sv.getPanorama({ pano: panoId }, (data: any, status: any) => {
              if (status === (window as any).google.maps.StreetViewStatus.OK) {
                applyPanoData(data);
              } else {
                sv.getPanorama({ location: { lat, lng }, radius: 250 }, (d2: any, s2: any) => {
                  if (s2 === (window as any).google.maps.StreetViewStatus.OK) {
                    applyPanoData(d2);
                  } else {
                    setError("Impossible de charger ce panorama.");
                    setLoading(false);
                  }
                });
              }
            });
          } else {
            sv.getPanorama({ location: { lat, lng }, radius: 250 }, (d2: any, s2: any) => {
              if (s2 === (window as any).google.maps.StreetViewStatus.OK) {
                applyPanoData(d2);
              } else {
                setError("Aucune vue Street View intégrable à proximité.");
                setLoading(false);
              }
            });
          }
        };

        timeoutId = setTimeout(() => {
          setError("La vue Street View tarde à charger.");
          setLoading(false);
        }, 7000);

        tryByIdThenFallback();
      })
      .catch((e) => {
        setError(e.message || "Erreur de chargement Google Maps");
      })
      .finally(() => setLoading(false));

    return () => clearTimeout(timeoutId);
  }, [isOpen, panoId, lat, lng]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl aspect-[16/9] bg-black rounded-xl overflow-hidden shadow-2xl border border-neutral-700">
          <div ref={containerRef} className="w-full h-full" />

          {(loading || error) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-center p-4">
              {loading ? (
                <span>Chargement de l'immersion…</span>
              ) : (
                <div className="space-y-3">
                  <p>{error}</p>
                </div>
              )}
            </div>
          )}

          {/* Bouton croix */}
          <button
            onClick={onClose}
            aria-label="Fermer l'immersion"
            className="absolute top-3 right-3 bg-white/95 text-black rounded-full w-11 h-11 shadow-lg border border-neutral-200 flex items-center justify-center hover:scale-105 transition z-10"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}