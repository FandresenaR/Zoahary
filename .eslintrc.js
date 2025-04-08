module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Désactiver les avertissements pour les variables non utilisées
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    
    // Désactiver les erreurs pour l'utilisation de React sans import
    'react/react-in-jsx-scope': 'off',
    
    // Désactiver l'erreur no-undef pour React
    'no-undef': ['error', { 'varsIgnorePattern': 'React' }]
  }
}
