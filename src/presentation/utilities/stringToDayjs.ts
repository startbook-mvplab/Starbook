

export const stringToDayjs = (fecha: string) => {
    const split = fecha?.split('/');
    if (fecha) {
        const dayjs = `${split[2]}/${split[1]}/${split[0]}`
        return dayjs;
    }

}
