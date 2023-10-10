import { ApiUrlsEnum, BasesUrlsEnum } from "@/presentation/utilities"

export type HttpRequest = {
  baseUrl?: BasesUrlsEnum | string,
  url?: ApiUrlsEnum | string,
  method: HttpMethod,
  body?: any,
  headers?: any,
  params?: any,
  token?: any
}

export type UploadFileParams = {
  formData: FormData,
  method: HttpMethod,
  url?: ApiUrlsEnum | string,
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>,
  uploadFile: (params: UploadFileParams) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'patch'|'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}


export type FileResponse = {
  isOk: boolean,
  url: string,
}