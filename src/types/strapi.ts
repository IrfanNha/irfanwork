import { BaseEntity } from "./index";

// Strapi Media
export interface StrapiMedia extends BaseEntity {
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: {
		thumbnail?: StrapiMediaFormat;
		small?: StrapiMediaFormat;
		medium?: StrapiMediaFormat;
		large?: StrapiMediaFormat;
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: any;
}

export interface StrapiMediaFormat {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	path: string | null;
	url: string;
}

// Strapi Category
export interface StrapiCategory extends BaseEntity {
	name: string;
	slug: string;
	description: string;
	posts?: StrapiPost[];
}

// Strapi Tag
export interface StrapiTag extends BaseEntity {
	name: string;
	slug: string;
	posts?: StrapiPost[];
}

// Strapi Post
export interface StrapiPost extends BaseEntity {
	title: string;
	slug: string;
	content: string;
	excerpt: string;
	coverImage: StrapiMedia;
	publishedAt: string;
	categories: StrapiCategory[];
	tags: StrapiTag[];
	relatedPosts?: StrapiPost[];
	readingTime?: number;
	wordCount?: number;
}

// API Response wrapper
export interface StrapiResponse<T> {
	data: T;
	meta?: {
		pagination?: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
}

// API Error
export interface StrapiError {
	status: number;
	name: string;
	message: string;
	details?: any;
}
