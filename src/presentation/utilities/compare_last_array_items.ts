export const compareLastArrayItems = (array: number[]): boolean => {
    const size = array.length;

    let res: boolean = false;

    if (size >= 2) {
        const last = array[size - 1];
        const penultimate = array[size - 2];
        res = last > penultimate;
    }

    return res;
} 