import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { ChartColumn } from "lucide-react";

export default function ProductivityCard() {
	return (
		<Card>
			<CardHeader>
				<CardDescription className="flex gap-2 items-center">
					<ChartColumn />
					<p>Productivity</p>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="font-bold text-2xl">85%</p>
			</CardContent>
		</Card>
	);
}
