import { Login } from "@/components/organisms";
import React from "react";
import { twMerge } from "tailwind-merge";

const AuthSideImg = "/assets/images/auth/img-auth-sideimg.png";

const LoginPage = () => {
	return (
		<div className="min-h-screen">
			<div
				className={twMerge(
					"bg-white box-border flex flex-col flex-wrap justify-center min-h-screen w-full"
				)}
			>
				<div
					className={twMerge(
						"box-border flex-row m-0 max-w-none lg:flex-grow-0 lg:basis-full "
					)}
				>
					<div
						className={twMerge(
							"login-img basis-full box-border flex flex-grow-0 flex-row flex-wrap items-center justify-center m-0 w-full xl:max-w-full"
						)}
					>
						<div
							className={twMerge(
								"box-border flex-row hidden justify-start m-0 max-w-4xl self-center lg:basis-[59%] lg:flex lg:flex-grow-0 lg:max-w-[59%]"
							)}
						>
							<img
								className={twMerge(
									"bg-center bg-cover bg-no-repeat block min-h-screen object-cover relative w-full"
								)}
								src={AuthSideImg}
							/>
						</div>
						<div
							className={twMerge(
								"box-border flex flex-grow-1 flex-row justify-center m-0 lg:basis-[41%] lg:flex-grow-0 lg:max-w-[41%]"
							)}
						>
							<Login />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
