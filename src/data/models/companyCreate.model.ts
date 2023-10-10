
export interface ICreateCompany {

  // email:string,
  startupName?:string,
  pais_sede?:string,
  ciudad?:string,
  departamento?:string,
  direccion?:string,
  telefono?:string,
  sitio_web?:string,
  linkedin?:string,
  instagram?:string,
  twitter?:string,
  facebook?:string,
  id_contacto_principal?:string,
  nombre_contacto_principal?:string,
  correo_contacto_principal?:string,
  telefono_contacto_principal?:string,
  pais_contacto_principal?:string,
  ciudad_contacto_principal?:string,
  direccion_contacto_principal?:string,
  rol_contacto_principal?:string,
  expectativa?:string,
  sector?:string,
  tiempo_de_operacion?:string,
  empleos_directos?:string,
  primera_vez?:boolean,
  acelerada?:boolean,
  escalable_nacional?:boolean,
  escalable_internacional?:boolean,
  tamaño_mercado_medianoplazo?:string,
  tipo_modelo_negocio?:string,
  ingresos_arr?:string,
  canales?:string,
  liquidez?:boolean,
  contabilidad?: string,
  utilidad_bruta?: string,
  utilidad_neta?: string,
  crecimiento?: string,
  oportunidades_y_retos?: string,
  participar_en_rondas?: string,
  oportunidad_identificada?:string,
  propuesta_de_valor?:string,
  porque_tu_equipo?:string,
  como_genera_ingresos?: string,
  adquisicion_empresa?: string[],
  fusionado?:string[],
  perfiles_contratados?:string,
  startDate?: string
  }