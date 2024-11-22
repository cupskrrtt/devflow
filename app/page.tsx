import { Button } from "@/components/ui/button";

export default async function Home() {
	return (
		<section>
			<p>KNTL</p>
			<Button asChild>
				<a href="/dashboard">To dashboard</a>
			</Button>
		</section>
	);
}
