"use client";

import React, { useState } from "react";

import { useBP, usePAM, usePUL } from "@/hooks/useBP";
import { Loader, LoadingScreen } from "@/components/atoms";
import { ChartHistorical, ChartPAM, ChartPul } from "@/components/molecules";
import { Breadcrumbs } from "@/components/organisms";

const Page = () => {
	const [loading, setLoading] = useState(false);

	const { data: chartHistorical, isLoading: loadingChartHistorical } = useBP();
	const { data: chartPam, isLoading: loadingChartPam } = usePAM();
	const { data: chartPul, isLoading: loadingChartPul } = usePUL();

	return (
		<>
			{loading && <LoadingScreen />}
			<Breadcrumbs pageTitle="Agregar registro" />
			<div className="box-border flex flex-wrap justify-center w-full">
				<div className="box-border m-0 pt-5 basis-[100%] grow-0 max-w-[100%] lg:basis-[50%] lg:max-w-[50%] xl:basis-[58.333333%] xl:max-w-[58.333333%]">
					<div className="bg-white text-[#1d2630] shadow-none overflow-hidden relative border-1 border-solid border-[#dbe0e5a6] rounded-[12px]">
						<div className="p-6">
							<div className="" style={{ flex: "1 1 auto" }}>
								<span className="m-0 text-xs font-semibold block uppercase">
									Historico de presión arterial
								</span>
							</div>
						</div>
						<hr className="border-[#dbe0e5a6]" />
						<div className="p-6">
							{loadingChartHistorical ? (
								<div className="flex items-center justify-center">
									<Loader />
								</div>
							) : (
								<>
									{!loadingChartHistorical && chartHistorical && (
										<ChartHistorical
											id="chartHistorical"
											colorSis={"#2ca87f"}
											colorDia={"#4680FF"}
											height={250}
											seriesNameSis="Sistolica"
											seriesNameDia="Diastolica"
											seriesDataSis={chartHistorical.sis}
											seriesDataDia={chartHistorical.dia}
										/>
									)}
								</>
							)}
						</div>
					</div>

					<div className="bg-white text-[#1d2630] shadow-none overflow-hidden relative border-1 border-solid border-[#dbe0e5a6] rounded-[12px] mt-6">
						<div className="p-6">
							<div className="" style={{ flex: "1 1 auto" }}>
								<span className="m-0 text-xs font-semibold block uppercase">
									Presión Arterial Media
								</span>
							</div>
						</div>
						<hr className="border-[#dbe0e5a6]" />
						<div className="p-6">
							{loadingChartPam ? (
								<div className="flex items-center justify-center">
									<Loader />
								</div>
							) : (
								<>
									{!loadingChartPam && chartPam && (
										<ChartPAM
											id="chartPAM"
											color={"#4680FF"}
											height={140}
											seriesName="PAM"
											seriesData={chartPam}
										/>
									)}
								</>
							)}
						</div>
					</div>

					<div className="bg-white text-[#1d2630] shadow-none overflow-hidden relative border-1 border-solid border-[#dbe0e5a6] rounded-[12px] mt-6">
						<div className="p-6">
							<div className="" style={{ flex: "1 1 auto" }}>
								<span className="m-0 text-xs font-semibold block uppercase">
									Histórico de Pulso
								</span>
							</div>
						</div>
						<hr className="border-[#dbe0e5a6]" />
						<div className="p-6">
							{loadingChartPul ? (
								<div className="flex items-center justify-center">
									<Loader />
								</div>
							) : (
								<>
									{!loadingChartPul && chartPul && (
										<ChartPul
											id="chartPUL"
											color={"#d31c1cd9"}
											height={140}
											seriesName="PUL"
											seriesData={chartPul}
										/>
									)}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
