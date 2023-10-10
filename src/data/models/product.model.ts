import { DonwloadCertificateEnum } from "@/presentation/utilities"

export interface IProduct {

  name: string,
  price: number,
  buyDate?: string,
  num_pedido ?: string,

  //------------campos para certificados------------

  downloadState?: DonwloadCertificateEnum,
  isdownload?: boolean,
  downloadCount?: number

  //----------------------------------------------

  //---------campos de la empresa 
  nit?: string,
  nur?: string,
  number?: string,
  tipoPersona?: string,
  razonSocial?: string,
  trade?: string,
  registration?: string,

  //----- campos del usuario que compro el proudcto--------
  email?: string,
  phone?: string,
  userName?: string,


  //----------------------------------------------

  //----Campos relacionados al servicio-------------------------
  category?: 'certificado' | 'servicio',
  tipoServicio?: 'Base de Datos Online' | 'Verificación Empresarial' | string,
  //----------------------------------------------
  id?: string
}


// export interface IProduct2 {

//   name: string,
//   price: number,
//   buyDate?: string,
//   state?: 'pagado' | 'no pagado' | 'pendiente',

//   //------------campos para certificados------------

//   donwloadState?: DonwloadCertificateEnum,
//   isdownload?: boolean,

//   //----------------------------------------------

//   //---------campos de la empresa 
//   nit?: string,
//   nur?: string,
//   number?: string,
//   tipoPersona?: string,
//   razonSocial?: string,
//   trade?: string,
//   registration?: string,

//   //----- campos del usuario que compro el proudcto--------
//   email?: string,
//   phone?: string,

//   //----------------------------------------------

//   //----Campos relacionados al servicio-------------------------
//   category?: 'certificado' | 'servicio',
//   tipoServicio?: 'Base de Datos Online' | 'Verificación Empresarial',
//   //----------------------------------------------
// }