
import { getDateFromStringDate, parseIntWithValidation } from "@/presentation/utilities";
import { IFinanciacion, IInformacionInversion } from "../models";

export const informacionInversionAdapter = (value: any): IInformacionInversion => ({
    id: value._id,
    // startup_id: value.startup_id,
    fecha: getDateFromStringDate(value.fecha),
    cant: parseIntWithValidation(value.cant),
    valoracion: parseIntWithValidation(value.valoracion),
    nombre_inversionista: value.nombre_inversionista,
    cargo_inversionista: value.cargo_inversionista,
    correo_inversionista: value.correo_inversionista,
    categoria: value.categoria,
    ronda: value.ronda,
    pactado: value.pactado,
    nota: value.nota,
    busqueda_inversion: value.busqueda_inversion,
});