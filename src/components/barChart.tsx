import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface BarChartProps {
  series: {
    name?: string;
    type?: string;
    color?: string;
    group?: string;
    hidden?: boolean;
    zIndex?: number;
    data: {
      x: any;
      y: any;
      fill?: ApexFill;
      fillColor?: string;
      strokeColor?: string;
      meta?: any;
      goals?: {
        name?: string;
        value: number;
        strokeHeight?: number;
        strokeWidth?: number;
        strokeColor?: string;
        strokeDashArray?: number;
        strokeLineCap?: "butt" | "square" | "round";
      }[];
      barHeightOffset?: number;
      columnWidthOffset?: number;
    }[];
  }[];
  title?: string;
}

export default function BarChart({ series = [], title }: BarChartProps) {
  const [options, setOptions] = useState<ApexCharts.ApexOptions>({
    colors: ["#1A56DB", "#FDBA8C"],
    chart: {
      height: "320px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      type: "category",
      categories: series[0]?.data.map((item) => "" + item?.x),
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
    },
    fill: {
      opacity: 1,
    },
  });

  useEffect(() => {
    setOptions((prev: any) => ({
      ...prev,
      xaxis: {
        ...prev.xaxis,
        categories: series[0]?.data.map((item) => item?.x),
      },
    }));
  }, [series]);

  return (
    <Card className="hover:scale-105 transition-transform border-gray-300">
      <h1 className="font-extrabold">{title}</h1>
      <Chart type="bar" height="320px" options={options} series={series} />
    </Card>
  );
}
