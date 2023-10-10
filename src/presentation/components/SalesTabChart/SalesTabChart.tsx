import { IChartInfo, IDataPoint } from "@/data/interfaces";
import { Button, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { LineChart } from "../LineChart";
import { grayLineDataYValues } from "@/presentation/utilities";


interface SalesTabChartProps {
  loading?: boolean,
  monthsData: IChartInfo,
  yearsData?: IChartInfo,
  qrt?: IChartInfo,
}
//   dataPointsMonths: IDataPoint[],
//   topValue?: string | number, // es el valor que sale debajo del titulo de la grafica
//   topPercent?: number, // es el valor que sale a la derecha de la variable anterior
// }

const SalesTabChart: FC<SalesTabChartProps> = ({ loading = false, monthsData, yearsData, qrt }) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const [salesData, setSalesData] = useState<IChartInfo>(monthsData);

  useEffect(() => {
    switch (tabIndex) {
      case 0:
        setSalesData(monthsData);
        break;
      case 1:
        setSalesData(yearsData ?? monthsData);
        break;
      case 2:
        setSalesData(qrt ?? monthsData);
        break;
      default:
        break;
    }
  }, [tabIndex, monthsData])


  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={0}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        mt="50px"
      >
        <CustomTab
          title="Ventas por meses"
          select={tabIndex === 0}
          onClick={() => setTabIndex(0)}
        />
        <CustomTab
          title="Ventas por año"
          select={tabIndex === 1}
          onClick={() => setTabIndex(1)}
        />
        <CustomTab
          title="Ventas por Qrt"
          select={tabIndex === 2}
          onClick={() => setTabIndex(2)}
        />
      </Stack>

      <LineChart
        minValue={salesData.minValue}
        maxValue={salesData.maxValue}
        stepSize={salesData.stepSize}
        chartTitle={salesData.title}
        loading={loading}
        type="ventas"
        topValue={salesData.topValue}
        topPercent={salesData.topPercent}
        xAxisData={salesData.dataPoints.map(e => e.xAxis as string)}
        yDataGreenLine={salesData.dataPoints.map(e => e.yAxis)}
        yDataGrayLine={grayLineDataYValues}
      />
    </Stack>
  );
};

export default SalesTabChart;

interface CustomTabProps {
  title: string;
  select?: boolean;
  onClick?: () => void;
}

const CustomTab: FC<CustomTabProps> = ({ title, onClick, select = false }) => {
  return (
    <Button
      variant={select ? "outlined" : "text"}
      sx={{
        width: "220px",
        // textAlign: 'end',
        justifyContent: "end",
        borderRadius: "14px",
      }}
      onClick={onClick}
    >
      <Typography
        sx={{
          textAlign: "start",
          width: "120px",
          // bgcolor:'red'
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};
