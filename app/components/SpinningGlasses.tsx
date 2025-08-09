"use client";

import { useEffect, useState } from 'react';

export default function SpinningGlasses() {
  const [rotation, setRotation] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      setRotation(prev => (prev + delta * 0.3) % 360);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="fixed left-4 top-16 w-24 h-16 z-[9999]">
      <svg
        viewBox="0 0 100 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Définition du dégradé */}
        <defs>
          <radialGradient id="lensGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#e8f4ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d4ebff" stopOpacity="0.5" />
          </radialGradient>
        </defs>

        {/* Branches design */}
        <path
          d="M15 30 C15 30, 8 40, 0 45 C-8 50, -15 52, -20 54"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M15 28 C15 28, 8 38, 0 43 C-8 48, -15 50, -20 52"
          stroke="#1a1a1a"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M85 30 C85 30, 92 40, 100 45 C108 50, 115 52, 120 54"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M85 28 C85 28, 92 38, 100 43 C108 48, 115 50, 120 52"
          stroke="#1a1a1a"
          strokeWidth="1"
          fill="none"
        />

        {/* Pont central */}
        <path
          d="M45 30 H55"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Verres rotatifs avec mini-lunettes à l'intérieur */}
        <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '30px 30px' }}>
          <circle
            cx="30"
            cy="30"
            r="15"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            fill="url(#lensGradient)"
          />
          {/* Mini-lunettes gauche */}
          <g transform="translate(22, 25) scale(0.4)">
            <path
              d="M15 30 C15 30, 8 35, 0 37"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M45 30 H55"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M85 30 C85 30, 92 35, 100 37"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="30"
              cy="30"
              r="15"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="#c5e1ff"
              fillOpacity="0.6"
            />
            <circle
              cx="70"
              cy="30"
              r="15"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="#c5e1ff"
              fillOpacity="0.6"
            />
          </g>
        </g>

        <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '70px 30px' }}>
          <circle
            cx="70"
            cy="30"
            r="15"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            fill="url(#lensGradient)"
          />
          {/* Mini-lunettes droite */}
          <g transform="translate(62, 25) scale(0.4)">
            <path
              d="M15 30 C15 30, 8 35, 0 37"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M45 30 H55"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M85 30 C85 30, 92 35, 100 37"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="30"
              cy="30"
              r="15"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="#c5e1ff"
              fillOpacity="0.6"
            />
            <circle
              cx="70"
              cy="30"
              r="15"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="#c5e1ff"
              fillOpacity="0.6"
            />
          </g>
        </g>

        {/* Reflets fixes */}
        <path
          d="M25 22 Q30 25 35 22"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M65 22 Q70 25 75 22"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
} 