import { DefaultSeoProps } from "next-seo";
import { siteConfig } from "./site";

export const defaultSEO: DefaultSeoProps = {
	title: siteConfig.name,
	description: siteConfig.description,
	canonical: siteConfig.url,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		siteName: siteConfig.name,
		title: siteConfig.name,
		description: siteConfig.description,
		images: [
			{
				url: `${siteConfig.url}/og-image.jpg`,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		handle: siteConfig.author.twitter,
		site: siteConfig.author.twitter,
		cardType: "summary_large_image",
	},
	additionalLinkTags: [
		{
			rel: "icon",
			href: "/favicon.ico",
		},
		{
			rel: "apple-touch-icon",
			href: "/apple-touch-icon.png",
			sizes: "180x180",
		},
		{
			rel: "manifest",
			href: "/site.webmanifest",
		},
	],
};

export const blogSEO = {
	title: `Blog | ${siteConfig.name}`,
	description: "Articles about web development, design, and technology.",
	canonical: `${siteConfig.url}/blog`,
};

export const generatePostSEO = (post: {
	title: string;
	excerpt: string;
	slug: string;
	publishedAt: string;
	coverImage?: string;
}) => ({
	title: `${post.title} | ${siteConfig.name}`,
	description: post.excerpt,
	canonical: `${siteConfig.url}/blog/${post.slug}`,
	openGraph: {
		title: post.title,
		description: post.excerpt,
		url: `${siteConfig.url}/blog/${post.slug}`,
		type: "article",
		publishedTime: post.publishedAt,
		images: post.coverImage
			? [
					{
						url: post.coverImage,
						width: 1200,
						height: 630,
						alt: post.title,
					},
			  ]
			: undefined,
	},
});
