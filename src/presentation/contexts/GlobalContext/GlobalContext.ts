import { createContext } from "react";


interface ContextProps {

    authOK: boolean;

    login: () => Promise<boolean>;
    register: () => void;
    recuperarPassword: () => Promise<boolean>,
    verificarNewPassword: () => Promise<boolean>,
    logout: () => void;
    isAuth: boolean;
    isAuthStatus: () => boolean
    messageErrorAuth: string,
    messageErrorCreate: string,

    loadingAuth: boolean,

    name: string,
    errorName: boolean,
    messageErrorName: string,
    handleName: (event: React.ChangeEvent<HTMLInputElement>) => void,

    phone: string,
    errorPhone: boolean,
    messageErrorPhone: string,
    handlePhone: (event: React.ChangeEvent<HTMLInputElement>) => void,

    startupName: string,
    errorStartupName: boolean,
    messageErrorStartupName: string,
    handleStartupName: (event: React.ChangeEvent<HTMLInputElement>) => void,

    email: string,
    errorEmail: boolean,
    messageErrorEmail: string,
    handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void,

    password: string,
    errorPassword: boolean,
    messageErrorPassword: string,
    handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void,

    passwordConfirm: string,
    errorPasswordConfirm: boolean,
    messageErrorPasswordConfirm: string,
    handlePasswordConfirm: (event: React.ChangeEvent<HTMLInputElement>) => void,

    recoverPassword: string,
    errorRecoverPassword: boolean,
    messageErrorRecoverPassword: string,
    handleRecoverPassword: (event: React.ChangeEvent<HTMLInputElement>) => void,

    recoverCode: string,
    errorRecoverCode: boolean,
    messageErrorRecoverCode: string,
    handleRecoverCode: (event: React.ChangeEvent<HTMLInputElement>) => void,

    passwordNew: string,
    errorPasswordNew: boolean,
    messageErrorPasswordNew: string,
    handlePasswordNew: (event: React.ChangeEvent<HTMLInputElement>) => void,

    businessType: string,
    errorBusinessType: boolean,
    handleBusinessType: (event: React.ChangeEvent<HTMLInputElement>) => void,

    politica_de_privacidad: boolean,
    handlePolitica: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void,
    // passwordConfirm: string,
    // errorPasswordConfirm: boolean,
    // messageErrorPasswordConfirm: string,
    // handlePasswordConfirm: (event: React.ChangeEvent<HTMLInputElement>) => void,
    activeSection: string ;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext({} as ContextProps)
