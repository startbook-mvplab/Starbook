
import { ISocio, Iempleos } from '../interfaces';
import { IStartup } from '../models';
import { ICreateCompany } from '../models/companyCreate.model';
import { IFinanciacion } from '../models/financiacion.model';
import { InfFinanciera } from '../models/infFinanciera.model';
import { InfTraccion } from '../models/infTraccion.model';
import { ISocios } from '../models/socios.model';
import { CompanyRepository, ICompanyRepository } from '../repositories/startup.repository';

export interface IStartupUseCase {
    createStartup(startup: ICreateCompany,token:string): Promise<any>,
    actualizarStartup(startup: ICreateCompany,id:string): Promise<any>,

    meStartup(): Promise<any>,

    createSocios(socios: ISocios): Promise<any>,
    getSociosByStartup(id: string): Promise<any>,
    updateSocios(id: string, socios: ISocios): Promise<any>,
    deletedSocios(id: string): Promise<any>,

    createFinanciacion(financiacion: IFinanciacion): Promise<any>,
    getFinanciacionByStartup(id: string): Promise<any>,
    updateFinanciacion(id: string, financiacion: IFinanciacion): Promise<any>,
    deletedFinanciacion(id: string): Promise<any>,

    createInfTraccion(infTraccion: InfTraccion): Promise<any>,
    getInfTraccionByStartup(id: string): Promise<any>,
    updateInfTraccion(id: string, infTraccion: InfTraccion): Promise<any>,
    deletedInfTraccion(id: string): Promise<any>,

    createInfFinanciera(infFinanciera: InfFinanciera): Promise<any>,
    getInfFinancieraByStartup(id: string): Promise<any>,
    updateInfFinanciera(id: string, infFinanciera: InfFinanciera): Promise<any>,
    deletedInfFinanciera(id: string): Promise<any>,

    createEmpleos(empleos:Iempleos): Promise<any>,
    getEmpleosByStartup(id: string): Promise<any>,
    updateEmpleos(id: string, Empleos: Iempleos): Promise<any> 
    deletedEmpleos(id: string): Promise<any>
}


export class StartupUseCases implements IStartupUseCase {

    private companyRepository: ICompanyRepository;

    constructor() {
        this.companyRepository = new CompanyRepository();
    }

    
    createStartup(startup: ICreateCompany,token:string): Promise<any> {
        return this.companyRepository.createStartup(startup,token);
    }

    actualizarStartup(startup: ICreateCompany,id:string): Promise<any> {
        return this.companyRepository.actualizarStartup(startup,id);
    }
    meStartup(): Promise<any> {
        return this.companyRepository. meStartup();
    }

    /////////////////////////////////////SOCIOS CRUD/////////////////////////////////////////////////////
	/////////////////////////////////////Create Socios/////////////////////////////////////////////////////
    
    createSocios(socios: ISocios): Promise<any> {
        return this.companyRepository.createSocios(socios);
    }

    getSociosByStartup(id: string): Promise<any> {
        return this.companyRepository.getSociosByStartup(id);
    }
    updateSocios(id: string, socios: ISocios): Promise<any> {
        return this.companyRepository.updateSocios(id,socios);
    }
    deletedSocios(id: string): Promise<any> {
        return this.companyRepository.deletedSocios(id);
    }
    /////////////////////////////////////EMPLEOS CRUD/////////////////////////////////////////////////////
	/////////////////////////////////////Create Empleos/////////////////////////////////////////////////////
    
    createEmpleos(empleos: Iempleos): Promise<any> {
        return this.companyRepository.createEmpleos(empleos);
    }

    getEmpleosByStartup(id: string): Promise<any> {
        return this.companyRepository.getEmpleosByStartup(id);
    }
    updateEmpleos(id: string, Empleos: Iempleos): Promise<any> {
        return this.companyRepository.updateEmpleos(id, Empleos);
    }
    deletedEmpleos(id: string): Promise<any> {
        return this.companyRepository.deletedEmpleos(id);
    }

	/////////////////////////////////////FINANCIACION CRUD/////////////////////////////////////////////////////
	/////////////////////////////////////Create Financiación/////////////////////////////////////////////////////
    
    createFinanciacion(financiacion: IFinanciacion): Promise<any> {
        return this.companyRepository.createFinanciacion(financiacion);
    }

    getFinanciacionByStartup(id: string): Promise<any> {
        return this.companyRepository.getFinanciacionByStartup(id);
    }
    updateFinanciacion(id: string, financiacion: IFinanciacion): Promise<any> {
        return this.companyRepository.updateFinanciacion(id, financiacion);
    }
    deletedFinanciacion(id: string): Promise<any> {
        return this.companyRepository.deletedFinanciacion(id);
    }


    /////////////////////////////////////FINFORMACION TRACCION CRUD/////////////////////////////////////////////////////
	/////////////////////////////////////Create Informacion traccion/////////////////////////////////////////////////////

    createInfTraccion(infTraccion: InfTraccion): Promise<any> {
        return this.companyRepository.createInfTraccion(infTraccion);
    }

    getInfTraccionByStartup(id: string): Promise<any> {
        return this.companyRepository.getInfTraccionByStartup(id);
    }
    updateInfTraccion(id: string, infTraccion: InfTraccion): Promise<any> {
        return this.companyRepository.updateInfTraccion(id, infTraccion);
    }
    deletedInfTraccion(id: string): Promise<any> {
        return this.companyRepository.deletedInfTraccion(id);
    }


    /////////////////////////////////////FINFORMACION FINANCIERA CRUD/////////////////////////////////////////////////////
	/////////////////////////////////////Create Informacion financiera/////////////////////////////////////////////////////


    createInfFinanciera(infFinanciera: InfFinanciera): Promise<any> {
        return this.companyRepository.createInfFinanciera(infFinanciera);
    }

    getInfFinancieraByStartup(id: string): Promise<any> {
        return this.companyRepository.getInfFinancieraByStartup(id);
    }
    updateInfFinanciera(id: string, infFinanciera: InfFinanciera): Promise<any> {
        return this.companyRepository.updateInfFinanciera(id, infFinanciera);
    }
    deletedInfFinanciera(id: string): Promise<any> {
        return this.companyRepository.deletedInfFinanciera(id);
    }

}
