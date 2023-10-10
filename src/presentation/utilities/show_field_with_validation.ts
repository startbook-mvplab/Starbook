// Primeramente toma un campo de tipo string? y valida si existe o no
// Si no existe devuelve un "Sin Datos"
// Si es un string vacio devuelve un "Sin Datos"

export const showFieldWithValidation = (value?: string) => {
    if (!value) {
        return 'Sin Datos';
    }
    return value === '' ? 'Sin Datos' : value;
}


// Primeramente toma un campo de tipo string? y valida si existe o no
// Si no existe devuelve un "--"
// Si es un string vacio devuelve un "--"

export const showFieldWithValidation2 = (value?: string) => {
    if (!value) {
        return '--';
    }
    return value === '' ? '--' : value;
}