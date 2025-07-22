"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Toast } from "primereact/toast";

import { BPFormSchema } from "@/schema/bpSchema";

import { LoadingScreen, Message } from "@/components/atoms";
import { Breadcrumbs } from "@/components/organisms";
import apis from "@/apis";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const Page = () => {
	const toast = useRef<Toast>(null);
	const [loading, setLoading] = useState(false);

	const { data: currentUser, uid } = useCurrentUser();
	const userUid = uid;

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm<BPFormSchema>({
		defaultValues: {},
	});

	const onSubmit = async (data: BPFormSchema) => {
		try {
			setLoading(true);
			const dia = Number(data.dia);
			const sis = Number(data.sis);
			const pam = Math.round((2 * dia + sis) / 3);
			await apis.bp.AddBps({
				...data,
				pam,
				createdBy: uid ?? "",
				updatedBy: uid ?? "",
			});

			toast.current?.show({
				severity: "success",
				summary: "Éxito",
				detail: "Datos registrados correctamente",
				life: 3000,
			});

			reset();
		} catch (error) {
			console.error(error);
			toast.current?.show({
				severity: "error",
				summary: "Error",
				detail: `No se pudo guardar el registro: ${error}`,
				life: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{loading && <LoadingScreen />}
			<Breadcrumbs pageTitle="Agregar registro" />
			<div className="box-border flex flex-wrap justify-center w-full">
				<div className="box-border m-0 pt-5 basis-[100%] grow-0 max-w-[100%] lg:basis-[50%] lg:max-w-[50%] xl:basis-[58.333333%] xl:max-w-[58.333333%]">
					<div className="bg-white text-[#1d2630] shadow-none overflow-hidden relative border-1 border-solid border-[#dbe0e5a6] rounded-[12px]">
						<div className="flex items-center p-5">
							<div className="" style={{ flex: "1 1 auto" }}>
								<span className="m-0 text-xs font-semibold block uppercase">
									Agregar valores
								</span>
							</div>
						</div>
						<hr className="border-[#dbe0e5a6]" />
						<form onSubmit={handleSubmit(onSubmit)} className="p-6">
							<h5
								className="m-0 font-semibold text-sm mb-4"
								style={{ lineHeight: "1.5" }}
							>
								Datos
							</h5>
							<div
								className="box-border flex flex-wrap mt-[-24px] ml-[-24px] text-[#5b6b79]"
								style={{ width: "calc(100% + 24px" }}
							>
								<div className="box-border m-0 basis-[100%] grow-0 min-w-[100%] pl-6 pt-6 lg:basis-[50%] lg:min-w-[50%]">
									<div className="flex flex-col">
										<label
											htmlFor="sistolica"
											className="text-xs font-light p-0 relative block whitespace-nowrap overflow-hidden max-w-[100%]"
										>
											Presión sistólica (mmHg)
										</label>
										<div className="inline-flex flex-col relative min-w-0 p-0 border-0 align-top w-full mb-2 mt-2">
											<div className="box-border inline-flex w-full relative rounded-[8px] border border-solid border-[#bec8d0] h-12">
												<input
													id="sistolica"
													type="number"
													className="border-0 box-border bg-none m-0 block min-w-0 w-full p-[14px]"
													placeholder="140"
													autoComplete="off"
													{...register("sis")}
												/>
											</div>
										</div>
										{errors.sis && (
											<Message severity="error" text={errors.sis.message} />
										)}
									</div>
								</div>

								<div className="box-border m-0 basis-[100%] grow-0 min-w-[100%] pl-6 pt-6 lg:basis-[50%] lg:min-w-[50%]">
									<div className="flex flex-col">
										<label
											htmlFor="diastolica"
											className="text-xs font-light p-0 relative block whitespace-nowrap overflow-hidden max-w-[100%]"
										>
											Presión diastólica (mmHg)
										</label>
										<div className="inline-flex flex-col relative min-w-0 p-0 border-0 align-top w-full mb-2 mt-2">
											<div className="box-border inline-flex w-full relative rounded-[8px] border border-solid border-[#bec8d0] h-12">
												<input
													id="diastolica"
													type="number"
													className="border-0 box-border bg-none m-0 block min-w-0 w-full p-[14px]"
													placeholder="70"
													autoComplete="off"
													{...register("dia")}
												/>
											</div>
										</div>
										{errors.dia && (
											<Message severity="error" text={errors.dia.message} />
										)}
									</div>
								</div>

								<div className="box-border m-0 basis-[100%] grow-0 min-w-[100%] pl-6 pt-6 lg:basis-[50%] lg:min-w-[50%]">
									<div className="flex flex-col">
										<label
											htmlFor="pulso"
											className="text-xs font-light p-0 relative block whitespace-nowrap overflow-hidden max-w-[100%]"
										>
											Pulsación (min)
										</label>
										<div className="inline-flex flex-col relative min-w-0 p-0 border-0 align-top w-full mb-2 mt-2">
											<div className="box-border inline-flex w-full relative rounded-[8px] border border-solid border-[#bec8d0] h-12">
												<input
													id="pulso"
													type="number"
													className="border-0 box-border bg-none m-0 block min-w-0 w-full p-[14px]"
													placeholder="70"
													autoComplete="off"
													{...register("pul")}
												/>
											</div>
										</div>
										{errors.pul && (
											<Message severity="error" text={errors.pul.message} />
										)}
									</div>
								</div>
							</div>
							<div className="flex justify-center lg:justify-end">
								<div
									className="w-full"
									style={{ willChange: "auto", transform: "none" }}
								>
									<button
										type="submit"
										className="flex items-center relative box-border outline-0 border-0 m-0 cursor-pointer align-middle capitalize text-xs min-w-[64px] px-4 py-[10px] rounded-[8px] text-white bg-[#4680ff] shadow-nonw font-medium mt-6 mb-6 w-full justify-center uppercase lg:capitalize lg:ml-2 lg:py-[6px]"
										style={{ textDecoration: "none", lineHeight: "1.75" }}
										disabled={loading}
									>
										Registrar
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Toast ref={toast} />
		</>
	);
};

export default Page;
