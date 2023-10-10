export const getDateFromStringDate = (stringDate: string): Date => {
    const partesFecha = stringDate.split('/');
    const date = new Date(parseInt(partesFecha[2]), parseInt(partesFecha[1]) - 1, parseInt(partesFecha[0]));
    return date;
}