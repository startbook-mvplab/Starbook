
import { UserUseCases } from "@/data/usecases";
import { LocalStorageProtocol } from "@/protocols/cache/local_cache";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { GlobalContext } from "./GlobalContext";
import { StartupUseCases } from "@/data/usecases/startup.usecase";
import { ICreateCompany } from "@/data/models/companyCreate.model";
import { useNavigate } from "react-router-dom";
import { StorageKeysEnum } from "@/presentation/utilities";
import { useRouter } from "next/router";

type Props = {
	children: JSX.Element,
};


export const GlobalProvider: FC<Props> = ({ children }) => {


	const localStorageProtocol = new LocalStorageProtocol();
	const router = useRouter();
	/////////////////////////////////Manejo Email//////////////////////////////////////////
	const isEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	const [email, setEmail] = React.useState('');
	const [errorEmail, setErrorEmail] = React.useState(false);
	const [messageErrorEmail, setMessageErrorEmail] = React.useState('');

	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value || '');
		const email = event.target.value;

		console.log('Email:', email);

		if (isEmail.test(email)) {
			setErrorEmail(false);
			setMessageErrorEmail('')
		} else {
			setErrorEmail(true);
			setMessageErrorEmail('El correo no es válido')
		}
	};

	/////////////////////////////////Manejo Password//////////////////////////////////////////
	// const isPass= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/;

	const [password, setPassword] = React.useState('');
	const [errorPassword, setErrorPassword] = React.useState(false);
	const [messageErrorPassword, setMessageErrorPassword] = React.useState('');

	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value || '');

		const password = event.target.value;

		console.log('Password:', password);

		// if (isPass.test( password)) {
		if (password.length > 7) {
			setErrorPassword(false);
			setMessageErrorPassword('')
			if (passwordConfirm === password) {
				setErrorPasswordConfirm(false)
				setMessageErrorPasswordConfirm('')
			}
			else {
				setErrorPasswordConfirm(true);
				setMessageErrorPasswordConfirm('Las contraseñas no coincide')
			}
		} else {
			setErrorPassword(true);
			// setMessageErrorPassword('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
			setMessageErrorPassword('Su contraseña debe contener mínimo 8 caracteres')
		}
	};
	// /////////////////////////////////Manejo Confirmar Password //////////////////////////////////////////
	// // const isPass= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/;

	const [passwordConfirm, setPasswordConfirm] = React.useState('');
	const [errorPasswordConfirm, setErrorPasswordConfirm] = React.useState(false);
	const [messageErrorPasswordConfirm, setMessageErrorPasswordConfirm] = React.useState('');

	const handlePasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPasswordConfirm(event.target.value || '');

		const passwordConfirm = event.target.value;

		console.log('PasswordConfirm:', passwordConfirm);

		// if (isPass.test( passwordConfirm)) {
		if (passwordConfirm.length > 7) {
			setErrorPasswordConfirm(false);
			setMessageErrorPasswordConfirm('')
			if (passwordConfirm === password) {
				setErrorPasswordConfirm(false)
				setMessageErrorPasswordConfirm('')
			}
			else {
				setErrorPasswordConfirm(true);
				setMessageErrorPasswordConfirm('Las contraseñas no coincide')
			}
		} else {
			setErrorPasswordConfirm(true);
			// setMessageErrorPasswordConfirm('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
			setMessageErrorPasswordConfirm('Su contraseña debe contener mínimo 8 caracteres')
		}
	};
	/////////////////////////////////Manejo Name//////////////////////////////////////////
	// const isPass= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/;
	const [startupName, setStartupName] = React.useState('');
	const [errorStartupName, setErrorStartupName] = React.useState(false);
	const [messageErrorStartupName, setMessageErrorStartupName] = React.useState('');

	const handleStartupName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStartupName(event.target.value || '');

		const startupName = event.target.value;

		console.log('StartupName:', startupName);
	};

	const [name, setName] = React.useState('');
	const [errorName, setErrorName] = React.useState(false);
	const [messageErrorName, setMessageErrorName] = React.useState('');

	const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value || '');

		const name = event.target.value;

		console.log('name:', name);
	};
	/////////////////////////////////Manejo Name//////////////////////////////////////////
	// const isPass= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/;

	const [businessType, setBusinessType] = React.useState('');
	const [errorBusinessType, setErrorBusinessType] = React.useState(false);
	const [mesageErrorBusinessType, setMesageErrorBusinessType] = React.useState('');

	const handleBusinessType = (event: React.ChangeEvent<HTMLInputElement>) => {
		setBusinessType(event.target.value || '');

		const businessType = event.target.value;

		console.log('BusinessType:', businessType);

	};

	////////////////////////////////////////////////////////////////////////////////////
	const [phone, setPhone] = React.useState('');
	const [errorPhone, setErrorPhone] = React.useState(false);
	const [messageErrorPhone, setMessageErrorPhone] = React.useState('');

	const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(event.target.value || '');

		const phone = event.target.value;

		console.log('phone:', phone);

		// if (isPass.test( phone)) {
		if (phone.length > 7 && !isNaN(parseInt(phone))) {
			setErrorPhone(false);
			setMessageErrorPhone('')
		} else {
			setErrorPhone(true);
			// setMessageErrorPhone('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
			setMessageErrorPhone('Introduzca un número de telefono válido')
		}
	};

	const [politica_de_privacidad, setPolitica_de_privacidad] = React.useState<boolean>(false);

	const handlePolitica = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
		setPolitica_de_privacidad(event.target.checked);
		console.log('Política de Privacidad:', politica_de_privacidad);
	}
	////////////////////////////////////////////////////////////////////////////////////
	const [recoverPassword, setRecoverPassword] = React.useState('');
	const [errorRecoverPassword, setErrorRecoverPassword] = React.useState(false);
	const [messageErrorRecoverPassword, setMessageErrorRecoverPassword] = React.useState('');

	const handleRecoverPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRecoverPassword(event.target.value || '');

		const RecoverPassword = event.target.value;

		console.log('RecoverPassword:', RecoverPassword);

		// if (isPass.test( RecoverPassword)) {
		if (recoverPassword.length > 7 && !isNaN(parseInt(recoverPassword))) {
			setErrorRecoverPassword(false);
			setMessageErrorRecoverPassword('')
		} else {
			setErrorRecoverPassword(true);
			// setMessageErrorRecoverPassword('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
			setMessageErrorRecoverPassword('Introduzca un número de telefono válido')
		}
	};

	////////////////////////////////////////////////////////////////////////////////////
	const [recoverCode, setRecoverCode] = React.useState('');
	const [errorRecoverCode, setErrorRecoverCode] = React.useState(false);
	const [messageErrorRecoverCode, setMessageErrorRecoverCode] = React.useState('');

	const handleRecoverCode = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRecoverCode(event.target.value || '');

		const RecoverCode = event.target.value;

		console.log('RecoverCode:', RecoverCode);

		// if (isPass.test( RecoverCode)) {
		if (recoverCode.length > 2 && !isNaN(parseInt(recoverCode))) {
			setErrorRecoverCode(false);
			setMessageErrorRecoverCode('')
		} else {
			setErrorRecoverCode(true);
			// setMessageErrorRecoverCode('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
			setMessageErrorRecoverCode('Introduzca el código de verificación correcto')
		}
	};

	/////////////////////////////////Manejo Password//////////////////////////////////////////
	// const isPass= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/;

	const [passwordNew, setPasswordNew] = React.useState('');
	const [errorPasswordNew, setErrorPasswordNew] = React.useState(false);
	const [messageErrorPasswordNew, setMessageErrorPasswordNew] = React.useState('');

	const handlePasswordNew = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPasswordNew(event.target.value || '');

		const passwordNew = event.target.value;

		console.log('PasswordNew:', passwordNew);

		// if (isPass.test( passwordNew)) {
		if (passwordNew.length > 7) {
			setErrorPasswordNew(false);
			setMessageErrorPasswordNew('')
		} else {
			setErrorPasswordNew(true);
			// setMessageErrorPasswordNew('Su contraseña debe contener mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial')
			setMessageErrorPasswordNew('Su contraseña debe contener mínimo 8 caracteres')
		}
	};
	//////////////////////////////////MÉTODOS//////////////////////////////////////////////////////////////////
	/////////////////////////////////AUTH STATUS//////////////////////////////////////////

	const [isAuth, setIsAuth] = React.useState(false);

	const authStatus = async () => {

		if (localStorageProtocol.get(StorageKeysEnum.user) !== null) {
			setIsAuth(true)
			console.log('IsAuth:', isAuth)
		} else {
			setIsAuth(false);
			console.log('IsAuth:', isAuth)
		}

	}
	//////////////////////////////////////////////////////////////
	const isAuthStatus = () => {

		if (localStorageProtocol.get(StorageKeysEnum.user) !== null) {
			setIsAuth(true)
			return true;
		} else {
			setIsAuth(false)
			return false;
		}
	}
	/////////////////////Navigator Service///////////////////////////////////////////


	/////////////////////////////LOGIN//////////////////////////////////////////////
	const useruseCase = new UserUseCases();
	const [loadingAuth, setLoadingAuth] = React.useState(false);
	const [authOK, setAuthOk] = React.useState(true);

	const [messageErrorAuth, setMessageErrorAuth] = React.useState('');

	const login = async () => {
		setLoadingAuth(true);
		console.log('Loading...')
		const resp = await useruseCase.login(email, password)
		console.log('RespAuth:', resp);
		setLoadingAuth(false);

		if (resp) {
			localStorageProtocol.set(StorageKeysEnum.user, resp);

			authStatus();
			setAuthOk(true);
			return true;
		} else {
			setAuthOk(false)
			// setMessageErrorAuth(resp.message);
			return false;
		}
	}

	/////////////////////////////LOGIN//////////////////////////////////////////////
	const register = async () => {

		setLoadingAuth(true);
		console.log('Register...')
		const resp = await useruseCase.register(name, phone, email, businessType, password)
		console.log('RespRegister:', resp)

		setLoadingAuth(false);

		if ((resp.token !== undefined || resp.token !== '') && resp.statusCode === undefined) {

			const createOK = await createStartup(resp.token);
			console.log(' createOK:', createOK);

			if (createOK) {
				localStorageProtocol.set(StorageKeysEnum.user, resp);
				authStatus();
				setAuthOk(true);
				// setMessageErrorAuth(messageErrorCreate)
			} else {
				setMessageErrorAuth(messageErrorCreate)
				console.log('Error:', messageErrorCreate)
			}

		} else {
			setAuthOk(false)
			setMessageErrorAuth(resp.message)
		}
	}

	const recuperarPassword = async () => {

		setLoadingAuth(true);
		console.log('Recuperar...')
		const resp = await useruseCase.forgotPassword(email);
		console.log('RespRecuperar:', resp)
		setLoadingAuth(false);

		if (resp.message === undefined && resp) {
			setMessageErrorRecoverCode(resp)
			console.log('OK:', (messageErrorRecoverCode));
			setAuthOk(true);
			return true;
		} else {
			setMessageErrorAuth(messageErrorAuth)
			console.log('Error:', messageErrorAuth);
			setAuthOk(false);
			return false;
		}
	}

	const verificarNewPassword = async () => {
		setLoadingAuth(true);
		console.log('Recuperar New Passwor...')
		const resp = await useruseCase.verifyCode(email, recoverCode, password);
		console.log('RespRecuperar:', resp)
		setLoadingAuth(false);

		if (resp.message === undefined && resp) {
			setMessageErrorRecoverPassword(resp)
			console.log('OK:', (messageErrorRecoverPassword));
			setAuthOk(true);
			return true;
		} else {
			setMessageErrorAuth(resp.message)
			console.log('Error:', resp.message)
			setAuthOk(false);
			return false;
		}
	}
	/////////////////////////////LOGOUT//////////////////////////////////////////////
	const logout = async () => {
		localStorageProtocol.delete(StorageKeysEnum.user);
		localStorageProtocol.delete(StorageKeysEnum.myStartupId);
		// await authStatus();
	}
	///////////////////////////////////////////////////////////////////////////////////
	const startup: ICreateCompany = {
		// email: email,
		startupName: startupName,
		telefono: phone,
		nombre_contacto_principal: name,
		correo_contacto_principal: email,
		telefono_contacto_principal: phone,
		// sector: businessType,
		tipo_modelo_negocio: businessType,
		// tipo_modelo_negocio: modelo_de_negocio,
	}

	const [loadingCreateStartup, setLoadingCreateStartup] = React.useState(false);
	const companyUseCase = new StartupUseCases();
	// const [createOK, setCreateOK] = React.useState(false);
	const [messageErrorCreate, setMessageErrorCreate] = React.useState('');

	const createStartup = async (token: string) => {

		setLoadingCreateStartup(true);

		console.log('Create...')

		const resp = await companyUseCase.createStartup(startup, token);
		console.log('RespCreate:', resp)
		setLoadingCreateStartup(false);
		let ok: boolean = false;

		if (resp.statusCode === 201) {
			console.log('Created')
			// setCreateOK(true);
			ok = true;
			setMessageErrorCreate('');
		} else {
			ok = false;
			// setCreateOK(false);
			setMessageErrorCreate(resp.body.message);
		}

		return ok
	}
	useEffect(() => {
		setMessageErrorRecoverPassword('');
	}, [router.pathname])

	const [activeSection, setActiveSection] = useState('');

	///////////////////////////////////////////////////////////////////////////////////
	return (

		<GlobalContext.Provider value={{
			authOK,
			isAuth,
			isAuthStatus,
			messageErrorAuth,

			login,
			register,
			messageErrorCreate,

			logout,
			loadingAuth,

			name,
			errorName,
			messageErrorName,
			handleName,

			startupName,
			errorStartupName,
			messageErrorStartupName,
			handleStartupName,

			phone,
			errorPhone,
			messageErrorPhone,
			handlePhone,

			email,
			errorEmail,
			messageErrorEmail,
			handleEmail,

			password,
			errorPassword,
			messageErrorPassword,
			handlePassword,

			passwordConfirm,
			errorPasswordConfirm,
			messageErrorPasswordConfirm,
			handlePasswordConfirm,

			recuperarPassword,
			verificarNewPassword,

			recoverPassword,
			errorRecoverPassword,
			messageErrorRecoverPassword,
			handleRecoverPassword,

			recoverCode,
			errorRecoverCode,
			messageErrorRecoverCode,
			handleRecoverCode,

			passwordNew,
			errorPasswordNew,
			messageErrorPasswordNew,
			handlePasswordNew,

			businessType,
			errorBusinessType,
			handleBusinessType,

			politica_de_privacidad,
			handlePolitica,
			activeSection,
			setActiveSection,

			// passwordConfirm,
			// errorPasswordConfirm,
			// messageErrorPasswordConfirm,
			// handlePasswordConfirm

		}}>{children}
		</GlobalContext.Provider>
	)
};