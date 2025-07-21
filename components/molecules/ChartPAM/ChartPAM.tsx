"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Props as ChartProps } from "react-apexcharts";

const DynamicApexCharts = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

interface Props {
	id: string;
	color: string;
	height?: number;
	seriesName: string;
	seriesData: number[];
}

const MonthlyChart = ({ id, color, height, seriesName, seriesData }: Props) => {
	const areaChartOptions = {
		chart: {
			id: id,
			type: "bar",
			sparkline: {
				enabled: true,
			},
			toolbar: {
				show: false,
			},
		},
		dataLabels: {
			enabled: true,
		},
		plotOptions: {
			bar: {
				borderRadius: 2,
				columnWidth: "80%",
			},
		},
		xaxis: {
			crossHairs: {
				width: 1,
			},
		},
		tooltip: {
			fixed: {
				enabled: false,
			},
			x: {
				show: true,
			},
			y: {
				show: true,
			},
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
		<DynamicApexCharts
			options={options}
			series={series}
			type="bar"
			height={height ? height : 50}
		/>
	);
};

export default MonthlyChart;
