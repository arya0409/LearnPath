/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1', // Indigo 500
          DEFAULT: '#4f46e5', // Indigo 600
          dark: '#4338ca', // Indigo 700
        },
        secondary: {
          light: '#a855f7', // Purple 500
          DEFAULT: '#9333ea', // Purple 600
          dark: '#7e22ce', // Purple 700
        },
        background: {
          light: '#f8fafc', // Slate 50
          dark: '#0f172a', // Slate 900
        },
        surface: {
          light: '#ffffff', // White
          dark: '#1e293b', // Slate 800
        },
        text: {
          light: '#0f172a', // Slate 900
          dark: '#f8fafc', // Slate 50
          muted: {
            light: '#64748b', // Slate 500
            dark: '#94a3b8', // Slate 400
          }
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #4f46e5, #9333ea)',
      }
    },
  },
  plugins: [],
}
