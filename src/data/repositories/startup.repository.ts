import { AxiosHttpClient } from "@/protocols/http/axios-http-client";
import { HttpStatusCode } from "@/protocols/http/http_utilities";
import { companyAdapter, informacionFinancieraAdapter, informacionInversionAdapter } from "../adapters";
import { UnexpectedError } from "../errors";
import { ISearchCompanyBody, Iempleos } from "../interfaces";
import { IStartup } from "../models";
import { ICreateCompany } from "../models/companyCreate.model";
import { IFinanciacion } from "../models/financiacion.model";
import { InfTraccion } from "../models/infTraccion.model";
import { InfFinanciera } from "../models/infFinanciera.model";
import { ISocios } from "../models/socios.model";
import { empleoAdapter } from "../adapters/empleo_adapter";
import { informacionTraccionAdapter } from "../adapters/informacion_traccion_adapter";
import { ApiUrlsEnum } from "@/presentation/utilities";


export interface ICompanyRepository {

    searchCompaniesWithFilters(searchBody: ISearchCompanyBody): Promise<IStartup[]>,
    createStartup(startup: ICreateCompany, token: string): Promise<any>,
    actualizarStartup(startup: ICreateCompany, id: string): Promise<any>,
    meStartup(): Promise<any>,
    getStartupById(id: string): Promise<IStartup>,

    createSocios(socios: ISocios): Promise<any>,
    getSociosByStartup(id: string): Promise<any>,
    updateSocios(id: string, socios: ISocios): Promise<any>,
    deletedSocios(id: string): Promise<any>,

    createInfFinanciera(infFinanciera: InfFinanciera): Promise<any>,
    getInfFinancieraByStartup(id: string): Promise<any>,
    updateInfFinanciera(id: string, infFinanciera: InfFinanciera): Promise<any>,
    deletedInfFinanciera(id: string): Promise<any>,

    createFinanciacion(financiacion: IFinanciacion): Promise<any>,
    getFinanciacionByStartup(id: string): Promise<any>,
    updateFinanciacion(id: string, financiacion: IFinanciacion): Promise<any>,
    deletedFinanciacion(id: string): Promise<any>,

    createInfTraccion(infTraccion: InfTraccion): Promise<any>,
    getInfTraccionByStartup(id: string): Promise<any>,
    updateInfTraccion(id: string, infTraccion: InfTraccion): Promise<any>,
    deletedInfTraccion(id: string): Promise<any>,

    createEmpleos(empleos: Iempleos): Promise<any>,
    getEmpleosByStartup(id: string): Promise<any>,
    updateEmpleos(id: string, empleos: Iempleos): Promise<any>,
    deletedEmpleos(id: string): Promise<any>,

}


export class CompanyRepository implements ICompanyRepository {
    private axiosHttpClient: AxiosHttpClient;

    constructor() {
        this.axiosHttpClient = new AxiosHttpClient();
    }


    ////////////////////////////Seach Startup ByName ///////////////////////////////////////////////////
    async searchCompaniesWithFilters(searchBody: ISearchCompanyBody): Promise<IStartup[]> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.searchCompanies,
            method: 'post',
            body: JSON.stringify(searchBody),
        });

        if (axiosRequest.statusCode === HttpStatusCode.created) {
            // return  companiesResponseAdapter(axiosRequest.body);
            // console.log(axiosRequest.body.map(companyAdapter));
            return axiosRequest.body.map(companyAdapter);
            // axiosRequest.body.map(companyAdapter);
        }
        else if (axiosRequest.statusCode === HttpStatusCode.notFound) {
            throw new UnexpectedError();
        } else {
            throw new UnexpectedError();
        }

    }
    ////////////////////////////Seach My Startup ///////////////////////////////////////////////////

    async meStartup(): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.meStartup,
            method: 'get',
        });
        console.log('STARTUP:', axiosRequest)
        return axiosRequest;
    }

    /////////////////////////////Create Satasrtup/////////////////////////////////////////////////////////////////////////////////////////////////
    async createStartup(startup: ICreateCompany, token: string): Promise<any> {

        console.log('BODY TOKEN:', token)
        const axiosRequest = await this.axiosHttpClient.request({
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': `Bearer ${token}`,

            },
            url: ApiUrlsEnum.createCompany,
            method: 'post',
            body: JSON.stringify(startup)
        },

        );
        return axiosRequest;
    }
    /////////////////////////////Create Satasrtup/////////////////////////////////////////////////////////////////////////////////////////////////
    async actualizarStartup(startup: ICreateCompany, id: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.actualizarCompany}/${id}`,
            method: 'patch',
            body: JSON.stringify(startup)
        },

        );
        return axiosRequest;
    }

    async getStartupById(id: string): Promise<IStartup> {
        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.getStartupById}/${id}`,
            method: 'get',
        });

        if (axiosRequest.statusCode === HttpStatusCode.ok) {
            const body = axiosRequest.body;

            const startupTemp: IStartup = companyAdapter(body.empresa);

            const startup: IStartup = {
                ...startupTemp,
                financiacion: body.financiacion.map(informacionInversionAdapter),//informacionInversionAdapter(),
                empleo: body.empleo.map(empleoAdapter),
                infFinanciera: body.infFinanciera.map(informacionFinancieraAdapter),
                infTraccion: body.infTraccion.map(informacionTraccionAdapter),
                socio: body.socio
            }

            return startup;
        }

        else if (axiosRequest.statusCode === HttpStatusCode.notFound) {
            throw new UnexpectedError();
        } else {
            throw new UnexpectedError();
        }
    }

    /////////////////////////////INFORMACION DE Socios/////////////////////////////////////////////////
    //////////////////////////////////Create/////////////////////
    async createSocios(socios: ISocios): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.createSocios,
            method: 'post',
            body: JSON.stringify(socios)
        });

        return axiosRequest;
    }

    async getSociosByStartup(id: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getSociosByStartup,
            method: 'post',
            body: {
                "id": id
            }
        });
        console.log(axiosRequest);
        return axiosRequest;
    }
    //////////////////////////////////Update/////////////////////
    async updateSocios(id: string, socios: ISocios): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.updatedSociosByStartup}/${id}`,
            method: 'patch',
            body: JSON.stringify(socios)
        });
        console.log(axiosRequest);
        return axiosRequest;
    }

    //////////////////////////////////Delete/////////////////////
    async deletedSocios(id: string): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.deletedSociosByStartup}/${id}`,
            method: 'delete',
            // body: JSON.stringify(financiacion)
        });
        console.log(axiosRequest);
        return axiosRequest;
    }


    /////////////////////////////INFORMACION DE Empleo/////////////////////////////////////////////////
    //////////////////////////////////Create/////////////////////
    async createEmpleos(empleo: Iempleos): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.createEmpleo,
            method: 'post',
            body: JSON.stringify(empleo)
        });

        return axiosRequest;
    }

    async getEmpleosByStartup(id: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getEmpleoByStartup,
            method: 'post',
            body: {
                "id": id
            }
        });
        console.log(axiosRequest);
        return axiosRequest;
    }
    //////////////////////////////////Update/////////////////////
    async updateEmpleos(id: string, empleos: Iempleos): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.updatedEmpleosByStartup}/${id}`,
            method: 'patch',
            body: JSON.stringify(empleos)
        });
        console.log(axiosRequest);
        return axiosRequest;
    }

    //////////////////////////////////Delete/////////////////////
    async deletedEmpleos(id: string): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.deletedEmpleosByStartup}/${id}`,
            method: 'delete',
            // body: JSON.stringify(financiacion)
        });
        console.log(axiosRequest);
        return axiosRequest;
    }

    /////////////////////////////FINANCIACION/////////////////////////////////////////////////
    //////////////////////////////////Create/////////////////////
    async createFinanciacion(financiacion: IFinanciacion): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.createFinanciacion,
            method: 'post',
            body: JSON.stringify(financiacion)
        });

        return axiosRequest;
    }


    //////////////////////////////////get/////////////////////
    async getFinanciacionByStartup(id: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getFinanciacionByStartup,
            method: 'post',
            body: {
                "startup_id": id
            }
        });
        console.log(axiosRequest);
        return axiosRequest;
    }
    //////////////////////////////////Update/////////////////////
    async updateFinanciacion(id: string, financiacion: IFinanciacion): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.updatedFinanciacionByStartup}/${id}`,
            method: 'patch',
            body: JSON.stringify(financiacion)
        });
        console.log(axiosRequest);
        return axiosRequest;
    }

    //////////////////////////////////Delated/////////////////////
    async deletedFinanciacion(id: string): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.deletedFinanciacionByStartup}/${id}`,
            method: 'delete',
            // body: JSON.stringify(financiacion)
        });
        console.log(axiosRequest);
        return axiosRequest;
    }

    /////////////////////////////INFORMACION DE TRACCION/////////////////////////////////////////////////
    //////////////////////////////////Create/////////////////////
    async createInfTraccion(infTraccion: InfTraccion): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.createInfTraccion,
            method: 'post',
            body: JSON.stringify(infTraccion)
        });

        return axiosRequest;

    }


    //////////////////////////////////get/////////////////////
    async getInfTraccionByStartup(id: string): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getInfTraccionByStartup,
            method: 'post',
            body: {
                "startup_id": id
            }
        });
        console.log(axiosRequest);
        return axiosRequest;
    }

    //////////////////////////////////Update/////////////////////
    async updateInfTraccion(id: string, infTraccion: InfTraccion): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.updatedInfTraccionByStartup}/${id}`,
            method: 'patch',
            body: JSON.stringify(infTraccion)
        });
        console.log(axiosRequest);
        return axiosRequest;
    }

    //////////////////////////////////Update/////////////////////
    async deletedInfTraccion(id: string): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.deletedInfTraccionByStartup}/${id}`,
            method: 'delete',
            // body: JSON.stringify(infTraccion)
        });
        console.log(axiosRequest);
        return axiosRequest;
    }



    /////////////////////////////INFORMACION Financiera/////////////////////////////////////////////////
    //////////////////////////////////Create/////////////////////
    async createInfFinanciera(infFinanciera: InfFinanciera): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.createInfFinanciera,
            method: 'post',
            body: JSON.stringify(infFinanciera)
        });

        return axiosRequest;

    }

    //////////////////////////////////get/////////////////////
    async getInfFinancieraByStartup(id: string): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.getInfFinancieraByStartup,
            method: 'post',
            body: {
                "startup_id": id
            }
        });
        console.log(axiosRequest);
        return axiosRequest;
    }

    //////////////////////////////////Update/////////////////////
    async updateInfFinanciera(id: string, infFinanciera: InfFinanciera): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.updatedInfFinancieraByStartup}/${id}`,
            method: 'patch',
            body: JSON.stringify(infFinanciera)
        });
        console.log(axiosRequest);
        return axiosRequest;
    }

    async deletedInfFinanciera(id: string): Promise<any> {

        // console.log('BODY:', id)

        const axiosRequest = await this.axiosHttpClient.request({
            url: `${ApiUrlsEnum.updatedInfFinancieraByStartup}/${id}`,
            method: 'delete',
            // body: JSON.stringify(infFinanciera)
        });
        console.log(axiosRequest);
        return axiosRequest;

    }



}
