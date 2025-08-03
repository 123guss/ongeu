module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep cosmic blue for trust and stability
        primary: {
          DEFAULT: "#1a237e", // indigo-900
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        // Secondary Colors - Solar energy optimism and warmth
        secondary: {
          DEFAULT: "#ff8f00", // amber-800
          50: "#fff8e1", // amber-50
          100: "#ffecb3", // amber-100
          200: "#ffe082", // amber-200
          300: "#ffd54f", // amber-300
          400: "#ffca28", // amber-400
          500: "#ffc107", // amber-500
          600: "#ffb300", // amber-600
          700: "#ffa000", // amber-700
          800: "#ff8f00", // amber-800
          900: "#ff6f00", // amber-900
        },
        // Accent Colors - Mystical depth connecting cultural astronomy
        accent: {
          DEFAULT: "#9575cd", // purple-400
          50: "#f3e5f5", // purple-50
          100: "#e1bee7", // purple-100
          200: "#ce93d8", // purple-200
          300: "#ba68c8", // purple-300
          400: "#ab47bc", // purple-400
          500: "#9c27b0", // purple-500
          600: "#8e24aa", // purple-600
          700: "#7b1fa2", // purple-700
          800: "#6a1b9a", // purple-800
          900: "#4a148c", // purple-900
        },
        // Background and Surface Colors
        background: "#fafafa", // Clean canvas for complex information
        surface: "#ffffff", // Elevated content areas and calculator interface
        // Text Colors
        text: {
          primary: "#212121", // Maximum readability for detailed content
          secondary: "#757575", // Clear hierarchy without harsh contrast
        },
        // Status Colors
        success: "#4caf50", // green-500 - Positive reinforcement for completed calculations
        warning: "#ff9800", // orange-500 - Gentle attention for important considerations
        error: "#f44336", // red-500 - Clear concern without panic or shame
        // Border Colors
        border: {
          DEFAULT: "#e0e0e0", // gray-300
          light: "#f5f5f5", // gray-100
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        light: '300', // Accents - Light weight for subtle secondary information
        normal: '400', // Headlines and Body - Approachable authority
        medium: '500', // Body variations for clear information hierarchy
        semibold: '600', // Headlines and CTAs - Clear action emphasis
        bold: '700', // Headlines - Maximum impact when needed
      },
      boxShadow: {
        'cosmic': '0 2px 8px rgba(26, 35, 126, 0.1)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      borderWidth: {
        '1': '1px',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '800': '800ms',
      },
      animation: {
        'celestial': 'celestial 300ms ease-in-out',
        'celestial-long': 'celestial-long 800ms ease-in-out',
      },
      keyframes: {
        celestial: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'celestial-long': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}