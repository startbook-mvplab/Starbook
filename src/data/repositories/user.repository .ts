
import { AxiosHttpClient } from '../../protocols/http/axios-http-client';
import { HttpStatusCode } from '@/protocols/http/http_utilities';
import { IUser } from '../models';
import { LocalStorageProtocol } from '@/protocols/cache/local_cache';
import { userAdapter } from '../adapters';
import { ApiUrlsEnum, StorageKeysEnum } from '@/presentation/utilities';


export interface IUserRepository {
    login(email: string, password: string): Promise<IUser | null>;
    register(name: string, phone: string, email: string, buinessType: string, password: string): Promise<any>;
    forgotPassword(email: string): Promise<any>,
    verifyCode(email: string,verificationCode:string,password:string): Promise<any>,
    getMyUser(): IUser | null,
}


export class UserRepository implements IUserRepository {

    private axiosHttpClient: AxiosHttpClient;
    private localStorage: LocalStorageProtocol;


    constructor() {
        this.axiosHttpClient = new AxiosHttpClient();
        this.localStorage = new LocalStorageProtocol();
    }

    /////////////////////////////////LOGIN////////////////////////////////////////////////
    async login(email: string, password: string,): Promise<IUser | null> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.login,
            method: 'post',
            body: {
                "email": email,
                "password": password
            },
        });

        if (axiosRequest.statusCode === HttpStatusCode.created) {
            return userAdapter(axiosRequest.body);
        } else {
            return null;
        }

    }
    /////////////////////////////////REGISTER///////////////////////////////////////////////////
    async register(name: string, phone: string, email: string, buinessType: string, password: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.register,
            method: 'post',
            body: {
                'fullName': name,
                'phoneNumber': phone,
                "email": email,
                "businessType": buinessType,
                "password": password,
                "photoURL": "none"
            },
        });

        if (axiosRequest.statusCode === HttpStatusCode.ok) {
            // const users = axiosRequest.body as User[];
            // const user: IUser = axiosRequest.body;
            // console.log(JSON.stringify(user));
            return axiosRequest.body;

        } else if (axiosRequest.statusCode === HttpStatusCode.created) {
            const user: IUser = axiosRequest.body;
            // console.log(JSON.stringify(user));
            return user;
        } else if (axiosRequest.statusCode === HttpStatusCode.notFound) {
            return axiosRequest.body;
        } else {
            return axiosRequest.body;
        }
    }

    /////////////////////////////////Forgot////////////////////////////////////////////////
    async forgotPassword(email: string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.forgotPassword,
            method: 'post',
            body: {
                "email": email,
            },
        });

    return axiosRequest.body;
       
    }
    /////////////////////////////////Forgot////////////////////////////////////////////////
    async verifyCode(email: string,verificationCode:string,password:string): Promise<any> {

        const axiosRequest = await this.axiosHttpClient.request({
            url: ApiUrlsEnum.verifyCode,
            method: 'post',
            body: {
                "email":email,
                "verificationCode":verificationCode,
                "password":password
            },
        });

        return axiosRequest.body;

    }
    ///////////////////////////////// getMyUser////////////////////////////////////////////////

    getMyUser(): IUser {
        const res = this.localStorage.get(StorageKeysEnum.user);
        console.log('user: ', res);
        if (res) {
            return {
                firstName: '',
                lastName: '',
                email: res.email,
            }
        }
        return {
            firstName: '',
            lastName: '',
            email: '',
        }
    }

}