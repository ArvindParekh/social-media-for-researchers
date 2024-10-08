import type { Config } from "tailwindcss";

const {
   default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const defaultTheme = require("tailwindcss/defaultTheme");

import colors from "tailwindcss/colors";

const config = {
   darkMode: ["class"],
   content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
   ],
   prefix: "",
   theme: {
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         boxShadow: {
            input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
         },
         keyframes: {
            shimmer: {
               from: {
                  backgroundPosition: "0 0",
               },
               to: {
                  backgroundPosition: "-200% 0",
               },
            },
            spotlight: {
               "0%": {
                  opacity: 0,
                  transform: "translate(-72%, -62%) scale(0.5)",
               },
               "100%": {
                  opacity: 1,
                  transform: "translate(-50%,-40%) scale(1)",
               },
            },
            "accordion-down": {
               from: { height: "0" },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: "0" },
            },
         },
         animation: {
            shimmer: "shimmer 2s linear infinite",
            spotlight: "spotlight 2s ease .75s 1 forwards",
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
         },
      },
   },
   plugins: [
      require("tailwindcss-animate"),
      require("daisyui"),
      addVariablesForColors,
   ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
   let allColors = flattenColorPalette(theme("colors"));
   let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
   );

   addBase({
      ":root": newVars,
   });
}

export default config;
