import { IChartInfo, IDataPoint } from "@/data/interfaces"
import { calculatePercentFormArray } from "./calculate_percent_from_array";
import { formatNumber } from "./format_number";

interface Props {
    title: string,
    dataPoints: IDataPoint[],
}

export const getChartInfo = ({ title, dataPoints }: Props): IChartInfo => {
    const yList = dataPoints.map(e => e.yAxis);

    let min = 0;
    let max = 0;

    if (yList.length !== 0) {

        min = Math.min(...yList) | 0;
        max = Math.max(...yList) | 0;

        return {
            title: title,
            topValue: formatNumber(yList[yList.length - 1]),
            topPercent: calculatePercentFormArray(yList),
            dataPoints: dataPoints,
            minValue: (0.6 * min) | 0,
            maxValue: (1.2 * max) | 0,
            stepSize: Math.floor((1.2 * max - 0.6 * min) / 10)
        }
    }

    return {
        title: title,
        dataPoints: [],
        topValue: 0,
        topPercent: 0,
    }




}