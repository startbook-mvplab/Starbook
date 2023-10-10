import { Iempleos, IinformacionTraccion } from "@/data/interfaces";
import { ListEmpleos } from "@/data/interfaces/empleoSelected";
import { IStartup } from "@/data/models";
import { Empresa, IEmpresa } from "@/data/models/empresa.model";
import { IFinanciacion } from "@/data/models/financiacion.model";
import { InfFinanciera } from "@/data/models/infFinanciera.model";
import { InfTraccion } from "@/data/models/infTraccion.model";
import { ISocios } from "@/data/models/socios.model";
import { SelectChangeEvent } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { createContext } from "react";


interface ContextProps {
    active: string,
    setActive: React.Dispatch<React.SetStateAction<string>>,

    email: string,
    errorEmail: boolean,
    messageErrorEmail: string,
    handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void,

    name: string, handleName: (event: React.ChangeEvent<HTMLInputElement>) => void,

    pais: string, handlePais: (place_name: string) => void,
    departamento: string, handleDepartamento: (event: React.ChangeEvent<HTMLInputElement>) => void,
    municipio: string, handleMunicipio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    direccion: string, handleDireccion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    sitioWeb: string, handleSitioWeb: (event: React.ChangeEvent<HTMLInputElement>) => void,
    linkedlin: string, handleLinkedlin: (event: React.ChangeEvent<HTMLInputElement>) => void,
    instagram: string, handleInstagram: (event: React.ChangeEvent<HTMLInputElement>) => void,
    facebook: string, handleFacebook: (event: React.ChangeEvent<HTMLInputElement>) => void,
    twitter: string, handleTwitter: (event: React.ChangeEvent<HTMLInputElement>) => void,
    oportunidad_y_retos: string,
    handleOportunidad_y_retos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    phone: string, errorPhone: boolean,
    messageErrorPhone: string, handlePhone: (event: React.ChangeEvent<HTMLInputElement>) => void,
    phoneCodigo: string, errorPhoneCodigo: boolean,
    messageErrorPhoneCodigo: string, handlePhoneCodigo: (codigo: string) => void,
    nit: string, errorNit: boolean,
    messageErrorNit: string, handleNit: (event: React.ChangeEvent<HTMLInputElement>) => void,
    healthTech: string, handleHealthTech: (event: React.ChangeEvent<HTMLInputElement>) => void,
    
    fechaInicioStartup: string | dayjs.Dayjs | null | undefined,
    fechaInicioStartupString: string | undefined,
    handleFechaInicioStartup: (newValue: any) => void,

    expectativaSelect: {
        inversion: boolean;
        financiacion: boolean;
        networking: boolean;
        postulacion_a_retos: boolean;
        aceleracion_de_la_startup: boolean;
    },
    setExpectativa: React.Dispatch<React.SetStateAction<string[]>>;
    handleChangeExpectativas: (event: React.ChangeEvent<HTMLInputElement>) => void,

    tiempoOp: string, handleTiempoOp: (event: React.ChangeEvent<HTMLInputElement>) => void,
    empleosGenerados: string, handleEmpleosGenerados: (event: React.ChangeEvent<HTMLInputElement>) => void,
    rol: string, handleRol: (event: React.ChangeEvent<HTMLInputElement>) => void,
    modelo_de_negocio: string, handleModelo_de_negocio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    tipo_modelo_de_negocio:string,handleTipo_Modelo_de_negocio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    primeraVez: string, handlePrimeraVez: (event: React.ChangeEvent<HTMLInputElement>) => void,
    programaDeApoyo: string, handleProgramaDeApoyo: (event: React.ChangeEvent<HTMLInputElement>) => void,

    porcentajeAccionario: string, handlePorcentajeAccionario: (event: React.ChangeEvent<HTMLInputElement>) => void,
    involucradosAl100: string, handleInvolucradosAl100: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleDisable: () => void;

    sidebarSociosOpen: boolean,
    handleSociosSidebarToggle: () => void,
    handleSociosSidebarClose: () => void,

    nameSocio: string,
    handleNameSocio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    emailSocio: string,
    handleEmailSocio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    cargoSocio: string,
    handleCargoSocio: (event: React.ChangeEvent<HTMLInputElement>) => void,
    identSocio: string,
    handleIdentSocio: (event: React.ChangeEvent<HTMLInputElement>) => void,


    sidebarEmpleosOpen: boolean,
    handleEmpleosSidebarToggle: () => void,
    handleEmpleosSidebarClose: () => void,

    fechaEmpleos: Dayjs | string | null | undefined,
    fechaEmpleosString: string | undefined,
    handleFechaEmpleos: (newValue: any) => void,

    periodicidadInfFinanciera: string,
    handlePeriodicidadInfFinanciera: (event: React.ChangeEvent<HTMLInputElement>) => void,


    empleos: string,
    handleEmpleos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    cargoEmpleos: string,
    handleCargoEmpleos: (event: React.ChangeEvent<HTMLInputElement>) => void,
    empleosMultiSelected: string[]
    handleEmpleosSelected: (event: SelectChangeEvent) => void,
    periodicidadEmpleos: string,
    handlePeriodicidadEmpleos: (event: React.ChangeEvent<HTMLInputElement>) => void,


    sidebarInfFinancieraOpen: boolean,
    handleInfFinancieraSidebarToggle: () => void,
    handleInfFinancieraSidebarClose: () => void,

    fechaInfFinanciera: Dayjs | string | null | undefined,
    fechaInfFinancieraString: string | undefined,
    handleFechaInfFinanciera: (newValue: any) => void,

    ingresosInfFinanciera: string,
    handleIngresosInfFinanciera: (event: React.ChangeEvent<HTMLInputElement>) => void,

    clientesInfFinanciera: string,
    handleClientesInfFinanciera: (event: React.ChangeEvent<HTMLInputElement>) => void,

    costosInfFinanciera: string,
    handleCostosInfFinanciera: (event: React.ChangeEvent<HTMLInputElement>) => void,
    presupuestoMarketingInfFinanciera: string,
    handlePresupuestoMarketingInfFinanciera: (event: React.ChangeEvent<HTMLInputElement>) => void,
    monthlyInfFinanciera: string,
    handleMonthlyInfFinanciera: (event: React.ChangeEvent<HTMLInputElement>) => void,
    burnInfFinanciera: string,
    handleBurnInfFinanciera: (event: React.ChangeEvent<HTMLInputElement>) => void,
    ventasInfFinanciera: string,
    handleVentasInfFinanciera: (event: React.ChangeEvent<HTMLInputElement>) => void,
    facturacionInfFinanciera: string,
    handleFacturacionInfFinanciera: (event: React.ChangeEvent<HTMLInputElement>) => void,
    mercadoPotencialInfFinanciera: string,
    handleMercadoPotencialInfFinanciera: (event: React.ChangeEvent<HTMLInputElement>) => void,
    

    sidebarInversionesOpen: boolean,
    handleInversionesSidebarToggle: () => void,
    handleInversionesSidebarClose: () => void,

    fechaInversion: Dayjs | string | null | undefined,
    fechaInversionString: Date | string | undefined,
    handleFechaInversion: (newValue: any) => void,

    capitalInvertido: string,
    handleCapitalInvertido: (event: React.ChangeEvent<HTMLInputElement>) => void,
    nombreInversionistaInversion: string,
    handleNombreInversionistaInversion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    cargoInversionistaInversion: string,
    handleCargoInversionistaInversion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    correoInversionistaInversion: string,
    handleCorreoInversionistaInversion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    categoriaInversion: string,
    handleCategoriaInversion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    rondaInversion: string,
    handleRondaInversion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    pactadoInversion: string,
    handlePactadoInversion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    valoracionInversion: string,
    handleValoracionInversion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    notaInversion: string,
    handleNotaInversion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    buscaInversion: string,
    handleBuscaInversion: (event: React.ChangeEvent<HTMLInputElement>) => void,

    sidebarInfTraccionOpen: boolean,
    handleInfTraccionSidebarToggle: () => void,
    handleInfTraccionSidebarClose: () => void,

    fechaInfTraccion: Dayjs | string | null | undefined,
    fechaInfTraccionString: Date | string | undefined,
    handleFechaInfTraccion: (newValue: any) => void

    cacInfTraccion: string,
    handleCacInfTraccion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    ltvInfTraccion: string,
    handleLtvInfTraccion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    usuarioInfTraccion: string,
    handleUsuarioInfTraccion: (event: React.ChangeEvent<HTMLInputElement>) => void,

    burnRateInfTraccion: string,
    handleBurnRateInfTraccion: (event: React.ChangeEvent<HTMLInputElement>) => void,

    churnRateInfTraccion: string,
    handleChurnRateInfTraccion: (event: React.ChangeEvent<HTMLInputElement>) => void,

    clientesRecurrentesInfTraccion: string,
    handleClientesRecurrentesInfTraccion: (event: React.ChangeEvent<HTMLInputElement>) => void,

    clientesInactivosInfTraccion: string,
    handleClientesInactivosInfTraccion: (event: React.ChangeEvent<HTMLInputElement>) => void,

    clientesNuevosInfTraccion: string,
    handleClientesNuevosInfTraccion: (event: React.ChangeEvent<HTMLInputElement>) => void,
    
    periodicidadInfTraccion: string,
    handlePeriodicidadInfTraccion: (event: React.ChangeEvent<HTMLInputElement>) => void,


    ////////////////////APIS////////////////////////
    errorApi: string[] | undefined,
    borrarErrorApi: () => void,
    errorApiGlobal: string[] | undefined,
    borrarErrorApiGlobal: () => void,

    idItem: string | undefined,

    initState: (startup: IStartup | Empresa) => void
    meStartup: () => any,
    myStartup: IEmpresa | undefined,
    createStartup: () => void;
    actualizarStartup: () => void;

    cargarSociosDrawer: (state: 'create' | 'update', socios?: ISocios) => void,
    cargarEmpleosDrawer: (state: 'create' | 'update', empleos?: Iempleos) => void,
    cargarFinanciacionDrawer: (state: 'create' | 'update', financiacion?: IFinanciacion) => void,
    cargarInfTraccionDrawer: (state: 'create' | 'update', infTraccion?: InfTraccion) => void,
    cargarInfFinancieraDrawer: (state: 'create' | 'update', infFinanciera?: InfFinanciera) => void,

    createAll: (tablaId: string) => void,
    updateAll: (id: string, tablaId: string) => void,
    deleteAll: (tablaId: string, itemId: string) => void,

    createOK: boolean,
    loadingCreateStartup: boolean,
    disable: boolean,
    loadingGetStartup: boolean,
    createAndUpdate: 'create' | 'update' | undefined,
    createUpdateState: (status: "create" | "update" | undefined) => void;

    openModalDelete: boolean,
    handleOpenModalDelete: (modalId: string) => void,
    openModalId: string,
    handleCloseModalDelete: () => void,


}
export const FormsStartupContext = createContext({} as ContextProps)
