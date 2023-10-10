import { formatNumber } from "./format_number";
import { parseIntWithValidation } from "./parse_int_with_validation";

// Primeramnte toma un campo de tipo string? y valida si existe o no
// Si no existe devuelve un "--"
// Si es un string vacio devuelve un "--"
// Si es un string no vacio convierte el string (que se espera que sea un numero) a numero y lo formatea de la forma : xxx,xxx,xxx.xx

export const convertAndShowFieldWithValidation = (value?: string) => {
    if (!value) {
        return '--';
    }
    else if (value === '') {
        return '--';
    }
    else {
        return formatNumber(parseIntWithValidation(value))
    }
}