"use client";

import Button from "./(components)/button";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Form() {
	const [loading, setLoading] = useState<boolean>(false);
	const [path, setPath] = useState("");
	const [month, setMonth] = useState("");
	const router = useRouter();

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		if (path !== "" && month !== "") {
			router.push(`/repo/${path}/${month}`);
		}
	};

	const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) =>
		setPath(e.target.value);

	const handleMonthInputChange = (e: ChangeEvent<HTMLInputElement>) =>
		setMonth(e.target.value);

	return (
		<form onSubmit={handleFormSubmit}>
			<input
				type="text"
				placeholder="Repository URL"
				onChange={handleTextInputChange}
			/>
			<input type="month" name="x" id="" onChange={handleMonthInputChange} />

			<Button disabled={loading}>
				{loading ? <p>Calculating...</p> : <p>Calculate</p>}
			</Button>
		</form>
	);
}
