import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cookieCheck, userSignIn, userSignUp } from "@/lib/data/auth";

export default async function Home() {
	return (
		<div>
			<div>
				<form action={userSignIn} className="flex flex-col gap-2">
					<Input name="email" type="email" />
					<Input name="password" type="password" />
					<Button type="submit">Sign In</Button>
				</form>
			</div>
			<div>
				<form action={userSignUp} className="flex flex-col gap-2">
					<Input name="email" type="email" placeholder="email" />
					<Input name="password" type="password" placeholder="password" />
					<Input name="username" type="text" placeholder="username" />
					<Button type="submit">Sign Up</Button>
				</form>
			</div>
			<div>
				<form action={cookieCheck}>
					<Button type="submit">Check cookie</Button>
				</form>
			</div>
		</div>
	);
}
