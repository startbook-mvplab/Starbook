import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, ChartData, ChartOptions } from "chart.js";
import { FC } from "react";
import { CustomBox } from "../CustomBox";
import { Box, Skeleton, Stack, Typography, useTheme } from "@mui/material";
import { CustomIcon } from "../CustomIcon";
import EqualizerIcon from "@mui/icons-material/Equalizer";

import ChartIndicatorWithArrow from "../ChartIndicatorWithArrow/ChartIndicatorWithArrow";
import { PercentNumberWithValidation } from "../PercentNumberWithValidation";
import { monthsData } from "@/presentation/utilities";

export interface LineChartProps {
  chartTitle: string,
  width?: number,
  height?: number,
  loading?: boolean,
  type: "ventas" | "inversiones" | "clientes";
  xAxisData: string[];
  yDataGreenLine: number[];
  yDataGrayLine: number[];
  minValue?: number,
  maxValue?: number,
  stepSize?: number,
  topValue?: string | number, // es el valor que sale debajo del titulo de la grafica
  topPercent?: number, // es el valor que sale a la derecha de la variable anterior
}

Chart.register(CategoryScale);

const LineChart: FC<LineChartProps> = ({
  chartTitle,
  width,
  height = 400,
  loading = false,
  type,
  xAxisData,
  yDataGreenLine,
  yDataGrayLine,
  minValue = 0,
  maxValue = 50000,
  stepSize = 10000,
  topValue = 0,
  topPercent = 0


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
    // showLine:false,

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


  const theme = useTheme();

  const data: ChartData<"line"> = {
    labels: xAxisData.length === 0 ? monthsData : xAxisData,
    datasets: [
      {
        // pointRadius: 5,
        fill: false,
        tension: 0.5,
        pointRadius: 3,
        // pointBackgroundColor: 'rgba(0, 123, 255, 1)', // Color de fondo de los puntos de datos
        // pointBorderColor: 'rgba(255, 255, 255, 1)',
        // label: "Europe",
        label: "",
        pointHoverRadius: 5,
        pointStyle: "circle",
        // borderColor: primary,
        // backgroundColor: primary,
        borderColor: type === "clientes" ? theme.colors.primary.dark : "#00faa7",
        backgroundColor: type === "clientes" ? theme.colors.primary.dark : "#00faa7",
        pointHoverBorderWidth: 5,
        pointHoverBorderColor: white,
        pointBorderColor: "transparent",
        pointHoverBackgroundColor: primary,
        data: yDataGreenLine,
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
        data: yDataGrayLine,
      },

    ],
  };

  return (
    <CustomBox>
      <Typography variant="body1" fontSize={18}>
        {chartTitle}
      </Typography>

      <VentasInfo loading={loading} value={topValue} percent={topPercent} />

      <Box
        sx={{
          width: "600px",
          height: "300px",
        }}
      >
        {
          loading ?
            <Skeleton animation="wave" height={300} />
            :
            <Line data={data} height={height} options={options} />
        }
      </Box>
    </CustomBox>
  );
};

export default LineChart;

interface VentasInfoProps {
  loading?: boolean,
  value: string | number,
  percent: number,
}


const VentasInfo: FC<VentasInfoProps> = ({ loading = false, value, percent }) => {
  return (
    <Stack
      direction="column"
      spacing={0}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        <CustomIcon width={12} height={8} iconName="subida2" />
        <Box
          sx={{
            height: "40px",
            width: "40px",
            // bgcolor:'red',
            background: "#17151D 0% 0% no-repeat padding-box",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <EqualizerIcon sx={{ color: "#02FBA8" }} />
        </Box>
      </Stack>

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      // pt='20px'
      >
        {
          loading ?
            <Skeleton animation="wave" height={30} width={120} />
            :
            <Typography variant="body1" fontSize={24} >
              {value}
            </Typography>
        }

        {
          loading ?
            <Skeleton animation="wave" height={30} width={40} />
            :
            <PercentNumberWithValidation
              variant="body1"
              fontSize={18}
              percent={percent}
            />
        }

        {
          loading ?
            <Skeleton animation="wave" height={30} width={30} />
            :
            percent > 0 &&
            <ChartIndicatorWithArrow
              width={12}
              height={8}
              isGreen={percent >= 0}
            />
        }
      </Stack>
    </Stack>
  );
};
