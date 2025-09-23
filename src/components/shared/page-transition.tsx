"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { animationPresets } from "@/lib/animations";

interface PageTransitionProps {
	children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				key={pathname}
				initial="initial"
				animate="animate"
				exit="exit"
				variants={animationPresets.pageTransition}
				className="min-h-screen">
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

// Loading transition component
export function LoadingTransition({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}>
			{children}
		</motion.div>
	);
}

// Stagger children animation
interface StaggerContainerProps {
	children: ReactNode;
	className?: string;
	staggerDelay?: number;
}

export function StaggerContainer({
	children,
	className,
	staggerDelay = 0.1,
}: StaggerContainerProps) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: staggerDelay,
						delayChildren: 0.2,
					},
				},
			}}
			className={className}>
			{children}
		</motion.div>
	);
}

export function StaggerItem({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<motion.div variants={animationPresets.fade} className={className}>
			{children}
		</motion.div>
	);
}
