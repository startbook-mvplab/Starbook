
export const getYearsList = (list: any[]): number[] => {
    const tempList = list.map(e => e.fecha.getFullYear());
    const listaSinDuplicados = tempList.filter((valor, indice, array) => array.indexOf(valor) === indice);
    const years = listaSinDuplicados.sort((a, b) => Number(a) - Number(b));
    return years;
}