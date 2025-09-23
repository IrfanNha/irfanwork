import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";

// Heading font - Space Grotesk
export const fontHeading = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-heading",
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

// Body font - Inter
export const fontBody = Inter({
	subsets: ["latin"],
	variable: "--font-body",
	weight: ["300", "400", "500", "600"],
	display: "swap",
});

// Monospace font - IBM Plex Mono
export const fontMono = IBM_Plex_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	weight: ["300", "400", "500", "600"],
	display: "swap",
});

// Font class names for easy usage
export const fontVariables = `${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`;
