const fs = require('fs');
const path = require('path');

// Créer les dossiers pour les images
const imageFolder = path.join(__dirname, '../public/images/baobab');

if (!fs.existsSync(imageFolder)) {
  fs.mkdirSync(imageFolder, { recursive: true });
  console.log('✅ Dossier d\'images créé avec succès:', imageFolder);
}

// Créer un fichier README dans le dossier d'images
const readmePath = path.join(imageFolder, 'README.md');
const readmeContent = `# Images de Baobab

Ce dossier contient les images suivantes à télécharger:

1. hero-baobab.jpg - Image principale de la page d'accueil
2. huile-baobab.jpg - Huile de baobab
3. poudre-baobab.jpg - Poudre de baobab
4. gelules-baobab.jpg - Gélules de baobab
5. savon-baobab.jpg - Savon au baobab
6. fruits-baobab.jpg - Fruits de baobab
7. plantation-baobab.jpg - Plantation de baobab
8. pattern.png - Motif de fond
9. gallery-1.jpg à gallery-6.jpg - Images pour la galerie

Téléchargez des images de baobab de haute qualité et renommez-les selon la liste ci-dessus.
`;

fs.writeFileSync(readmePath, readmeContent);
console.log('✅ Fichier README créé:', readmePath);

console.log('🌍 Pour finaliser le site:');
console.log('1. Téléchargez des images de baobab de haute qualité');
console.log('2. Renommez-les selon les noms indiqués dans le README');
console.log('3. Placez les images dans le dossier', imageFolder);
