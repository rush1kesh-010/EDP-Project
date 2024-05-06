import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
   
  // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
  // import dynamic from "next/dynamic";
  // const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
   
  const chartConfig = {
    type: "line",
    height: 240,
    series: [
      {
        name: "intensity",
        data: [71, 42, 19, 30, 40, 60, 50, 40, 70, 50],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#348ACF"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#348ACF",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          " ",
          " ",
          " ",
          "  ",
          " ",
          " ",
          " ",
          " ",
          " ",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#348ACF",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#222222",
        strokeDashArray: 0,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
   
  export default function DripIntenseGraph() {
    return (
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          
         
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
        <div>
           <Typography variant="small" color="gray" className="max-w-sm md:flex-row md:items-center font-normal">
            Intensity of drip flow
           </Typography>
           </div>
      </Card>
    );
  }