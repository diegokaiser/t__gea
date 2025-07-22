"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { useAuth } from "@/hooks/useAuth";
import { Loader } from "@/components/atoms";

type LoginFormValues = {
	email: string;
	password: string;
};

const Login = () => {
	const [keepSession, setKeepSession] = useState(false);
	const { login, loginWithGoogle, loading } = useAuth();
	const router = useRouter();

	const handleGoogle = async () => {
		try {
			await loginWithGoogle();
		} catch (err: any) {
			console.error(err.message);
		}
	};

	if (loading) return <Loader />;

	return (
		<div className="m-6 w-8/12 md:w-[420px]">
			<div className="md:p-10 w-full">
				<div className="box-border flex flex-col flex-wrap w-full md:flex-row">
					<div className="pt-6 sm:basis-full flex-grow-0 max-w-full">
						<div className="align-baseline flex flex-row justify-between">
							<h3 className="m-0 font-semibold leading-6 text-2xl">
								Identificarse
							</h3>
						</div>
					</div>
					<div className="pt-6 sm:basis-full flex-grow-0 max-w-full">
						<div className="box-border m-0 pt-6 lg:basis-full lg:flex-grow-0 lg:max-w-full">
							<Button
								className="justify-center w-full"
								icon="pi pi-google"
								label="Google"
								onClick={handleGoogle}
								outlined
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
