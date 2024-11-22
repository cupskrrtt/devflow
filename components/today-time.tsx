import { Clock } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";

export default function TodayTime() {
	return (
		<Card>
			<CardHeader>
				<CardDescription className="flex gap-2 items-center">
					<Clock />
					<p>Today's time</p>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="font-bold text-2xl">2H 3M</p>
			</CardContent>
		</Card>
	);
}
