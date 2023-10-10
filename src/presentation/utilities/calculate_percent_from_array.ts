
export const calculatePercentFormArray = (array: number[]): number => {
    let percent: number = 0;

    const size = array.length;


    if (size >= 2) {
        const last = array[size - 1];
        const penultimate = array[size - 2];

        if (last === 0) {
            percent = 0;
        }
        else {
            percent = ((last - penultimate) / last) * 100;
        }
    }

    return parseFloat(percent.toFixed(2));
}

