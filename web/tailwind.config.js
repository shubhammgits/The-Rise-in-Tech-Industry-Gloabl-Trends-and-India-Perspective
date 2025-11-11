/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        slate: {
          50: '#f8fafc',
          900: '#0f172a',
        },
        primary: '#3b82f6',
        accent: '#60a5fa',
        secondary: '#1e40af',
        tertiary: '#0c4a6e',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%)',
        'gradient-futuristic': 'linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #60a5fa 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'rotate-3d': 'rotate3d 10s linear infinite',
        'float-y': 'floatY 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px) rotateZ(-5deg)' },
          '50%': { transform: 'translateY(-30px) rotateZ(5deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        rotate3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'rotateX(10deg) rotateY(10deg)' },
          '50%': { transform: 'rotateX(0deg) rotateY(20deg)' },
          '75%': { transform: 'rotateX(-10deg) rotateY(10deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(59, 130, 246, 0.2)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.2)',
        'glow-accent': '0 0 25px rgba(96, 165, 250, 0.15)',
        'glow-secondary': '0 0 20px rgba(30, 58, 138, 0.15)',
        'neon': '0 0 15px rgba(59, 130, 246, 0.3)',
        '3d': '8px 8px 20px rgba(0, 0, 0, 0.15), -2px -2px 10px rgba(255, 255, 255, 0.1)',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
