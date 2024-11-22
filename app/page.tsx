"use client";
import { Button } from "@/components/ui/button";
import { userSignIn, userSignUp } from "@/lib/data/auth";
import { useActionState } from "react";

export default function Home() {
	const [state, formAction, pending] = useActionState(userSignUp, {
		message: "",
		type: "",
	});
	return (
		<section className="flex flex-col gap-2">
			<p>KNTL</p>
			<Button asChild>
				<a href="/dashboard">To dashboard</a>
			</Button>
			<form action={formAction}>
				<Button type="submit">Get Cookie</Button>
			</form>

			<form action={userSignIn}>
				<Button type="submit">Test Cookie</Button>
			</form>
		</section>
	);
}
