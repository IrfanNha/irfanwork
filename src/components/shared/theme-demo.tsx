"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
	AnimatedText,
	AnimatedHeadline,
	AnimatedParagraph,
} from "./animated-text";
import { StaggerContainer, StaggerItem } from "./page-transition";
import { motion } from "framer-motion";
import { animationPresets } from "@/lib/animations";

export function ThemeDemo() {
	return (
		<div className="container-custom section-padding space-y-section">
			{/* Theme Toggle */}
			<div className="flex justify-between items-center">
				<h1 className="text-headline-2">Theme Demo</h1>
				<ThemeToggle />
			</div>

			{/* Typography Demo */}
			<StaggerContainer className="space-y-8">
				<StaggerItem>
					<AnimatedHeadline level={1} className="text-headline-1">
						CREATIVE DESIGNER
					</AnimatedHeadline>
				</StaggerItem>

				<StaggerItem>
					<AnimatedText className="text-accent">
						/WEB DESIGN (UX/UI)
					</AnimatedText>
				</StaggerItem>

				<StaggerItem>
					<AnimatedParagraph className="text-body-large max-w-2xl">
						This is a demo of the editorial design system. Clean
						typography, minimalist layout, and smooth animations
						create a modern, professional experience.
					</AnimatedParagraph>
				</StaggerItem>
			</StaggerContainer>

			{/* Color Demo */}
			<StaggerContainer className="grid-auto">
				<StaggerItem>
					<Card>
						<CardHeader>
							<CardTitle>Primary Colors</CardTitle>
							<CardDescription>Main brand colors</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="h-16 bg-background border rounded-md flex items-center justify-center">
									<span className="text-caption">
										Background
									</span>
								</div>
								<div className="h-16 bg-foreground rounded-md flex items-center justify-center">
									<span className="text-caption text-background">
										Foreground
									</span>
								</div>
								<div className="h-16 bg-accent rounded-md flex items-center justify-center">
									<span className="text-caption text-accent-foreground">
										Accent
									</span>
								</div>
								<div className="h-16 bg-muted rounded-md flex items-center justify-center">
									<span className="text-caption">Muted</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</StaggerItem>

				<StaggerItem>
					<Card>
						<CardHeader>
							<CardTitle>Typography</CardTitle>
							<CardDescription>
								Font hierarchy examples
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="text-headline-3">Headline 3</div>
							<div className="text-body-large">
								Body Large Text
							</div>
							<div className="text-body-medium">
								Body Medium Text
							</div>
							<div className="text-accent">ACCENT TEXT</div>
							<div className="text-caption">Caption Text</div>
						</CardContent>
					</Card>
				</StaggerItem>

				<StaggerItem>
					<Card>
						<CardHeader>
							<CardTitle>Interactive Elements</CardTitle>
							<CardDescription>
								Buttons, badges, and more
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex flex-wrap gap-2">
								<Button>Primary Button</Button>
								<Button variant="secondary">Secondary</Button>
								<Button variant="outline">Outline</Button>
								<Button variant="ghost">Ghost</Button>
							</div>
							<div className="flex flex-wrap gap-2">
								<Badge>Default</Badge>
								<Badge variant="secondary">Secondary</Badge>
								<Badge variant="outline">Outline</Badge>
								<Badge variant="destructive">Destructive</Badge>
							</div>
						</CardContent>
					</Card>
				</StaggerItem>
			</StaggerContainer>

			{/* Animation Demo */}
			<motion.div
				whileHover="hover"
				variants={animationPresets.cardHover}
				className="w-full">
				<Card className="cursor-pointer">
					<CardHeader>
						<CardTitle>Hover Animation</CardTitle>
						<CardDescription>
							Try hovering over this card
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-body-medium">
							This card demonstrates the hover animation preset.
							Smooth transitions and subtle effects enhance user
							experience.
						</p>
					</CardContent>
				</Card>
			</motion.div>

			{/* Glass Effect Demo */}
			<div className="relative h-64 bg-gradient-to-r from-accent/20 to-accent/5 rounded-lg overflow-hidden">
				<div className="absolute inset-4">
					<div className="glass h-full rounded-lg p-6 flex items-center justify-center">
						<div className="text-center">
							<h3 className="text-headline-3 mb-4">
								Glass Effect
							</h3>
							<p className="text-body-medium opacity-80">
								Glassmorphism design with backdrop blur
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
