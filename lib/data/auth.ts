"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface FormStatus {
	type: string;
	message: string;
	error?: any;
}

export async function userSignUp(
	prev: FormStatus,
	data: FormData,
): Promise<FormStatus> {
	const cookieStore = await cookies();
	const yal = await fetch("http://localhost:3001/", {
		method: "GET",
	});

	const cookieData = (await yal.json()).data;

	console.log(cookieData);

	cookieStore.set("access_token", cookieData, {
		httpOnly: true,
		secure: true,
		sameSite: "none",
	});

	return {
		type: "SUCCESS",
		message: "Cookie setup",
	};
}

export async function userSignIn(data: FormData) {
	const cookieStore = await cookies();

	const act = cookieStore.get("access_token")?.value;
	console.log(act);

	await fetch("http://localhost:3001/", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${act}`,
		},
	});
}

export async function cookieCheck() {
	const yal = await fetch("http://localhost:3000/api/auth/refresh", {
		method: "GET",
		credentials: "include",
	});
}
