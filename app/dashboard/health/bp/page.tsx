"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { Loader, LoadingScreen, Message } from "@/components/atoms";
import { Breadcrumbs } from "@/components/organisms";
import apis from "@/apis";

const Page = () => {
	const [loading, setLoading] = useState(false);

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
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
