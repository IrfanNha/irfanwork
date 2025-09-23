"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { animationPresets } from "@/lib/animations";
import { ReactNode, ElementType } from "react";

interface AnimatedTextProps {
	children: string;
	className?: string;
	animation?: "reveal" | "stagger" | "fade";
	delay?: number;
	once?: boolean;
}

export function AnimatedText({
	children,
	className,
	animation = "reveal",
	delay = 0,
	once = true,
}: AnimatedTextProps) {
	if (animation === "stagger") {
		return (
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once, amount: 0.3 }}
				variants={animationPresets.staggerText}
				className={cn("overflow-hidden", className)}
				style={{
					transitionDelay: `${delay}s`,
				}}>
				{children.split("").map((char, index) => (
					<motion.span
						key={index}
						variants={animationPresets.letter}
						className="inline-block">
						{char === " " ? "\u00A0" : char}
					</motion.span>
				))}
			</motion.div>
		);
	}

	const variants =
		animation === "fade"
			? animationPresets.fade
			: animationPresets.textReveal;

	return (
		<div className={cn("overflow-hidden", className)}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once, amount: 0.3 }}
				variants={variants}
				transition={{
					delay, // ⬅️ hanya pakai delay, tidak spread transition dari variants
				}}>
				{children}
			</motion.div>
		</div>
	);
}

interface AnimatedHeadlineProps {
	children: ReactNode;
	className?: string;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	animation?: "reveal" | "fade" | "slide";
	delay?: number;
}

export function AnimatedHeadline({
	children,
	className,
	level = 1,
	animation = "reveal",
	delay = 0,
}: AnimatedHeadlineProps) {
	// pakai ElementType supaya valid di JSX
	const Tag = `h${level}` as keyof React.JSX.IntrinsicElements as ElementType;

	const variants = {
		reveal: animationPresets.textReveal,
		fade: animationPresets.fade,
		slide: animationPresets.slide,
	}[animation];

	return (
		<div className="overflow-hidden">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={variants}
				transition={{
					delay, // ⬅️ buang spread transition
				}}>
				<Tag className={className}>{children}</Tag>
			</motion.div>
		</div>
	);
}

interface AnimatedParagraphProps {
	children: ReactNode;
	className?: string;
	delay?: number;
}

export function AnimatedParagraph({
	children,
	className,
	delay = 0,
}: AnimatedParagraphProps) {
	return (
		<motion.p
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={animationPresets.fade}
			transition={{
				delay,
			}}
			className={className}>
			{children}
		</motion.p>
	);
}
