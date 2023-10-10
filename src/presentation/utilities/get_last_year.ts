import { getYearsList } from "./get_years_list";

export const getLastYear = (list: any[]): number => {
    const years: number[] = getYearsList(list);
    const tempYear = years.sort((a, b) => Number(a) - Number(b));
    return tempYear[tempYear.length - 1];
}