export interface IInformacionInversion {
  id: string,
  fecha: Date,
  cant: number,
  valoracion: number,
  nombre_inversionista: string,
  cargo_inversionista: string,
  correo_inversionista: string,
  categoria: string,
  ronda: string,
  pactado: string,
  nota: string,
  busqueda_inversion: boolean,
}