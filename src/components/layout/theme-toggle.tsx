"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
	const { theme, setTheme, mounted } = useTheme();

	// Don't render until mounted to prevent hydration mismatch
	if (!mounted) {
		return (
			<Button variant="ghost" size="sm" className="w-9 h-9">
				<div className="w-4 h-4" />
			</Button>
		);
	}

	const themeIcons = {
		light: Sun,
		dark: Moon,
		system: Monitor,
	};

	const currentTheme = (theme as keyof typeof themeIcons) || "system";
	const Icon = themeIcons[currentTheme];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="sm"
					className="w-9 h-9 relative overflow-hidden">
					<AnimatePresence mode="wait" initial={false}>
						<motion.div
							key={currentTheme}
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 20, opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="absolute inset-0 flex items-center justify-center">
							<Icon className="h-4 w-4" />
						</motion.div>
					</AnimatePresence>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-36">
				<DropdownMenuItem
					onClick={() => setTheme("light")}
					className="flex items-center gap-2">
					<Sun className="h-4 w-4" />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme("dark")}
					className="flex items-center gap-2">
					<Moon className="h-4 w-4" />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme("system")}
					className="flex items-center gap-2">
					<Monitor className="h-4 w-4" />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

// Simple toggle version (without dropdown)
export function ThemeToggleSimple() {
	const { toggleTheme, isDark, mounted } = useTheme();

	if (!mounted) {
		return <Button variant="ghost" size="sm" className="w-9 h-9" />;
	}

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={toggleTheme}
			className="w-9 h-9 relative overflow-hidden">
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={isDark ? "dark" : "light"}
					initial={{ rotate: -90, opacity: 0 }}
					animate={{ rotate: 0, opacity: 1 }}
					exit={{ rotate: 90, opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="absolute inset-0 flex items-center justify-center">
					{isDark ? (
						<Moon className="h-4 w-4" />
					) : (
						<Sun className="h-4 w-4" />
					)}
				</motion.div>
			</AnimatePresence>
		</Button>
	);
}
