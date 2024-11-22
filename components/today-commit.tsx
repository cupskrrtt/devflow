import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { Github } from "lucide-react";

export default function TodayCommit() {
	return (
		<Card>
			<CardHeader>
				<CardDescription className="flex gap-2 items-center">
					<Github />
					<p>Today's commit</p>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="font-bold text-2xl">10</p>
			</CardContent>
		</Card>
	);
}
