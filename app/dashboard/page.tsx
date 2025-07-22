"use client";

import React, { useState } from "react";
import { useBps } from "@/hooks/useBP";
import { Loader, LoadingScreen } from "@/components/atoms";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { BP } from "@/types/BP";

const Dashboard = () => {
	const [loading, setLoading] = useState(false);

	const { data: bps, isLoading: loadingBps } = useBps();

	const statusColorMap: Record<string, string> = {
		alto: "bg-[#dc2626]",
		medio: "bg-[#edad4d]",
		bajo: "bg-[#2ca87f]",
	};

	const statusBodyTemplate = (rowData: BP) => {
		return (
			<>
				<span
					className={`max-w-full inline-flex items-center justify-center h-[32px] text-white whitespace-nowrap outline-0 border-0 px-[12px] py-0 align-middle box-border rounded-[6px] capitalize ${statusColorMap[rowData.pam]}`}
				>
					{rowData.pam}
				</span>
			</>
		);
	};

	return (
		<>
			{loadingBps && <LoadingScreen />}
			<div className="box-border flex flex-wrap justify-center w-full">
				<div className="box-border m-0 pt-5 basis-[100%] grow-0 max-w-[100%] lg:basis-[50%] lg:max-w-[50%] xl:basis-[58.333333%] xl:max-w-[58.333333%]">
					<div className="bg-white text-[#1d2630] shadow-none overflow-hidden relative border-1 border-solid border-[#dbe0e5a6] rounded-[12px]">
						<div className="p-6">
							<div className="" style={{ flex: "1 1 auto" }}>
								<span className="m-0 text-xs font-semibold block uppercase">
									Últimos registros
								</span>
							</div>
						</div>
						<hr className="border-[#dbe0e5a6]" />
						<div className="p-6">
							<DataTable value={bps}>
								<Column field="fecha" header="Fecha"></Column>
								<Column field="sis" header="SIS."></Column>
								<Column field="dia" header="DIA."></Column>
								<Column field="pul" header="PUL."></Column>
								<Column
									field="pam"
									header="???"
									body={statusBodyTemplate}
								></Column>
							</DataTable>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
