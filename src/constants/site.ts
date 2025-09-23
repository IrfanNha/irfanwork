import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	name: process.env.NEXT_PUBLIC_SITE_NAME || "Irfanwork",
	description:
		process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
		"Creative Designer & Developer Portfolio",
	url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
	author: {
		name: "Irfan",
		email: "hello@irfanwork.dev",
		twitter: "@irfanwork",
		github: "irfanwork",
	},
	nav: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Now",
			href: "/now",
		},
	],
};

export const apiConfig = {
	baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
	secretKey: process.env.API_SECRET_KEY || "",
	endpoints: {
		posts: "/api/posts",
		categories: "/api/categories",
		tags: "/api/tags",
	},
};

export const searchConfig = {
	minLength: parseInt(process.env.NEXT_PUBLIC_SEARCH_MIN_LENGTH || "2"),
	debounceMs: parseInt(process.env.NEXT_PUBLIC_SEARCH_DEBOUNCE || "300"),
	threshold: 0.3,
};
