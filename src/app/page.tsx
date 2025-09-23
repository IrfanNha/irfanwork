"use client";

import { motion } from "framer-motion";

const letters = "irfanwork.".split("");

export default function SplashScreen() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-background">
			{/* Animasi Huruf */}
			<div className="flex space-x-1 font-heading text-5xl md:text-7xl font-bold text-primary">
				{letters.map((letter, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
						transition={{
							duration: 4, // lebih panjang → lebih calm
							ease: "easeInOut",
							repeat: Infinity,
							delay: index * 0.3, // jeda antar huruf lebih lama
						}}>
						{letter}
					</motion.span>
				))}
			</div>

			{/* Progress Bar */}
			<div className="relative mt-8 h-1 w-48 overflow-hidden rounded-full bg-muted">
				<motion.div
					className="absolute left-0 top-0 h-full w-1/3 bg-primary"
					animate={{ x: ["-100%", "300%"] }}
					transition={{
						duration: 3, // lebih lambat
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			</div>
		</div>
	);
}
