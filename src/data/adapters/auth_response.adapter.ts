import { IAuthResponse } from '../models';
import { userAdapter } from './user.adapater';

export const authResponseAdapter = (authResponse: any): IAuthResponse => ({
    jwt: authResponse.acess_token,
    user: userAdapter(authResponse.user),
});