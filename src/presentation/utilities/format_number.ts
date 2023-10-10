// Formatea un numero a la forma : xxx,xxx,xxx.x
export const formatNumber = (x: number): string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};