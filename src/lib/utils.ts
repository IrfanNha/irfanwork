import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Date utilities
export function formatDate(date: string | Date): string {
	const dateObj = typeof date === "string" ? new Date(date) : date;
	return dateObj.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export function formatDateShort(date: string | Date): string {
	const dateObj = typeof date === "string" ? new Date(date) : date;
	return dateObj.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
}

// Reading time calculation
export function calculateReadingTime(text: string): number {
	const wordsPerMinute = 200;
	const words = text.trim().split(/\s+/).length;
	const readingTime = Math.ceil(words / wordsPerMinute);
	return readingTime;
}

// Word count
export function getWordCount(text: string): number {
	return text.trim().split(/\s+/).length;
}

// URL utilities
export function createSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, "") // Remove special characters
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
		.trim();
}

export function getBaseUrl(): string {
	if (typeof window !== "undefined") {
		return window.location.origin;
	}
	return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text;
	return text.substring(0, maxLength).trim() + "...";
}

// Debounce function
export function debounce<T extends (...args: any[]) => void>(
	func: T,
	delay: number
): (...args: Parameters<T>) => void {
	let timeoutId: NodeJS.Timeout;

	return (...args: Parameters<T>) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func(...args), delay);
	};
}

// Local storage utilities (with error handling)
export function getFromStorage(key: string): string | null {
	if (typeof window === "undefined") return null;

	try {
		return localStorage.getItem(key);
	} catch (error) {
		console.warn("Failed to read from localStorage:", error);
		return null;
	}
}

export function setToStorage(key: string, value: string): void {
	if (typeof window === "undefined") return;

	try {
		localStorage.setItem(key, value);
	} catch (error) {
		console.warn("Failed to write to localStorage:", error);
	}
}

// Array utilities
export function unique<T>(array: T[]): T[] {
	return [...new Set(array)];
}

export function groupBy<T, K extends string | number | symbol>(
	array: T[],
	keyFn: (item: T) => K
): Record<K, T[]> {
	return array.reduce((groups, item) => {
		const key = keyFn(item);
		if (!groups[key]) {
			groups[key] = [];
		}
		groups[key].push(item);
		return groups;
	}, {} as Record<K, T[]>);
}
