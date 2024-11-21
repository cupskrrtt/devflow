"use server";

export async function userSignUp(data: FormData) {
	const yal = await fetch("http://localhost:3000/api/auth/signup", {
		method: "POST",
		body: data,
	});

	console.log(await yal.json());
}

export async function userSignIn(data: FormData) {
	const yal = await fetch("http://localhost:3000/api/auth/signin", {
		method: "POST",
		body: data,
	});

	console.log(await yal.json());
}

export async function cookieCheck() {
	const yal = await fetch("http://localhost:3000/api/auth/refresh", {
		method: "GET",
		credentials: "include",
	});
}
