"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useTheme() {
	const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();
	const [mounted, setMounted] = useState(false);

	// Prevent hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	// Custom theme functions
	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const isLight = resolvedTheme === "light";
	const isDark = resolvedTheme === "dark";
	const isSystem = theme === "system";

	// Don't render theme-dependent content until mounted
	if (!mounted) {
		return {
			theme: undefined,
			setTheme,
			resolvedTheme: undefined,
			systemTheme,
			toggleTheme,
			isLight: false,
			isDark: false,
			isSystem: false,
			mounted: false,
		};
	}

	return {
		theme,
		setTheme,
		resolvedTheme,
		systemTheme,
		toggleTheme,
		isLight,
		isDark,
		isSystem,
		mounted,
	};
}

// Hook for theme-aware styling
export function useThemeStyles() {
	const { resolvedTheme, mounted } = useTheme();

	if (!mounted) {
		return {
			isDark: false,
			isLight: false,
			themeClass: "",
		};
	}

	const isDark = resolvedTheme === "dark";
	const isLight = resolvedTheme === "light";

	return {
		isDark,
		isLight,
		themeClass: isDark ? "dark" : "light",
	};
}
