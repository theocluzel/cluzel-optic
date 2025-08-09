const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    // Lire le SVG
    const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/icon.svg'));
    
    // Convertir en PNG avec différentes tailles
    const sizes = [16, 32, 48];
    
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .toFile(path.join(__dirname, `../public/favicon-${size}x${size}.png`));
    }

    // Créer le favicon.ico (combinaison des différentes tailles)
    await sharp(path.join(__dirname, '../public/favicon-48x48.png'))
      .resize(48, 48)
      .toFile(path.join(__dirname, '../public/favicon.ico'));

    console.log('Favicon généré avec succès !');
  } catch (error) {
    console.error('Erreur lors de la génération du favicon:', error);
  }
}

generateFavicon(); 