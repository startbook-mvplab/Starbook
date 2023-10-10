
import { ICreateCompany } from "@/data/models/companyCreate.model";
import { UserUseCases } from "@/data/usecases";
import { StartupUseCases } from "@/data/usecases/startup.usecase";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { FormsStartupContext } from "./FormsStartupContext";
import dayjs, { Dayjs } from "dayjs";
import { IFinanciacion } from "@/data/models/financiacion.model";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import { Empresa, IEmpresa } from "@/data/models/empresa.model";
import { InfTraccion } from "@/data/models/infTraccion.model";
import { InfFinanciera } from "@/data/models/infFinanciera.model";
import { Iempleos } from "@/data/interfaces";
import { ISocios } from "@/data/models/socios.model";
import { ListEmpleos } from "@/data/interfaces/empleoSelected";
import { SelectChangeEvent } from "@mui/material";
import { IStartup } from "@/data/models";
import { StorageKeysEnum, TablasFormIdEnum, stringToDayjs } from "@/presentation/utilities";

type Props = {
	children: JSX.Element,
};


export const FormsStartupProvider: FC<Props> = ({ children }) => {

	const localStorage = new LocalStorageProtocol();
	const companyUseCase = new StartupUseCases();

	const [loadingCreateStartup, setLoadingCreateStartup] = React.useState(false);
	const [createOK, setCreateOK] = React.useState(false);
	const [createAndUpdate, setCreateAndUpdate] = React.useState<'create' | 'update' | undefined>();
	const [idItem, setIdItem] = React.useState<string | undefined>();

	const [myStartup, setMyStartup] = React.useState<IEmpresa>();
	const [loadingGetStartup, setLoadingGetStartup] = React.useState(false);


	const [active, setActive] = useState("Información fija");
	//////////////////////////////SESION Información fija///////////////////////////
	/////////////////////////////////Manejo Name//////////////////////////////////////////
	const [name, setName] = React.useState('');
	const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value || '');
	};
	/////////////////////////////////Manejo Email//////////////////////////////////////////
	const isEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	const [email, setEmail] = React.useState('');
	const [errorEmail, setErrorEmail] = React.useState(false);
	const [messageErrorEmail, setMessageErrorEmail] = React.useState('');


	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value || '');
		const email = event.target.value;
		// console.log('Email:', email);
		if (isEmail.test(email)) {
			setErrorEmail(false);
			setMessageErrorEmail('')
		} else {
			setErrorEmail(true);
			setMessageErrorEmail('El correo no es válido')
		}
	};
	/////////////////////////////////Manejo Pais//////////////////////////////////////////
	const [pais, setPais] = React.useState('');
	const handlePais = (place_name: string) => {
		setPais(place_name || '');
		//console.log('PAIS:',pais)
	};
	/////////////////////////////////Manejo Departamento//////////////////////////////////////////
	const [departamento, setDepartamento] = React.useState('');
	const handleDepartamento = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDepartamento(event.target.value || '');
	};
	/////////////////////////////////Manejo Municipio//////////////////////////////////////////
	const [municipio, setMunicipio] = React.useState('');
	const handleMunicipio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMunicipio(event.target.value || '');
	};
	/////////////////////////////////Manejo SitioWeb//////////////////////////////////////////
	const [direccion, setDireccion] = React.useState('');
	const handleDireccion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDireccion(event.target.value || '');
	};
	/////////////////////////////////Manejo SitioWeb//////////////////////////////////////////
	const [sitioWeb, setSitioWeb] = React.useState('');
	const handleSitioWeb = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSitioWeb(event.target.value || '');
	};
	/////////////////////////////////Manejo Linkedlin//////////////////////////////////////////
	const [linkedlin, setLinkedlin] = React.useState('');
	const handleLinkedlin = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLinkedlin(event.target.value || '');
	};
	/////////////////////////////////Manejo Instagram//////////////////////////////////////////
	const [instagram, setInstagram] = React.useState('');
	const handleInstagram = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInstagram(event.target.value || '');
	};
	/////////////////////////////////Manejo Facebook//////////////////////////////////////////
	const [facebook, setFacebook] = React.useState('');
	const handleFacebook = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFacebook(event.target.value || '');
	};
	/////////////////////////////////Manejo Twitter//////////////////////////////////////////
	const [twitter, setTwitter] = React.useState('');
	const handleTwitter = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTwitter(event.target.value || '');
	};
	/////////////////////////////////Manejo Oportunidad y Retos//////////////////////////////////////////
	const [oportunidad_y_retos, setOportunidad_y_retos] = React.useState('');
	const handleOportunidad_y_retos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOportunidad_y_retos(event.target.value || '');
	};
	/////////////////////////////////Manejo Prefijo de pais //////////////////////////////////////////
	const [phoneCodigo, setPhoneCodigo] = React.useState('');
	const [errorPhoneCodigo, setErrorPhoneCodigo] = React.useState(false);
	const [messageErrorPhoneCodigo, setMessageErrorPhoneCodigo] = React.useState('');

	const handlePhoneCodigo = (codigo: string) => {
		setPhoneCodigo(codigo || '');
		console.log('Codigo:', phoneCodigo, codigo)
		// handlenumeroCompleto(codigo,phone);
	};


	/////////////////////////////////Manejo Phone//////////////////////////////////////////
	const [phone, setPhone] = React.useState('');
	const [errorPhone, setErrorPhone] = React.useState(false);
	const [messageErrorPhone, setMessageErrorPhone] = React.useState('');

	const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(event.target.value || '');

		if (phone.length > 7 && !isNaN(parseInt(phone))) {
			setErrorPhone(false);
			handlenumeroCompleto(phoneCodigo, event.target.value);
			setMessageErrorPhone('')
		} else {
			setErrorPhone(true);
			setMessageErrorPhone('Introduzca un número de telefono válido')
		}
	};
	/////////////////////////////////Manejo Numero //////////////////////////////////////////
	const [numeroCompleto, setNumeroCompleto] = React.useState('');
	const handlenumeroCompleto = (codigo: string, tel: string) => {
		setNumeroCompleto(`${codigo} ${tel}`);
	};

	/////////////////////////////////Manejo Nit//////////////////////////////////////////
	const [nit, setNit] = React.useState('');
	const [errorNit, setErrorNit] = React.useState(false);
	const [messageErrorNit, setMessageErrorNit] = React.useState('');

	const handleNit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNit(event.target.value || '');
		const nit = event.target.value;
		if (nit.length > 7 && !isNaN(parseInt(nit))) {
			setErrorNit(false);
			setMessageErrorNit('')
		} else {
			setErrorNit(true);
			setMessageErrorNit('Introduzca un número de telefono válido')
		}
	};
	/////////////////////////////////Manejo Nit//////////////////////////////////////////
	const [healthTech, setHealthTech] = React.useState('');
	const handleHealthTech = (event: React.ChangeEvent<HTMLInputElement>) => {
		setHealthTech(event.target.value || '');
	};


	const [fechaInicioStartup, setFechaInicioStartup] = React.useState<Dayjs | string | null>();
	const [fechaInicioStartupString, setFechaInicioStartupString] = React.useState<string>();

	const handleFechaInicioStartup = (newValue: any) => {
		setFechaInicioStartup(newValue);
		console.log('Date:', fechaActual);
		const fecha: string = newValue?.format('DD/MM/YYYY')!
		setFechaInicioStartupString(fecha);
	};


	//////////////////////////SESION EXPECTATIVA////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////

	const chargetExpectativas = localStorage.get(StorageKeysEnum.checkExpectativas);

	const [expectativa, setExpectativa] = React.useState<string[]>([
		(chargetExpectativas?.inversion !== undefined) ? chargetExpectativas?.inversion : '',
		(chargetExpectativas?.financiacion !== undefined) ? chargetExpectativas?.financiacion : '',
		(chargetExpectativas?.networking !== undefined) ? chargetExpectativas?.networking : '',
		(chargetExpectativas?.aceleracion_de_la_startup !== undefined) ? chargetExpectativas?.aceleracion_de_la_startup : '',
		(chargetExpectativas?.postulacion_a_retos !== undefined) ? chargetExpectativas?.postulacion_a_retos : ''
	]);


	const [expectativaSelect, setExpectativaSelect] = React.useState({
		inversion: false,
		financiacion: false,
		aceleracion_de_la_startup: false,
		networking: false,
		postulacion_a_retos: false,
	});

	const getMultiplesCheckbox = (expectativas: string) => {

		const split = expectativas?.split(',');

		console.log('Split:', split);

		const a = split?.filter(item => item === 'Inversión')[0];
		const b = split?.filter(item => item === 'Financiación')[0];
		const c = split?.filter(item => item === 'Aceleración de la startup')[0];
		const d = split?.filter(item => item === 'Networking')[0];
		const e = split?.filter(item => item === 'Postulación a retos corporativos')[0];

		console.log('T:', 'a:', a, 'b:', b, 'c:', c, 'd:', d, 'e:', e);

		setExpectativaSelect({
			inversion: (a === 'Inversión') ? true : false,
			financiacion: (b === 'Financiación') ? true : false,
			aceleracion_de_la_startup: (c === 'Aceleración de la startup') ? true : false,
			networking: (d === 'Networking') ? true : false,
			postulacion_a_retos: (e === 'Postulación a retos corporativos') ? true : false,
		})

		const expectativasLocal = {
			inversion: a,
			financiacion: b,
			aceleracion_de_la_startup: c,
			networking: d,
			postulacion_a_retos: e,
		}
		localStorage.set(StorageKeysEnum.checkExpectativas, expectativasLocal)
	}


	const handleChangeExpectativas = (event: React.ChangeEvent<HTMLInputElement>) => {

		setExpectativaSelect({ ...expectativaSelect, [event.target.name]: event.target.checked, });


		const chargetExpectativas = localStorage.get(StorageKeysEnum.checkExpectativas)


		console.log('Targets:', event.target.name, event.target.checked, chargetExpectativas.inversion, chargetExpectativas.financiacion)
		///////////////////////////////////////////////////////////////////////////////////////////////
		if (event.target.name === "inversion") {
			if (event.target.checked) { setExpectativa([...expectativa, 'Inversión']) }
			else { setExpectativa(expectativa.filter(item => item !== 'Inversión')) }
		}
		///////////////////////////////////////////////////////////////////////////////////////////////

		if (event.target.name === "financiacion") {
			if (event.target.checked) { setExpectativa([...expectativa, 'Financiación']) }
			else { setExpectativa(expectativa.filter(item => item !== 'Financiación')) }
		}
		///////////////////////////////////////////////////////////////////////////////////////////////

		if (event.target.name === "aceleracion_de_la_startup") {
			if (event.target.checked) { setExpectativa([...expectativa, 'Aceleración de la startup']) }
			else { setExpectativa(expectativa.filter(item => item !== 'Aceleración de la startup')) }
		}
		///////////////////////////////////////////////////////////////////////////////////////////////

		if (event.target.name === "networking") {
			if (event.target.checked) { setExpectativa([...expectativa, 'Networking']) }
			else { setExpectativa(expectativa.filter(item => item !== 'Networking')) }
		}
		///////////////////////////////////////////////////////////////////////////////////////////////
		if (event.target.name === "postulacion_a_retos") {
			if (event.target.checked) { setExpectativa([...expectativa, 'Postulación a retos corporativos']) }
			else { setExpectativa(expectativa.filter(item => item !== 'Postulación a retos corporativos')) }
		};
	}

	//////////////////////////SESION Experiencia////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	const [tiempoOp, setTiempoOp] = React.useState('');
	const handleTiempoOp = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTiempoOp(event.target.value || '');
	};

	const [empleosGenerados, setEmpleosGenerados] = React.useState('');
	const handleEmpleosGenerados = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmpleosGenerados(event.target.value || '');
	};

	const [rol, setRol] = React.useState('');
	const handleRol = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRol(event.target.value || '');
	};

	const [modelo_de_negocio, setModelo_de_negocio] = React.useState('');
	const handleModelo_de_negocio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setModelo_de_negocio(event.target.value || '');
	};

	const [tipo_modelo_de_negocio, setTipo_Modelo_de_negocio] = React.useState('');
	const handleTipo_Modelo_de_negocio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTipo_Modelo_de_negocio(event.target.value || '');
	};
	////////////////Check Box Encuesta/////////////////////////////////////////
	const [primeraVez, setPrimeraVez] = React.useState('Si');
	// console.log('primeraVez:', primeraVez)
	const handlePrimeraVez = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPrimeraVez(event.target.value);
	};

	const [programaDeApoyo, setProgramaDeApoyo] = React.useState('Si');
	// console.log('programaDeApoyo:', programaDeApoyo)
	const handleProgramaDeApoyo = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProgramaDeApoyo(event.target.value);
	};

	//////////////////////////SESION Sociedad////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	const [porcentajeAccionario, setPorcentajeAccionario] = React.useState('');
	console.log('porcentajeAccionario:', porcentajeAccionario)
	const handlePorcentajeAccionario = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPorcentajeAccionario((event.target as HTMLInputElement).value);
	};
	const [involucradosAl100, setInvolucradosAl100] = React.useState('');
	console.log('involucradosAl100:', involucradosAl100)
	const handleInvolucradosAl100 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInvolucradosAl100(event.target.value);
	};

	const [disable, setDisable] = React.useState(true);
	const handleDisable = () => {
		if (disable) {
			setDisable(false)
		} else {
			setDisable(true)
		}
	}
	//////////////////////////SESION Taba de Socios////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	const [sidebarSociosOpen, setSidebarSociosOpen] = useState<boolean>(false)
	const handleSociosSidebarToggle = () => setSidebarSociosOpen(!sidebarSociosOpen)
	const handleSociosSidebarClose = () => setSidebarSociosOpen(false)

	const [nameSocio, setNameSocio] = React.useState('');
	const handleNameSocio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNameSocio(event.target.value || '');
	};

	const [emailSocio, setEmailSocio] = React.useState('');
	const handleEmailSocio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmailSocio(event.target.value || '');
	};

	const [cargoSocio, setCargoSocio] = React.useState('');
	const handleCargoSocio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCargoSocio(event.target.value || '');
	};

	const [identSocio, setIdentSocio] = React.useState('');
	const handleIdentSocio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIdentSocio(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}

	};

	//////////////////////////SESION Taba de empleos////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	const [sidebarEmpleosOpen, setSidebarEmpleosOpen] = useState<boolean>(false)
	const handleEmpleosSidebarToggle = () => setSidebarEmpleosOpen(!sidebarSociosOpen)
	const handleEmpleosSidebarClose = () => setSidebarEmpleosOpen(false)

	// let dateNow=Date.now();
	const fechaActual = dayjs().format('DD/MM/YYYY').toString();

	const [fechaEmpleos, setFechaEmpleos] = React.useState<Dayjs | string | null>();
	const [fechaEmpleosString, setFechaEmpleosString] = React.useState<string>();

	const handleFechaEmpleos = (newValue: any) => {
		setFechaEmpleos(newValue);
		console.log('Date:', fechaActual);
		const fecha: string = newValue?.format('DD/MM/YYYY')!
		setFechaEmpleosString(fecha);
	};

	const [empleos, setEmpleos] = React.useState('');
	const handleEmpleos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmpleos(event.target.value || '');
	};

	const [cargoEmpleos, setCargoEmpleos] = React.useState<string>('');
	const handleCargoEmpleos = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCargoEmpleos(event.target.value || '');
	};

	const [periodicidadEmpleos, setPeriodicidadEmpleos] = React.useState('');
	const handlePeriodicidadEmpleos = (event: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(event.target.value)
		setPeriodicidadEmpleos(event.target.value || '');
	};



	//////////////////////////////////////CARGOS sELECCIONADOS/////////////////////////////////////////////////


	const [empleosMultiSelected, setEmpleosMultiSelected] = React.useState<string[]>([]);

	const handleEmpleosSelected = (event: SelectChangeEvent) => {

		const { target: { value }, } = event;

		setCargoEmpleos(value.toString());

		console.log('Values:', cargoEmpleos)
		setEmpleosMultiSelected(typeof value === 'string'
			? value.split(',')
			: value,);
	};

	//////////////////////////SESION Taba de informacion financiera////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	const [sidebarInfFinancieraOpen, setSidebarInfFinancieraOpen] = useState<boolean>(false)
	const handleInfFinancieraSidebarToggle = () => setSidebarInfFinancieraOpen(!sidebarSociosOpen)
	const handleInfFinancieraSidebarClose = () => setSidebarInfFinancieraOpen(false)

	const [fechaInfFinanciera, setFechaInfFinanciera] = React.useState<Dayjs | string | null>();
	const [fechaInfFinancieraString, setFechaInfFinancieraString] = React.useState<string>();

	const handleFechaInfFinanciera = (newempleo: any) => {
		setFechaInfFinanciera(newempleo);
		const fecha: string = newempleo?.format('DD/MM/YYYY')!
		setFechaInfFinancieraString(fecha);
	};


	const [ingresosInfFinanciera, setIngresosInfFinanciera] = React.useState('');
	const handleIngresosInfFinanciera = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIngresosInfFinanciera(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [costosInfFinanciera, setCostosInfFinanciera] = React.useState('');
	const handleCostosInfFinanciera = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCostosInfFinanciera(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [presupuestoMarketingInfFinanciera, setPresupuestoMarketingInfFinanciera] = React.useState('');
	const handlePresupuestoMarketingInfFinanciera = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPresupuestoMarketingInfFinanciera(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [monthlyInfFinanciera, setMonthlyInfFinanciera] = React.useState('');
	const handleMonthlyInfFinanciera = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMonthlyInfFinanciera(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [burnInfFinanciera, setBurnInfFinanciera] = React.useState('');
	const handleBurnInfFinanciera = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBurnInfFinanciera(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [ventasInfFinanciera, setventasInfFinanciera] = React.useState('');
	const handleVentasInfFinanciera = (event: React.ChangeEvent<HTMLInputElement>) => {
		setventasInfFinanciera(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [facturacionInfFinanciera, setFacturacionInfFinanciera] = React.useState('');
	const handleFacturacionInfFinanciera = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFacturacionInfFinanciera(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [mercadoPotencialInfFinanciera, setMercadoPotencialInfFinanciera] = React.useState('');
	const handleMercadoPotencialInfFinanciera = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMercadoPotencialInfFinanciera(event.target.value || '');
	};

	const [clientesInfFinanciera, setClientesInfFinanciera] = React.useState('');
	const handleClientesInfFinanciera = (event: React.ChangeEvent<HTMLInputElement>) => {
		setClientesInfFinanciera(event.target.value || '');
	};

	const [periodicidadInfFinanciera, setPeriodicidadInfFinanciera] = React.useState('');
	const handlePeriodicidadInfFinanciera = (event: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(event.target.value)
		setPeriodicidadInfFinanciera(event.target.value || '');
	};


	//////////////////////////SESION Taba de inversiones////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	const [sidebarInversionesOpen, setSidebarInversionesOpen] = useState<boolean>(false)
	const handleInversionesSidebarToggle = () => setSidebarInversionesOpen(!sidebarSociosOpen)
	const handleInversionesSidebarClose = () => setSidebarInversionesOpen(false)

	const [fechaInversion, setFechaInversion] = React.useState<Dayjs | string | null>();
	const [fechaInversionString, setFechaInversionString] = React.useState<string>('');

	const handleFechaInversion = (newValue: any) => {

		setFechaInversion(newValue);
		const fecha: string = newValue?.format('DD/MM/YYYY')!
		setFechaInversionString(fecha);
		console.log('Fecha Inversion:', newValue);
	};

	const [capitalInvertido, setCapitalInvertido] = React.useState('');
	const handleCapitalInvertido = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCapitalInvertido(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [nombreInversionistaInversion, setNombreInversionistaInversion] = React.useState('');
	const handleNombreInversionistaInversion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNombreInversionistaInversion(event.target.value || '');
	};

	const [cargoInversionistaInversion, setCargoInversionistaInversion] = React.useState('');
	const handleCargoInversionistaInversion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCargoInversionistaInversion(event.target.value || '');

	};
	const [correoInversionistaInversion, setCorreoInversionistaInversion] = React.useState('');
	const handleCorreoInversionistaInversion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCorreoInversionistaInversion(event.target.value || '');
	};

	const [categoriaInversion, setCategoriaInversion] = React.useState('');
	const handleCategoriaInversion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCategoriaInversion(event.target.value || '');
	};

	const [rondaInversion, setRondaInversion] = React.useState('');
	const handleRondaInversion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRondaInversion(event.target.value || '');
	};
	const [pactadoInversion, setPactadoInversion] = React.useState('');
	const handlePactadoInversion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPactadoInversion(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [valoracionInversion, setValoracionInversion] = React.useState('');
	const handleValoracionInversion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValoracionInversion(event.target.value || '');
	};

	const [notaInversion, setNotaInversion] = React.useState('');
	const handleNotaInversion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNotaInversion(event.target.value || '');
	};

	const [buscaInversion, setBuscaInversion] = React.useState('');
	const handleBuscaInversion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBuscaInversion(event.target.value || '');
	};


	//////////////////////////SESION Taba información de tracción////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	const [sidebarInfTraccionOpen, setSidebarInfTraccionOpen] = useState<boolean>(false)
	const handleInfTraccionSidebarToggle = () => setSidebarInfTraccionOpen(!sidebarSociosOpen)
	const handleInfTraccionSidebarClose = () => setSidebarInfTraccionOpen(false)

	const [fechaInfTraccion, setFechaInfTraccion] = React.useState<Dayjs | null>();
	const [fechaInfTraccionString, setFechaInfTraccionString] = React.useState<string>();

	const handleFechaInfTraccion = (newValue: any) => {
		setFechaInfTraccion(newValue);
		const fecha: string = newValue?.format('DD/MM/YYYY')!
		setFechaInfTraccionString(fecha);
	};

	const [cacInfTraccion, setCacInfTraccion] = React.useState('');
	const handleCacInfTraccion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCacInfTraccion(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [ltvInfTraccion, setLtvInfTraccion] = React.useState('');
	const handleLtvInfTraccion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLtvInfTraccion(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [usuarioInfTraccion, setUsuarioInfTraccion] = React.useState('');
	const handleUsuarioInfTraccion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsuarioInfTraccion(event.target.value || '');
	};

	const [burnRateInfTraccion, setBurnRateInfTraccion] = React.useState('');
	const handleBurnRateInfTraccion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBurnRateInfTraccion(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [churnRateInfTraccion, setChurnRateInfTraccion] = React.useState('');
	const handleChurnRateInfTraccion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChurnRateInfTraccion(event.target.value || '');
		if (!isNaN(parseInt(event.target.value))) {
			setErrorApi([]);
		} else {
			setErrorApi(['Introduzca un número'])
		}
	};

	const [clientesRecurrentesInfTraccion, setClientesRecurrentesInfTraccion] = React.useState<string>('');
	const handleClientesRecurrentesInfTraccion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setClientesRecurrentesInfTraccion(event.target.value || '');
	};

	const [clientesInactivosInfTraccion, setClientesInactivosInfTraccion] = React.useState<string>('');
	const handleClientesInactivosInfTraccion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setClientesInactivosInfTraccion(event.target.value || '');
	};

	const [clientesNuevosInfTraccion, setClientesNuevosInfTraccion] = React.useState<string>('');
	const handleClientesNuevosInfTraccion = (event: React.ChangeEvent<HTMLInputElement>) => {
		setClientesNuevosInfTraccion(event.target.value || '');
	};

	const [periodicidadInfTraccion, setPeriodicidadInfTraccion] = React.useState('');
	const handlePeriodicidadInfTraccion = (event: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(event.target.value)
		setPeriodicidadInfTraccion(event.target.value || '');
	};


	/////////////////////////////////////INTEGRACIONES API/////////////////////////////////////////////////////
	const createUpdateState = (state: 'create' | 'update' | undefined) => {
		setCreateAndUpdate(state);
		console.log('Created Update :', state);
	}

	const [errorApi, setErrorApi] = React.useState<string[]>();
	const borrarErrorApi = () => {
		setErrorApi([]);
	}

	const [errorApiGlobal, setErrorApiGlobal] = React.useState<string[]>();
	const borrarErrorApiGlobal = () => {
		setErrorApi([]);
	}


	/////////////////////////////////////Create Startup/////////////////////////////////////////////////////
	const startup: ICreateCompany = {
		// email: email,
		startupName: name,
		pais_sede: pais,
		ciudad: municipio,
		direccion: direccion,
		telefono: numeroCompleto,
		sitio_web: sitioWeb,
		linkedin: linkedlin,
		instagram: instagram,
		twitter: twitter,
		facebook: facebook,
		id_contacto_principal: nit,
		nombre_contacto_principal: name,
		correo_contacto_principal: email,
		telefono_contacto_principal: numeroCompleto,
		pais_contacto_principal: pais,
		ciudad_contacto_principal: municipio,
		departamento: departamento,
		rol_contacto_principal: rol,
		expectativa: expectativa.toString(),
		sector: healthTech,
		tiempo_de_operacion: tiempoOp,
		empleos_directos: empleosGenerados,
		primera_vez: (primeraVez === 'Si') ? true : false,
		acelerada: (programaDeApoyo === 'Si') ? true : false,
		escalable_nacional: true,
		escalable_internacional: true,
		tamaño_mercado_medianoplazo: '',
		tipo_modelo_negocio: modelo_de_negocio,
		ingresos_arr: 'Sin Datos',
		canales: 'Sin Datos',
		liquidez: true,
		contabilidad: 'Sin Datos',
		utilidad_bruta: 'Sin Datos',
		utilidad_neta: 'Sin Datos',
		crecimiento: 'Sin Datos',
		oportunidades_y_retos: oportunidad_y_retos,
		participar_en_rondas: programaDeApoyo,
		////////////////////OJO///////////////////////////////
		oportunidad_identificada: porcentajeAccionario,
		propuesta_de_valor: involucradosAl100,

		porque_tu_equipo: 'Sin Datos',
		como_genera_ingresos: tipo_modelo_de_negocio,
		adquisicion_empresa: ['Sin Datos', 'Sin Datos',],
		fusionado: ['Sin Datos', 'Sin Datos',],
		perfiles_contratados: 'Sin Datos',
		startDate:(fechaInicioStartupString!) ? fechaInicioStartupString! : fechaActual,
		
	}

	const createStartup = async () => {

		setLoadingCreateStartup(true);

		console.log('Create...')
		const user = localStorage.get(StorageKeysEnum.user);
		const resp = await companyUseCase.createStartup(startup, user.token);

		console.log('Created...')
		setLoadingCreateStartup(false);

		if (resp.statusCode !== 401 && resp.statusCode !== 400 && resp.statusCode !== 500) {
			setCreateOK(true);
		} else {
			setCreateOK(false)
		}

	}
	/////////////////////////////Actualizar Startup//////////////////////////////////////
	const actualizarStartup = async () => {

		setLoadingCreateStartup(true);

		console.log('Update...')
		const startup_id = (localStorage.get(StorageKeysEnum.myStartupId) !== undefined)
			? localStorage.get(StorageKeysEnum.myStartupId)
			: ''
		const resp = await companyUseCase.actualizarStartup(startup, startup_id);

		console.log('Update:', resp)

		if (resp.statusCode === 200) {
			setCreateOK(true);
		} else {
			setCreateOK(false)
		}

		await meStartup()
		setLoadingCreateStartup(false);

	}
	/////////////////////////////////////Get My Startup/////////////////////////////////////////////////////

	const meStartup = async () => {

		setLoadingGetStartup(true);
		const resp = await companyUseCase.meStartup();

		if (resp.statusCode === 200) {
			// setCreateOK(true);
			localStorage.set(StorageKeysEnum.myStartupId, resp.body.empresa._id)
			setMyStartup(resp.body);
			setErrorApiGlobal([]);
			console.log('ME STARTUP:', resp.body)

		} else {
			setCreateOK(false)
			setErrorApiGlobal(resp.body.message!);
		}
		// console.log('MeStartup:', resp.body);
		setLoadingGetStartup(false);
		// return resp.body;
	}

	/////////////////////////////////////Create Socios/////////////////////////////////////////////////////
	const sociosData: ISocios = {
		startup_id: (localStorage.get(StorageKeysEnum.myStartupId) !== undefined)
			? localStorage.get(StorageKeysEnum.myStartupId)
			: '',
		fecha: '',
		nombre: nameSocio,
		cargo: cargoSocio,
		correo: emailSocio,
		identificacion: identSocio
	}
	/////////////////////////////Cargar en Drawer Socios/////////////////////////////////////////////
	const cargarSociosDrawer = (state: 'create' | 'update', socios?: ISocios) => {

		setCreateAndUpdate(state);

		setIdItem(socios?._id);
		setNameSocio(state === 'update' ? socios!.nombre : '');
		setEmailSocio(state === 'update' ? socios!.correo : '');
		setCargoSocio(state === 'update' ? socios!.cargo : '');
		setIdentSocio(state === 'update' ? socios!.identificacion : '');
	}
	/////////////////////////////////////Create Empleos/////////////////////////////////////////////////////

	const empleosData: Iempleos = {
		startup_id: (localStorage.get(StorageKeysEnum.myStartupId) !== undefined)
			? localStorage.get(StorageKeysEnum.myStartupId)
			: '',
		fecha: (fechaEmpleosString) ? fechaEmpleosString : fechaActual,
		empleos: empleos,
		perfiles: cargoEmpleos!,
		periodicidad: periodicidadEmpleos
	}

	/////////////////////////////Cargar en Drawer Financiacion/////////////////////////////////////////////
	const cargarEmpleosDrawer = (state: 'create' | 'update', empleos?: Iempleos) => {

		setCreateAndUpdate(state);

		setIdItem(empleos?._id);
		setFechaEmpleos(state === 'update' ? dayjs(stringToDayjs(empleos!.fecha!)) : dayjs(stringToDayjs(new Date().toString())));
		setEmpleos(state === 'update' ? empleos!.empleos! : '');
		setCargoEmpleos(state === 'update' ? empleos!.perfiles! : '');
		setPeriodicidadEmpleos(state === 'update' ? empleos!.periodicidad! : '');
	}
	/////////////////////////////////////Create Financiación/////////////////////////////////////////////////////

	const financiacionData: IFinanciacion = {
		startup_id: (localStorage.get(StorageKeysEnum.myStartupId) !== undefined)
			? localStorage.get(StorageKeysEnum.myStartupId)
			: '',
		fecha: (fechaInversionString!) ? fechaInversionString! : fechaActual,
		// fecha: new Date().toString(),
		cant: capitalInvertido,
		valoracion: valoracionInversion,
		nombre_inversionista: nombreInversionistaInversion,
		cargo_inversionista: cargoInversionistaInversion,
		correo_inversionista: correoInversionistaInversion,
		categoria: categoriaInversion,
		ronda: rondaInversion,
		pactado: pactadoInversion,
		nota: notaInversion,
		busqueda_inversion: true,
	}
	/////////////////////////////Cargar en Drawer Financiacion/////////////////////////////////////////////
	const cargarFinanciacionDrawer = (state: 'create' | 'update', financiacion?: IFinanciacion) => {

		setCreateAndUpdate(state);

		setIdItem(financiacion?._id);
		setFechaInversion(state === 'update'
			? dayjs(stringToDayjs(financiacion!.fecha!))
			: dayjs(stringToDayjs(new Date().toString())));

		setCapitalInvertido(state === 'update' ? financiacion!.cant : '');
		setValoracionInversion(state === 'update' ? financiacion!.valoracion : '');
		setNombreInversionistaInversion(state === 'update' ? financiacion!.nombre_inversionista : '');
		setCargoInversionistaInversion(state === 'update' ? financiacion!.cargo_inversionista : '');
		setCorreoInversionistaInversion(state === 'update' ? financiacion!.correo_inversionista : '');
		setCategoriaInversion(state === 'update' ? financiacion!.categoria : '');
		setRondaInversion(state === 'update' ? financiacion!.ronda : '');
		setPactadoInversion(state === 'update' ? financiacion!.pactado : '');
		setNotaInversion(state === 'update' ? financiacion!.nota : '');
		setBuscaInversion(state === 'update' ? financiacion!.busqueda_inversion ? 'Si' : 'No' : '');
	}
	/////////////////////////////////////Create Informacion traccion/////////////////////////////////////////////////////

	const infTraccionData: InfTraccion = {
		startup_id: (localStorage.get(StorageKeysEnum.myStartupId) !== undefined)
			? localStorage.get(StorageKeysEnum.myStartupId)
			: '',
		fecha: (fechaInfTraccionString!) ? fechaInfTraccionString! : fechaActual,
		// fecha: new Date().toString(),
		CAC: cacInfTraccion,
		LTV: ltvInfTraccion,
		usuarios_activo: usuarioInfTraccion,
		churn_rate: churnRateInfTraccion,
		burn_rate: burnRateInfTraccion,
		clientes_recurrentes: clientesRecurrentesInfTraccion,
		clientes_inactivos: clientesInactivosInfTraccion,
		nuevos_clientes: clientesNuevosInfTraccion,
		periodicidad: periodicidadInfTraccion,

	}
	/////////////////////////////Cargar en Drawer Financiacion/////////////////////////////////////////////
	const cargarInfTraccionDrawer = (state: 'create' | 'update', infTraccion?: InfTraccion) => {

		setCreateAndUpdate(state);

		setIdItem(infTraccion?._id);
		setFechaInfTraccion(state === 'update' ? dayjs(stringToDayjs(infTraccion!.fecha!)) : dayjs(stringToDayjs(new Date().toString())));
		setCacInfTraccion(state === 'update' ? infTraccion!.CAC : '');
		setLtvInfTraccion(state === 'update' ? infTraccion!.LTV : '');
		setUsuarioInfTraccion(state === 'update' ? infTraccion!.usuarios_activo : '');
		setChurnRateInfTraccion(state === 'update' ? infTraccion!.churn_rate : '');
		setBurnRateInfTraccion(state === 'update' ? infTraccion!.burn_rate : '');
		setClientesRecurrentesInfTraccion(state === 'update' ? infTraccion!.clientes_recurrentes! : '');
		setClientesInactivosInfTraccion(state === 'update' ? infTraccion!.clientes_inactivos! : '');
		setClientesNuevosInfTraccion(state === 'update' ? infTraccion!.nuevos_clientes! : '');
		setPeriodicidadInfTraccion(state === 'update' ? infTraccion!.periodicidad! : '');
	}

	/////////////////////////////////////Create Financiación/////////////////////////////////////////////////////

	const infFinancieraData: InfFinanciera = {
		startup_id: (localStorage.get(StorageKeysEnum.myStartupId) !== undefined)
			? localStorage.get(StorageKeysEnum.myStartupId)
			: '',
		fecha: (fechaInfFinancieraString!) ? fechaInfFinancieraString! : fechaActual,		// fecha: new Date().toString(),
		ingresos: ingresosInfFinanciera,
		costos: costosInfFinanciera,
		clientes: clientesInfFinanciera,
		burn_rate: burnInfFinanciera,
		facturacion: facturacionInfFinanciera,
		ventas: ventasInfFinanciera,
		mrr: monthlyInfFinanciera,
		mercado_potencial: mercadoPotencialInfFinanciera,
		presupuesto_marketing: presupuestoMarketingInfFinanciera,
		profit: "",
		periodicidad: periodicidadInfFinanciera,

	}
	/////////////////////////////Cargar en Drawer Financiacion/////////////////////////////////////////////
	const cargarInfFinancieraDrawer = (state: 'create' | 'update', infFinanciera?: InfFinanciera) => {

		setCreateAndUpdate(state);

		setIdItem(infFinanciera?._id);

		setFechaInfFinanciera(state === 'update' ? dayjs(stringToDayjs(infFinanciera?.fecha!)) : dayjs(stringToDayjs(new Date().toString())));
		setIngresosInfFinanciera(state === 'update' ? infFinanciera?.ingresos! : '');
		setCostosInfFinanciera(state === 'update' ? infFinanciera?.costos! : '');
		setPresupuestoMarketingInfFinanciera(state === 'update' ? infFinanciera?.presupuesto_marketing! : '');
		setClientesInfFinanciera(state === 'update' ? infFinanciera?.clientes! : '');
		setMonthlyInfFinanciera(state === 'update' ? infFinanciera?.mrr! : '');
		setBurnInfFinanciera(state === 'update' ? infFinanciera?.burn_rate! : '');
		setventasInfFinanciera(state === 'update' ? infFinanciera?.ventas! : '');
		setFacturacionInfFinanciera(state === 'update' ? infFinanciera?.facturacion! : '');
		setMercadoPotencialInfFinanciera(state === 'update' ? infFinanciera?.mercado_potencial! : '');
		setPeriodicidadInfFinanciera(state === 'update' ? infFinanciera?.periodicidad! : '');
	}

	/////////////////////////////////////Create Socios/////////////////////////////////////////////////////

	const createAll = async (tablaId: string) => {

		setLoadingCreateStartup(true);

		console.log('Create...:', myStartup)

		let resp: any = null;
		// const startup_id = localStorage.get(StorageKeysEnum.myStartupId);
		switch (tablaId) {
			case TablasFormIdEnum.socios: resp = await companyUseCase.createSocios(sociosData); break;
			case TablasFormIdEnum.empleos: resp = await companyUseCase.createEmpleos(empleosData); break;
			case TablasFormIdEnum.financiacion: resp = await companyUseCase.createFinanciacion(financiacionData); break;
			case TablasFormIdEnum.infFinanciera: resp = await companyUseCase.createInfFinanciera(infFinancieraData); break;
			case TablasFormIdEnum.infTraccion: resp = await companyUseCase.createInfTraccion(infTraccionData); break;
		}
		console.log('Created:', resp)

		if (resp.statusCode === 200 || resp.statusCode === 201) {
			setCreateOK(true);
			setErrorApi([]);
		} else if (resp.statusCode === 400) {
			setCreateOK(false);
			setErrorApi(resp.body.message);
		} else {
			setCreateOK(false);
			setErrorApi([]);
		}
		await meStartup()
		setLoadingCreateStartup(false);
	}
	//////////////////////////////////Update///////////////////////////////////////

	const updateAll = async (id: string, tablaId: string) => {

		setLoadingCreateStartup(true);

		console.log('Update...', myStartup)

		let resp: any = null;
		switch (tablaId) {

			case TablasFormIdEnum.socios: resp = await companyUseCase.updateSocios(id, sociosData); break;
			case TablasFormIdEnum.empleos: resp = await companyUseCase.updateEmpleos(id, empleosData); break;
			case TablasFormIdEnum.financiacion: resp = await companyUseCase.updateFinanciacion(id, financiacionData); break;
			case TablasFormIdEnum.infFinanciera: resp = await companyUseCase.updateInfFinanciera(id, infFinancieraData); break;
			case TablasFormIdEnum.infTraccion: resp = await companyUseCase.updateInfTraccion(id, infTraccionData); break;
		}

		console.log('Update:', resp)

		if (resp.statusCode === 200 || resp.statusCode === 201) {
			setCreateOK(true);
			setErrorApi([]);
		} else if (resp.statusCode === 400) {
			setCreateOK(false);
			setErrorApi(resp.body.message);
		} else {
			setCreateOK(false);
			setErrorApi([]);
		}
		await meStartup()
		setLoadingCreateStartup(false);
	}
	//////////////////////////////////Deleted All/////////////////////////////////


	const deleteAll = async (itemId: string, tablaId: string) => {

		setLoadingCreateStartup(true);

		console.log('Delete...')
		let resp: any = null;
		// const startup_id = localStorage.get(StorageKeysEnum.myStartupId);
		switch (tablaId) {

			case TablasFormIdEnum.socios: resp = await companyUseCase.deletedSocios(itemId); break;
			case TablasFormIdEnum.empleos: resp = await companyUseCase.deletedEmpleos(itemId); break;
			case TablasFormIdEnum.financiacion: resp = await companyUseCase.deletedFinanciacion(itemId); break;
			case TablasFormIdEnum.infFinanciera: resp = await companyUseCase.deletedInfFinanciera(itemId); break;
			case TablasFormIdEnum.infTraccion: resp = await companyUseCase.deletedInfTraccion(itemId); break;
		}

		console.log('Resp Delete:', resp)

		if (resp.statusCode === 200 || resp.statusCode === 201) {
			setCreateOK(true);
			setErrorApi(resp.body);
		} else if (resp.statusCode === 400) {
			setCreateOK(false);
		} else {
			setCreateOK(false);
		}
		await meStartup();
		setLoadingCreateStartup(false);
	}
	/////////////////////////MODAL Delete/////////////////////////////////////
	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [openModalId, setOpenModalId] = useState('');
	const handleOpenModalDelete = (modalId: string) => { setOpenModalDelete(true), setOpenModalId(modalId) };
	const handleCloseModalDelete = () => setOpenModalDelete(false);


	/////////////INIT State///////////////////
	const initState = async (startup?: IStartup | Empresa) => {
		console.log('MeStartup:', startup);
		///////////////Informacion Fija////////////////////
		setName(startup?.startupName!);
		setEmail(startup?.email!);
		setPais(startup?.pais_sede!);
		setMunicipio(startup?.ciudad!);
		setDireccion(startup?.direccion!);
		setDepartamento(startup?.departamento!);
		setSitioWeb(startup?.sitio_web!);
		setLinkedlin(startup?.linkedin!);
		setInstagram(startup?.instagram!);
		setFacebook(startup?.facebook!);
		setTwitter(startup?.twitter!);

		const phoneSplit = startup?.telefono!.split(' ');
		if(startup?.telefono!){
			setPhoneCodigo(phoneSplit![0]);
			setPhone(phoneSplit![1]);
		}

		setNit(startup?.id_contacto_principal!);
		setHealthTech(startup?.sector!);

		getMultiplesCheckbox(startup?.expectativa!);

		setTiempoOp(startup?.tiempo_de_operacion!);
		setEmpleosGenerados(startup?.empleos_directos!);
		setModelo_de_negocio(startup?.tipo_modelo_negocio!);
		setPrimeraVez(startup?.primera_vez ? 'Si' : 'No');
		setProgramaDeApoyo(startup?.acelerada ? 'Si' : 'No');
		setOportunidad_y_retos(startup?.oportunidades_y_retos!);

		setPorcentajeAccionario(startup?.oportunidad_identificada!);
		setInvolucradosAl100(startup?.propuesta_de_valor!);
		setTipo_Modelo_de_negocio(startup?.como_genera_ingresos!);
		setFechaInicioStartup(dayjs(stringToDayjs(startup?.startDate!)));
	}
	// const {meStartup,myStartup} = useContext(FormsStartupContext)
	//////////////////Iniciar estados//////////////////////////
	useEffect(() => {
		meStartup();
	}, [])

	useEffect(() => {
		initState(myStartup?.empresa)
	}, [myStartup])
	////////////////////////////////////////////////
	return (

		<FormsStartupContext.Provider value={{
			active,
			setActive,

			email, errorEmail, messageErrorEmail, handleEmail,
			name, handleName,
			pais, handlePais,
			departamento, handleDepartamento,
			municipio, handleMunicipio,
			direccion, handleDireccion,
			sitioWeb, handleSitioWeb,
			linkedlin, handleLinkedlin,
			instagram, handleInstagram,
			facebook, handleFacebook,
			twitter, handleTwitter,
			oportunidad_y_retos, handleOportunidad_y_retos,
			phone, errorPhone, messageErrorPhone, handlePhone,
			phoneCodigo, errorPhoneCodigo, messageErrorPhoneCodigo, handlePhoneCodigo,

			nit, errorNit, messageErrorNit, handleNit,
			healthTech, handleHealthTech,

			fechaInicioStartup,fechaInicioStartupString,handleFechaInicioStartup,
			///////////////////Expectativas//////////////////////////
			expectativaSelect,
			setExpectativa,
			handleChangeExpectativas,
			/////////////////////////////////////////////
			tiempoOp,
			handleTiempoOp,
			empleosGenerados,
			handleEmpleosGenerados,
			rol,
			handleRol,
			modelo_de_negocio,
			handleModelo_de_negocio,

			tipo_modelo_de_negocio,
			handleTipo_Modelo_de_negocio,


			primeraVez,
			handlePrimeraVez,
			programaDeApoyo,
			handleProgramaDeApoyo,
			/////////////////////////////////////////////
			porcentajeAccionario,
			handlePorcentajeAccionario,
			involucradosAl100,
			handleInvolucradosAl100,
			disable,
			handleDisable,
			////////////////////////////////////////////
			sidebarSociosOpen,
			handleSociosSidebarToggle,
			handleSociosSidebarClose,
			/////////////////Tabla Socio///////////////////////
			nameSocio,
			handleNameSocio,
			emailSocio,
			handleEmailSocio,
			cargoSocio,
			handleCargoSocio,
			identSocio,
			handleIdentSocio,


			////////////////////////////////////////////
			sidebarEmpleosOpen,
			handleEmpleosSidebarToggle,
			handleEmpleosSidebarClose,
			/////////////////Tabla Empleos///////////////////////
			fechaEmpleos,
			fechaEmpleosString,
			handleFechaEmpleos,
			empleos,
			handleEmpleos,
			cargoEmpleos,
			handleCargoEmpleos,

			empleosMultiSelected,
			handleEmpleosSelected,

			periodicidadEmpleos,
			handlePeriodicidadEmpleos,
			////////////////////////////////////////////
			sidebarInfFinancieraOpen,
			handleInfFinancieraSidebarToggle,
			handleInfFinancieraSidebarClose,
			/////////////////Tabla Informacion financiera///////////////////////
			fechaInfFinanciera,
			fechaInfFinancieraString,
			handleFechaInfFinanciera,

			periodicidadInfFinanciera,
			handlePeriodicidadInfFinanciera,

			ingresosInfFinanciera,
			handleIngresosInfFinanciera,

			costosInfFinanciera,
			handleCostosInfFinanciera,

			presupuestoMarketingInfFinanciera,
			handlePresupuestoMarketingInfFinanciera,

			monthlyInfFinanciera,
			handleMonthlyInfFinanciera,

			burnInfFinanciera,
			handleBurnInfFinanciera,

			ventasInfFinanciera,
			handleVentasInfFinanciera,

			facturacionInfFinanciera,
			handleFacturacionInfFinanciera,

			mercadoPotencialInfFinanciera,
			handleMercadoPotencialInfFinanciera,

			clientesInfFinanciera,
			handleClientesInfFinanciera,
			////////////////////////////////////////////
			sidebarInversionesOpen,
			handleInversionesSidebarToggle,
			handleInversionesSidebarClose,
			/////////////////Tabla de inversiones///////////////////////
			fechaInversion,
			fechaInversionString,
			handleFechaInversion,
			capitalInvertido,
			handleCapitalInvertido,
			nombreInversionistaInversion,
			handleNombreInversionistaInversion,
			cargoInversionistaInversion,
			handleCargoInversionistaInversion,
			correoInversionistaInversion,
			handleCorreoInversionistaInversion,
			categoriaInversion,
			handleCategoriaInversion,
			rondaInversion,
			handleRondaInversion,
			pactadoInversion,
			handlePactadoInversion,
			valoracionInversion,
			handleValoracionInversion,
			notaInversion,
			handleNotaInversion,
			buscaInversion,
			handleBuscaInversion,

			////////////////////////////////////////////
			sidebarInfTraccionOpen,
			handleInfTraccionSidebarToggle,
			handleInfTraccionSidebarClose,
			/////////////////Tabla de inversiones///////////////////////
			fechaInfTraccion,
			fechaInfTraccionString,
			handleFechaInfTraccion,
			cacInfTraccion,
			handleCacInfTraccion,
			ltvInfTraccion,
			handleLtvInfTraccion,
			usuarioInfTraccion,
			handleUsuarioInfTraccion,

			burnRateInfTraccion,
			handleBurnRateInfTraccion,

			churnRateInfTraccion,
			handleChurnRateInfTraccion,

			clientesRecurrentesInfTraccion,
			handleClientesRecurrentesInfTraccion,

			clientesInactivosInfTraccion,
			handleClientesInactivosInfTraccion,

			clientesNuevosInfTraccion,
			handleClientesNuevosInfTraccion,

			periodicidadInfTraccion,
			handlePeriodicidadInfTraccion,

			//////////////APIS////////////////////////
			///////////////////////////////////////
			errorApi,
			borrarErrorApi,
			errorApiGlobal,
			borrarErrorApiGlobal,
			idItem,
			////////////////////////////////////////////
			initState,
			createStartup,
			actualizarStartup,
			createOK,
			loadingCreateStartup,
			loadingGetStartup,
			createAndUpdate,
			createUpdateState,
			///////////Startup///////////////
			meStartup,
			myStartup,
			/////////Cargar en Drawers///////////
			cargarSociosDrawer,
			cargarEmpleosDrawer,
			cargarFinanciacionDrawer,
			cargarInfTraccionDrawer,
			cargarInfFinancieraDrawer,
			/////////APIS///////
			createAll,
			updateAll,
			deleteAll,
			///////MODAL DELETE///////////
			openModalDelete,
			handleOpenModalDelete,
			openModalId,
			handleCloseModalDelete,

		}}>{children}
		</FormsStartupContext.Provider>
	)
};