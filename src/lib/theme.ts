import { colors, typography, spacing } from "@/constants/theme";

// Theme configuration object
export const themeConfig = {
	colors,
	typography,
	spacing,
} as const;

// CSS custom properties generator
export function generateCSSVariables(theme: "light" | "dark") {
	const themeColors = colors[theme];

	return Object.entries(themeColors).reduce((vars, [key, value]) => {
		vars[`--${key}`] = value;
		return vars;
	}, {} as Record<string, string>);
}

// Utility function to get theme-aware colors
export function getThemeColor(
	colorName: keyof typeof colors.light,
	theme: "light" | "dark" = "light"
) {
	return colors[theme][colorName];
}

// Typography utility functions
export function getTypographyClass(
	fontSize: keyof typeof typography.fontSizes,
	fontWeight?: keyof typeof typography.fontWeights,
	lineHeight?: keyof typeof typography.lineHeights
) {
	let classes = `text-${fontSize}`;

	if (fontWeight) {
		classes += ` font-${fontWeight}`;
	}

	if (lineHeight) {
		classes += ` leading-${lineHeight}`;
	}

	return classes;
}

// Editorial-style typography presets
export const typographyPresets = {
	// Headlines
	headline1:
		"font-heading font-bold text-6xl lg:text-8xl tracking-wider uppercase leading-none",
	headline2:
		"font-heading font-bold text-4xl lg:text-6xl tracking-wide uppercase leading-tight",
	headline3:
		"font-heading font-semibold text-3xl lg:text-4xl tracking-wide uppercase leading-tight",

	// Body text
	bodyLarge: "font-body font-normal text-lg leading-relaxed",
	bodyMedium: "font-body font-normal text-base leading-normal",
	bodySmall: "font-body font-normal text-sm leading-normal",

	// Accent text
	accent: "font-mono font-medium text-sm tracking-wider uppercase",
	caption:
		"font-mono font-light text-xs tracking-wide uppercase text-muted-foreground",

	// Special
	quote: "font-body font-light text-xl lg:text-2xl leading-relaxed italic",
	code: "font-mono font-normal text-sm leading-relaxed",
} as const;

// Layout presets
export const layoutPresets = {
	container: "container mx-auto px-4 sm:px-6 lg:px-8",
	section: "py-16 lg:py-24",
	grid: "grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3",
	flexCenter: "flex items-center justify-center",
	flexBetween: "flex items-center justify-between",
} as const;
