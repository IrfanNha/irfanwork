import { NavigationItem } from "@/types";

export const mainNavigation: NavigationItem[] = [
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
];

export const socialLinks: NavigationItem[] = [
	{
		label: "Twitter",
		href: "https://twitter.com/irfanwork",
		external: true,
	},
	{
		label: "GitHub",
		href: "https://github.com/irfanwork",
		external: true,
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/irfanwork",
		external: true,
	},
];

export const footerLinks = {
	main: [
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
	],
	legal: [
		{
			label: "Privacy",
			href: "/privacy",
		},
		{
			label: "Terms",
			href: "/terms",
		},
	],
};
