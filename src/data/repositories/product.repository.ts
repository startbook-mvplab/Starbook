import { AxiosHttpClient } from '@/protocols/http/axios-http-client';
import { HttpStatusCode } from '@/protocols/http/http_utilities';
import { productAdapter } from '../adapters';
import { UnexpectedError } from '../errors';
import { IProduct } from '../models';
import { ApiUrlsEnum } from '@/presentation/utilities';


export interface IProductRepository {
    // addProducts(products: IProduct[]): Promise<boolean>;

    getAll(): Promise<IProduct[]>;

}


export class ProductRepository implements IProductRepository {
    private axiosHttpClient: AxiosHttpClient;

    constructor() {
        this.axiosHttpClient = new AxiosHttpClient();
    }


    async getAll(): Promise<IProduct[]> {
        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.allProducts,
            method: 'get',
        });

        if (axiosRequest.statusCode === HttpStatusCode.ok) {
            return axiosRequest.body.map(productAdapter);
        }

        else if (axiosRequest.statusCode === HttpStatusCode.notFound) {
            throw new UnexpectedError();
        } else {
            throw new UnexpectedError();
        }
    }

    // async addProducts(products: IProduct[]): Promise<boolean> {

    //     const axiosRequest = await this.axiosHttpClient.request({
    //         url: ApiUrlsEnum.products,
    //         method: 'post',
    //         body: JSON.stringify(products[0])
    //     });

    //     if (axiosRequest.statusCode === HttpStatusCode.created) {
    //         return true;
    //     }
    //     return false;
    // }

    

}