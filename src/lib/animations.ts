import { Variants, Transition } from "framer-motion";

// Easing curves (editorial-style smooth animations)
export const easings = {
	easeOut: [0.0, 0.0, 0.2, 1],
	easeIn: [0.4, 0.0, 1, 1],
	easeInOut: [0.4, 0.0, 0.2, 1],
	backOut: [0.175, 0.885, 0.32, 1.275],
	circOut: [0.075, 0.82, 0.165, 1],
} as const;

// Common transition presets
export const transitions: Record<string, Transition> = {
	default: {
		duration: 0.6,
		ease: easings.easeOut,
	},
	fast: {
		duration: 0.3,
		ease: easings.easeOut,
	},
	slow: {
		duration: 1,
		ease: easings.easeOut,
	},
	spring: {
		type: "spring",
		stiffness: 300,
		damping: 30,
	},
	bounce: {
		type: "spring",
		stiffness: 400,
		damping: 10,
	},
} as const;

// Text reveal animations (editorial style)
export const textRevealVariants: Variants = {
	hidden: {
		y: "100%",
		opacity: 0,
	},
	visible: {
		y: "0%",
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: easings.easeOut,
		},
	},
};

// Staggered text animation
export const staggerTextVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

// Letter-by-letter animation
export const letterVariants: Variants = {
	hidden: {
		y: 50,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: easings.easeOut,
		},
	},
};

// Image reveal animations
export const imageRevealVariants: Variants = {
	hidden: {
		scale: 1.1,
		opacity: 0,
	},
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 1,
			ease: easings.easeOut,
		},
	},
};

// Slide animations
export const slideVariants: Variants = {
	hidden: {
		x: -60,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: transitions.default,
	},
	exit: {
		x: 60,
		opacity: 0,
		transition: transitions.fast,
	},
};

// Fade animations
export const fadeVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: transitions.default,
	},
	exit: {
		opacity: 0,
		transition: transitions.fast,
	},
};

// Scale animations
export const scaleVariants: Variants = {
	hidden: {
		scale: 0.95,
		opacity: 0,
	},
	visible: {
		scale: 1,
		opacity: 1,
		transition: transitions.default,
	},
	exit: {
		scale: 0.95,
		opacity: 0,
		transition: transitions.fast,
	},
};

// Page transition animations
export const pageTransitionVariants: Variants = {
	initial: {
		opacity: 0,
		y: 20,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: easings.easeOut,
		},
	},
	exit: {
		opacity: 0,
		y: -20,
		transition: {
			duration: 0.3,
			ease: easings.easeIn,
		},
	},
};

// Hover animations
export const hoverVariants: Variants = {
	initial: {
		scale: 1,
	},
	hover: {
		scale: 1.02,
		transition: transitions.spring,
	},
	tap: {
		scale: 0.98,
	},
};

// Card hover animation
export const cardHoverVariants: Variants = {
	initial: {
		y: 0,
		boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
	},
	hover: {
		y: -8,
		boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
		transition: transitions.default,
	},
};

// Underline reveal animation (for links)
export const underlineVariants: Variants = {
	hidden: {
		scaleX: 0,
		originX: 0,
	},
	visible: {
		scaleX: 1,
		transition: {
			duration: 0.3,
			ease: easings.easeOut,
		},
	},
};

// Loading spinner animation
export const spinnerVariants: Variants = {
	animate: {
		rotate: 360,
		transition: {
			duration: 1,
			repeat: Infinity,
			ease: "linear",
		},
	},
};

// Export all presets as a single object for easy import
export const animationPresets = {
	textReveal: textRevealVariants,
	staggerText: staggerTextVariants,
	letter: letterVariants,
	imageReveal: imageRevealVariants,
	slide: slideVariants,
	fade: fadeVariants,
	scale: scaleVariants,
	pageTransition: pageTransitionVariants,
	hover: hoverVariants,
	cardHover: cardHoverVariants,
	underline: underlineVariants,
	spinner: spinnerVariants,
	transitions,
	easings,
} as const;
