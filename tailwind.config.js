/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Additive tokens mirroring the palette already used across the site
      // (black background, gray-800/900 surfaces, cyan-400/600 accents).
      // Existing utility classes are untouched — these are here so future
      // styling changes have a single source of truth to update.
      colors: {
        brand: {
          bg: "#000000",
          surface: "#111827",
          card: "#1f2937",
          accent: "#22d3ee",
          accentDark: "#0891b2",
        },
      },
    },
  },
  plugins: [],
}
