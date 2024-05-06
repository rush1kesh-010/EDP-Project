import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const chartConfig = {
    type: "line",
    height: 240,
    series: [
        {
            name: "pulse",
            data: [160, 140, 70, 140, 155, 145, 140, 160, 150],
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
            categories: [" ", " ", " "],
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
            tickAmount: 3, // Set the number of ticks on the y-axis
        },
        grid: {
            show: true,
            borderColor: "#222222",
            strokeDashArray: 0,
            xaxis: {
                lines: {
                    show: false,
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
export default function PulseGraph() {
    return (

      <Card>
      <div className="bg-[white] p-2 rounded-xl  border border-sky-500 mx-3 ">

        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          
          <div>
          <Typography variant="h6" color="#bbbbbb">
            Pulse
          </Typography>
          <Typography
            variant="h4"
            color="#bbbbbb"
            className="max-w-sm font-normal"
          >
            90.8 c
          </Typography>
        </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
       </div>
      </Card>
    );
  }
