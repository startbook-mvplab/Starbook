import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, ChartData, ChartOptions } from "chart.js";
import { FC } from "react";
import { Box, Skeleton } from "@mui/material";
import { IDataPoint } from "@/data/interfaces";
import { grayLineDataYValues, monthsData } from "@/presentation/utilities";

export interface LineChartProps {
  loading?: boolean,
  type: "ventas" | "inversiones";
  yDataGrayLine?: number[];
  dataPoints: IDataPoint[],
  maxValue?: number,
  minValue?: number,
  stepSize?: number,
}

Chart.register(CategoryScale);

const SimpleLineChart: FC<LineChartProps> = ({
  loading,
  type,
  dataPoints,
  maxValue,
  minValue,
  stepSize,
}) => {
  const white = "#fff";
  // const labelColor = "pink";
  const labelColor = "grey";
  const success = "#d4e157";
  const borderColor = "gray";
  const legendColor = "pink";
  const primary = "#9e69fd";
  const warning = "#ff9800";

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        ticks: { color: labelColor },
        grid: {
          borderColor,
          drawBorder: false,
          color: "transparent",
        },
      },
      y: {
        min: minValue,
        max: maxValue,
        ticks: {
          stepSize: stepSize,
          color: labelColor,
        },
        grid: {
          borderDash: [1, 10],
          borderColor,
          drawBorder: false,
          color: borderColor,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        align: "end",
        position: "top",
        labels: {
          padding: 25,
          boxWidth: 10,
          color: legendColor,
          usePointStyle: true,
        },
      },
    },
  };

  const xAxisData = dataPoints.map(e => e.xAxis as string);
  // console.log(xAxisData);
  const data: ChartData<"line"> = {
    // labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
    labels: xAxisData.length === 0 ? monthsData : xAxisData,
    datasets: [
      {
        fill: false,
        tension: 0.5,
        pointRadius: 3,
        // label: "Europe",
        label: "",
        pointHoverRadius: 5,
        pointStyle: "circle",
        // borderColor: primary,
        // backgroundColor: primary,
        borderColor: "#00faa7",
        backgroundColor: "#00faa7",
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: white,
        pointBorderColor: "transparent",
        pointHoverBackgroundColor: primary,
        data: dataPoints.map(e => e.yAxis),
      },
      {
        fill: false,
        tension: 0.5,
        // label: "Asia",
        label: "",
        pointRadius: 1,
        pointHoverRadius: 5,
        pointStyle: "circle",
        // borderColor: warning,
        // backgroundColor: warning,
        borderColor: "#333434",
        backgroundColor: "#333434",
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: white,
        pointBorderColor: "transparent",
        pointHoverBackgroundColor: warning,
        data: grayLineDataYValues,
      },
    ],
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "",
          }}
        >
          {
            loading ?
              <Skeleton animation="wave" height='100%' width='100%' />
              :
              <Line data={data} height={400} options={options} />
          }
        </Box>
      </Box>
    </>
  );
};

export default SimpleLineChart;
