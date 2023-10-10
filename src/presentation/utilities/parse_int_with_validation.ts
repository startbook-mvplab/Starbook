// Convierte el string (que se espera que sea un numero) a numero, si el campo no existe lo convierte a 0

export const parseIntWithValidation = (value: string): number => (value ? parseInt(value) : 0);
