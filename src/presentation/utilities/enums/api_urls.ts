
export enum ApiUrlsEnum {
    register = 'auth/register',
    login = 'auth/login',
    forgotPassword = 'auth/forgotPassword',
    verifyCode = 'auth/verifyCodeAndUpdatePassword',
    products = 'products',
    allProducts = 'products/all',
    user = 'users/me',
    allUsers = 'users/all',
    searchStartupByName = 'empresas/name',
    searchCompanies = 'empresas/search',
    getStartupById = 'empresas',

    meStartup = 'empresas/me',
    createCompany = 'empresas/create',
    actualizarCompany = 'empresas',

     //////////////Socios/////////////////
     createSocios = 'socios/create',
     getSociosByStartup = 'socios',
     deletedSociosByStartup = 'socios',
     updatedSociosByStartup = 'socios',
     //////////////Empleos/////////////////
     createEmpleo = 'empleos/create',
     getEmpleoByStartup = 'empleos',
     deletedEmpleosByStartup = 'empleos',
     updatedEmpleosByStartup = 'empleos',
    //////////////Financiacion/////////////////
    createFinanciacion = 'financiacion/create',
    getFinanciacionByStartup = 'financiacion/startup_id',
    deletedFinanciacionByStartup = 'financiacion',
    updatedFinanciacionByStartup = 'financiacion',

    //////////////Información tracción/////////////////
    createInfTraccion = 'infTraccion/create',
    getInfTraccionByStartup = 'infTraccion/startup_id',
    deletedInfTraccionByStartup = 'infTraccion',
    updatedInfTraccionByStartup = 'infTraccion',

   //////////////Información financiera/////////////////
   createInfFinanciera='infFinanciera/create',
   getInfFinancieraByStartup='infFinanciera/startup_id',
   deletedInfFinancieraByStartup='infFinanciera',
   updatedInfFinancieraByStartup='infFinanciera',

}
