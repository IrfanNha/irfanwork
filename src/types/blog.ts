import { StrapiPost, StrapiCategory, StrapiTag } from "./strapi";

// Blog specific types
export interface BlogPost extends StrapiPost {
	readingTime: number;
	wordCount: number;
	relatedPosts: StrapiPost[];
}

export interface BlogListProps {
	posts: StrapiPost[];
	categories: StrapiCategory[];
	tags: StrapiTag[];
	pagination?: {
		currentPage: number;
		totalPages: number;
		hasNext: boolean;
		hasPrev: boolean;
	};
}

export interface BlogFilters {
	search?: string;
	category?: string;
	tag?: string;
	sortBy?: "newest" | "oldest" | "popular";
}

export interface BlogSearchResult {
	posts: StrapiPost[];
	totalResults: number;
	searchQuery: string;
	filters: BlogFilters;
}
