import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                ink: "#0A0A0A",
                mist: "#EAEAEC",
                rose: "#CEABC1",
                muted: "#8A8A8E",
                subtle: "#6A6A6E",
                line: "#2A2A2E",
                card: "#0A0A0C",
            },
            fontFamily: {
                sans: ["var(--font-nohemi)", "sans-serif"],
                display: ["var(--font-dirtyline)", "sans-serif"],
            },
            screens: {
                // Phones in landscape and other short viewports
                short: { raw: "(max-height: 640px)" },
            },
        },
    },
    plugins: [],
} satisfies Config;
