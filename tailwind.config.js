/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0c0d0e',
        surface: '#131517',
        'surface-elevated': '#181b1e',
        'surface-border': '#23262a',
        'surface-border-subtle': '#1c1e22',
        primary: {
          DEFAULT: '#f3f4f6',
          muted: '#9ca3af',
          dim: '#6b7280',
        },
        accent: {
          DEFAULT: '#38bdf8', // crisp subtle technical cyan
          dim: 'rgba(56, 189, 248, 0.15)',
          glow: 'rgba(56, 189, 248, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
