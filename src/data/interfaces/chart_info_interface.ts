import { IDataPoint } from "./data_point";

export interface IChartInfo {
    title: string
    dataPoints: IDataPoint[],
    topValue: string | number, // es el valor que sale debajo del titulo de la grafica
    topPercent: number,
    minValue?: number,
    maxValue?: number,
    stepSize?: number,
}