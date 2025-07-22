"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Props as ChartProps } from "react-apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

interface Props {
	id: string;
	color: string;
	height?: number;
	seriesName: string;
	seriesData: number[];
}

const ChartPul = ({ height, color, seriesName, seriesData }: Props) => {
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
		colors: [color],
	};

	const [options, setOptions] = useState<ChartProps>(areaChartOptions);
	const [series] = useState([
		{
			name: seriesName,
			data: seriesData,
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

export default ChartPul;
