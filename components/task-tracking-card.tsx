import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { SquareCheckBig } from "lucide-react";

export default function TaskTrackingCard() {
	return (
		<Card>
			<CardHeader>
				<CardDescription className="flex gap-2 items-center">
					<SquareCheckBig />
					<p>Task Completed</p>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="font-bold text-2xl">5/15</p>
			</CardContent>
		</Card>
	);
}
