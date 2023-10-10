
import { getDateFromStringDate, parseIntWithValidation } from "@/presentation/utilities";
import { IEmpleo } from "../models/empleo_model";

export const empleoAdapter = (value: any): IEmpleo => ({
    fecha: getDateFromStringDate(value.fecha),
    empleos: parseIntWithValidation(value.empleos),
    perfiles: value.perfiles,
});