/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#111315',
          100: '#16181B',
          200: '#1C1F24',
          300: '#23282F',
        },
        surface: {
          1: '#16181B',
          2: '#1C1F24',
          3: '#23282F',
        },
        light: {
          DEFAULT: '#F2F0E9',
          dim: '#D1CFCA',
        },
        muted: {
          DEFAULT: '#85878B',
          dark: '#4A4D53',
        },
        accent: {
          DEFAULT: '#A6B8FF',
          dim: 'rgba(166, 184, 255, 0.15)',
          glow: 'rgba(166, 184, 255, 0.35)',
        },
        mint: {
          DEFAULT: '#B7F7D4',
          dim: 'rgba(183, 247, 212, 0.12)',
          glow: 'rgba(183, 247, 212, 0.3)',
        },
        borderSubtle: 'rgba(242, 240, 233, 0.08)',
        borderHover: 'rgba(166, 184, 255, 0.28)',
        borderMint: 'rgba(183, 247, 212, 0.25)',
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"DM Mono"', 'Consolas', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
        wide: '1400px',
      },
      animation: {
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'radar-ping': 'radarPing 2s infinite cubic-bezier(0, 0, 0.2, 1)',
        fadeIn: 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        radarPing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.8' },
          '70%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
