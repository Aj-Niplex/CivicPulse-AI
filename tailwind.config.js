/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#14B8A6',
        danger: '#EF4444',
        warning: '#F59E0B',
        success: '#22C55E',
        'bg-surface': '#F8FAFF',
        'bg-card': '#FFFFFF',
        'text-primary': '#1E293B',
        'text-muted': '#64748B',
      },
      borderRadius: {
        'xl': '16px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
