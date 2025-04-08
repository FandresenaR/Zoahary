module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Désactiver l'avertissement pour les variables non utilisées
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    
    // Désactiver l'erreur pour React non défini
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off'
  }
}
