import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#3351FF",
        black: {
          "primary-text": "#0E0E0F",
          "secondary-text": "#53525F",
          "tertiary-text": "#838294",
        },
        "orange-drop": "#FE5C2B",
        "green-drop": "#00E36E",
        "background-gray": "#EEEFF1",
        "border-gray": "#DFE0E1",
        "pubnub-dark": "#161C2D",
        "pubnub-red": "#EF3A43",
        "pubnub-faded-red": "#FDECED",
        "pubnub-dark-grey": "#475569",
        "pubnub-light-grey": "#94A3B7",
        "pubnub-yellow": "#FBBF24",
        "pubnub-white": "#F8FAFC",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
