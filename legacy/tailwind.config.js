module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bubbly-pink": "#E4C1D5",
        "wood-green": "#2A634D",
        "sky-blue": "#CCD2EA",
        "vibrant-orange": "#D25137",
        "fresh-yellow": "#DC9A61",
        "warm-purple": "#5B112F",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-koios-sans)"],
        display: ["var(--font-koios-display)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

