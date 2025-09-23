import type { Metadata } from "next";
import { Providers } from "@/components/shared/providers";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	authors: [
		{
			name: siteConfig.author.name,
			url: siteConfig.url,
		},
	],
	creator: siteConfig.author.name,
	metadataBase: new URL(siteConfig.url),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		creator: siteConfig.author.twitter,
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: `/site.webmanifest`,
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-screen bg-background font-body antialiased",
					fontVariables
				)}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
