"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Props as ChartProps } from "react-apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

interface Props {
	id: string;
	colorSis: string;
	colorDia: string;
	height?: number;
	seriesNameSis: string;
	seriesNameDia: string;
	seriesDataSis: number[];
	seriesDataDia: number[];
}

const ChartHistorical = ({
	height,
	seriesNameSis,
	seriesNameDia,
	seriesDataSis,
	seriesDataDia,
}: Props) => {
	const areaChartOptions = {
		chart: {
			type: "area",
			toolbar: {
				show: false,
			},
		},
		dataLabels: {
			enabled: true,
		},
		stroke: {
			width: 1,
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				type: "vertical",
				inverseColors: false,
				opacityFrom: 0.5,
				opacity: 0,
			},
		},
		plotOptions: {
			bar: {
				columnWidth: "45%",
				borderRadius: 4,
			},
		},
		grid: {
			strokeDashArray: 4,
		},
	};

	const [options, setOptions] = useState<ChartProps>(areaChartOptions);
	const [series] = useState([
		{
			name: seriesNameSis,
			data: seriesDataSis,
		},
		{
			name: seriesNameDia,
			data: seriesDataDia,
		},
	]);

	return (
		<ReactApexChart
			options={options}
			series={series}
			type="area"
			height={height ? height : 50}
		/>
	);
};

export default ChartHistorical;
