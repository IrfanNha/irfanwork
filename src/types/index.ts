// Base types
export interface BaseEntity {
	id: string;
	createdAt: string;
	updatedAt: string;
}

// Common UI types
export interface NavigationItem {
	label: string;
	href: string;
	external?: boolean;
}

export interface SiteConfig {
	name: string;
	description: string;
	url: string;
	author: {
		name: string;
		email: string;
		twitter: string;
		github: string;
	};
	nav: NavigationItem[];
}

// Search types
export interface SearchResult<T = any> {
	item: T;
	score?: number;
	refIndex: number;
}

export interface SearchConfig {
	minLength: number;
	debounceMs: number;
	threshold: number;
}

// Animation types
export interface AnimationPreset {
	initial: Record<string, any>;
	animate: Record<string, any>;
	transition: Record<string, any>;
	exit?: Record<string, any>;
}

export type ThemeMode = "light" | "dark" | "system";
