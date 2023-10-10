
import { getDateFromStringDate, parseIntWithValidation } from "@/presentation/utilities";
import { IInformacionFinanciera } from "../models";

export const informacionFinancieraAdapter = (value: any): IInformacionFinanciera => ({
    fecha: getDateFromStringDate(value.fecha),
    ingresos: parseIntWithValidation(value.ingresos),
    costos: parseIntWithValidation(value.costos),
    clientes: parseIntWithValidation(value.clientes),
    burn_rate: parseIntWithValidation(value.burn_rate),
    facturacion: parseIntWithValidation(value.facturacion),
    ventas: parseIntWithValidation(value.ventas),
    mrr: parseIntWithValidation(value.mrr),
    mercado_potencial: parseIntWithValidation(value.mercado_potencial),
    presupuesto_marketing: parseIntWithValidation(value.presupuesto_marketing),
    profit: parseIntWithValidation(value.profit),
})