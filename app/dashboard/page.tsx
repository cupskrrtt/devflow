import ProductivityCard from "@/components/productivity-card";
import TaskTrackingCard from "@/components/task-tracking-card";
import TodayCommit from "@/components/today-commit";
import TodayTime from "@/components/today-time";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { ChartArea } from "lucide-react";

export default function DashboardPage() {
	return (
		<section className="container mx-auto px-4">
			<div className="flex flex-col gap-2">
				<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
					Dashboard
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
					<TodayTime />
					<TodayCommit />
					<TaskTrackingCard />
					<ProductivityCard />
				</div>
				<Card>
					<CardHeader>
						<CardDescription className="flex gap-2 items-center">
							<ChartArea />
							<p>Coding time</p>
						</CardDescription>
					</CardHeader>
					{/*Implement the chart*/}
				</Card>
			</div>
		</section>
	);
}
