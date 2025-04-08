module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Désactiver les avertissements pour les variables non utilisées
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    
    // Désactiver les erreurs pour les apostrophes non échappées dans JSX
    'react/no-unescaped-entities': 'off',
    
    // Désactiver l'obligation d'importer React (avec React 17+, l'import n'est plus nécessaire)
    'react/react-in-jsx-scope': 'off',
    
    // Désactiver l'avertissement sur les images sans dimensions
    '@next/next/no-img-element': 'off'
  }
}
