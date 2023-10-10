import { getDateFromStringDate, parseIntWithValidation } from "@/presentation/utilities";
import { IInformacionTraccion } from "../models";

export const informacionTraccionAdapter = (value: any): IInformacionTraccion => ({
    fecha: getDateFromStringDate(value.fecha),
    CAC: parseIntWithValidation(value.CAC),
    LTV: parseIntWithValidation(value.LTV),
    burn_rate: parseIntWithValidation(value.burn_rate),
    churn_rate: parseIntWithValidation(value.churn_rate),
    usuarios_activo: parseIntWithValidation(value.usuarios_activo),
    clientes_inactivos: parseIntWithValidation(value.clientes_inactivos),
    clientes_recurrentes: parseIntWithValidation(value.clientes_recurrentes),
    nuevos_clientes: parseIntWithValidation(value.nuevos_clientes),
})