"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { useAuth } from "@/hooks/useAuth";
import { Loader } from "@/components/atoms";

type LoginFormValues = {
	email: string;
	password: string;
};

const Login = () => {
	const [keepSession, setKeepSession] = useState(false);
	const { login, loginWithGoogle, loading } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormValues>();

	const onSubmit = async (data: LoginFormValues) => {
		try {
			await login(data.email, data.password);
		} catch (err: any) {
			console.error(err.message);
		}
	};

	const handleGoogle = async () => {
		try {
			await loginWithGoogle();
		} catch (err: any) {
			console.error(err.message);
		}
	};

	if (loading) return <Loader />;

	return (
		<div className="m-6 max-w-[540px]">
			<div className="p-10">
				<div className="box-border flex flex-row flex-wrap w-full">
					<div className="pt-6 sm:basis-full flex-grow-0 max-w-full">
						<div className="align-baseline flex flex-row justify-between">
							<h3 className="m-0 font-semibold leading-6 text-2xl ">
								Identificarse
							</h3>
						</div>
					</div>
					<div className="pt-6 sm:basis-full flex-grow-0 max-w-full">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col gap-2"
						>
							<div className="box-border flex flex-row flex-wrap">
								<div className="box-border m-0 pt-6 lg:basis-full lg:flex-grow-0 lg:max-w-full">
									<div className="flex flex-col gap-y-2">
										<label className="text-gray-500" htmlFor="email">
											Correo electrónico
										</label>
										<InputText
											aria-describedby="email-help"
											id="email"
											placeholder="Email"
											type="email"
											{...register("email", {
												required: "Este campo es obligatorio",
											})}
										/>
										{errors.email && (
											<span className="text-red-500">
												{errors.email.message}
											</span>
										)}
									</div>
								</div>
								<div className="box-border m-0 pt-6 lg:basis-full lg:flex-grow-0 lg:max-w-full">
									<div className="flex flex-col gap-y-2">
										<label className="text-gray-500" htmlFor="password">
											Contraseña
										</label>
										<InputText
											aria-describedby="password-help"
											id="password"
											placeholder="*******"
											type="password"
											{...register("password", {
												required: "Este campo es obligatorio",
											})}
										/>
										{errors.password && (
											<span className="text-red-500">
												{errors.password.message}
											</span>
										)}
									</div>
								</div>
								<div className="box-border m-0 pt-10 lg:basis-full lg:flex-grow-0 lg:max-w-full">
									<div className="flex flex-row items-center justify-between">
										<div className="flex gap-x-3 items-center">
											<Checkbox
												inputId="keepSession"
												name="keepSession"
												value={keepSession}
												onChange={() => setKeepSession(!keepSession)}
												checked={keepSession}
											/>
											<label className="text-gray-600" htmlFor="keepSession">
												Mantener la sesión
											</label>
										</div>
										<Link className="text-gray-600" href="/forgot-password">
											Olvidé mi contraseña
										</Link>
									</div>
								</div>
								<div className="box-border m-0 pt-10 lg:basis-full lg:flex-grow-0 lg:max-w-full">
									<Button className="w-full" label="Login" type="submit" />
								</div>
							</div>
						</form>
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
