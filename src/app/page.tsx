import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ThemeDemo } from "@/components/shared/theme-demo";

export default function Home() {
	return (
		<main>
			<ThemeToggle />
			<ThemeDemo />
		</main>
	);
}
