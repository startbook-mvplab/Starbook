// import { BasesUrlsEnum, CookiesKeysEnum } from '@/utilities/enums';

import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { LocalStorageProtocol } from '../cache/local_cache';

import { HttpClient, HttpRequest, HttpResponse, UploadFileParams } from './http_utilities'
import { BasesUrlsEnum, StorageKeysEnum } from '@/presentation/utilities';


export class AxiosHttpClient implements HttpClient {
  axiosInstance: AxiosInstance;
  localStorageProtocol: LocalStorageProtocol;

  constructor(
  ) {
    this.localStorageProtocol = new LocalStorageProtocol();
    const user = this.localStorageProtocol.get(StorageKeysEnum.user);

    let token = '';

    if (user) {
      token = user.token;
      // console.log('TOKEN:',user.token)
    }

    this.axiosInstance = axios.create({
      baseURL: BasesUrlsEnum.backend,
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',

        'Authorization': `Bearer ${token}`,

      }
    });
  }

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await this.axiosInstance.request({
        baseURL: data.baseUrl,
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }


  async uploadFile(params: UploadFileParams): Promise<HttpResponse> {
    const axiosResponse = await this.axiosInstance.post(`${BasesUrlsEnum.backend}/${params.url}`,
      params.formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': `Bearer ${Cookies.get(CookiesKeysEnum.token)}`,
        }
      })
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }

  async updateFile(params: UploadFileParams): Promise<HttpResponse> {
    const axiosResponse = await this.axiosInstance.put(`${BasesUrlsEnum.backend}/${params.url}`,
      params.formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': `Bearer ${Cookies.get(CookiesKeysEnum.token)}`,
        }
      })
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }

}