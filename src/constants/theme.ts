// Color palette based on editorial design
export const colors = {
	// Light theme
	light: {
		background: "#f8f8f8",
		foreground: "#111111",
		muted: "#777777",
		mutedForeground: "#666666",
		accent: "#e63946",
		accentForeground: "#ffffff",
		border: "#e0e0e0",
		input: "#ffffff",
		card: "#ffffff",
		cardForeground: "#111111",
		popover: "#ffffff",
		popoverForeground: "#111111",
		primary: "#111111",
		primaryForeground: "#f8f8f8",
		secondary: "#f1f1f1",
		secondaryForeground: "#111111",
		ring: "#e63946",
	},
	// Dark theme
	dark: {
		background: "#0a0a0a",
		foreground: "#f8f8f8",
		muted: "#888888",
		mutedForeground: "#aaaaaa",
		accent: "#ff4757",
		accentForeground: "#0a0a0a",
		border: "#1a1a1a",
		input: "#111111",
		card: "#111111",
		cardForeground: "#f8f8f8",
		popover: "#111111",
		popoverForeground: "#f8f8f8",
		primary: "#f8f8f8",
		primaryForeground: "#0a0a0a",
		secondary: "#1a1a1a",
		secondaryForeground: "#f8f8f8",
		ring: "#ff4757",
	},
} as const;

// Typography configuration
export const typography = {
	fontSizes: {
		xs: "0.75rem", // 12px
		sm: "0.875rem", // 14px
		base: "1rem", // 16px
		lg: "1.125rem", // 18px
		xl: "1.25rem", // 20px
		"2xl": "1.5rem", // 24px
		"3xl": "1.875rem", // 30px
		"4xl": "2.25rem", // 36px
		"5xl": "3rem", // 48px
		"6xl": "3.75rem", // 60px
		"7xl": "4.5rem", // 72px
		"8xl": "6rem", // 96px
		"9xl": "8rem", // 128px
	},
	fontWeights: {
		thin: "100",
		extralight: "200",
		light: "300",
		normal: "400",
		medium: "500",
		semibold: "600",
		bold: "700",
		extrabold: "800",
		black: "900",
	},
	lineHeights: {
		none: "1",
		tight: "1.25",
		snug: "1.375",
		normal: "1.5",
		relaxed: "1.625",
		loose: "2",
	},
	letterSpacing: {
		tighter: "-0.05em",
		tight: "-0.025em",
		normal: "0em",
		wide: "0.025em",
		wider: "0.05em",
		widest: "0.1em",
	},
} as const;

// Spacing system
export const spacing = {
	0: "0px",
	px: "1px",
	0.5: "0.125rem",
	1: "0.25rem",
	1.5: "0.375rem",
	2: "0.5rem",
	2.5: "0.625rem",
	3: "0.75rem",
	3.5: "0.875rem",
	4: "1rem",
	5: "1.25rem",
	6: "1.5rem",
	7: "1.75rem",
	8: "2rem",
	9: "2.25rem",
	10: "2.5rem",
	11: "2.75rem",
	12: "3rem",
	14: "3.5rem",
	16: "4rem",
	20: "5rem",
	24: "6rem",
	28: "7rem",
	32: "8rem",
	36: "9rem",
	40: "10rem",
	44: "11rem",
	48: "12rem",
	52: "13rem",
	56: "14rem",
	60: "15rem",
	64: "16rem",
	72: "18rem",
	80: "20rem",
	96: "24rem",
} as const;

// Breakpoints
export const breakpoints = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px",
} as const;
