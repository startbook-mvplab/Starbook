import { getLastYear } from "./get_last_year";

export const getOrderDataListFromLastYear = (list: any[]): any[] => {
    const lastYear = getLastYear(list);

    let newList = list.filter(e => {
        const date = e.fecha;
        return date.getFullYear() === lastYear;
    });

    newList.sort((a, b) => Number(a.fecha) - Number(b.fecha));

    return newList;

}