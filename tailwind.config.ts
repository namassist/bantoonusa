import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        "display-large": "clamp(2rem, 5vw, 2.5rem)",
        "display-medium": "clamp(2rem, 4vw, 2.25rem)",
        "display-small": "clamp(1.75rem, 3vw, 2rem)",
        "heading-large": "clamp(1.5rem, 3vw, 1.75rem)",
        "heading-medium": "clamp(1.5rem, 2.5vw, 1.75rem)",
        "heading-small": "clamp(1.25rem, 2vw, 1.5rem)",
        "subheading-large": "clamp(1.125rem, 1.5vw, 1.25rem)",
        "subheading-medium": "clamp(1rem, 1.2vw, 1.125rem)",
        "subheading-small": "clamp(0.875rem, 1vw, 1rem)",
        "body-large": "clamp(1rem, 1.2vw, 1.125rem)",
        "body-medium": "clamp(0.875rem, 1vw, 1rem)",
        "body-small": "clamp(0.75rem, 0.9vw, 0.875rem)",
        "label-large": "clamp(0.875rem, 1vw, 1rem)",
        "label-medium": "clamp(0.75rem, 0.9vw, 0.875rem)",
        "label-small": "clamp(0.625rem, 0.8vw, 0.75rem)",
        "button-cta": "clamp(1rem, 1.2vw, 1.25rem)",
        "button-large": "clamp(0.875rem, 1vw, 1rem)",
        "button-medium": "clamp(0.75rem, 0.9vw, 0.875rem)",
      },
      fontFamily: {
        "primary-sans": "var(--font-inter)",
        "secondary-sans": "var(--font-sourcesans)",
      },
      backgroundImage: {
        hero: "url('/hero-ilustration.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
