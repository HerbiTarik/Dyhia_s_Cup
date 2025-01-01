module.exports = {
  content: [
    './App.js', // Assure-toi que ton fichier principal est inclus
    './src/**/*.{js,jsx,ts,tsx}', // Inclut tous les fichiers de ton projet React Native
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
