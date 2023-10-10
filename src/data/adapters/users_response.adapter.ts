import { IUsersResponse } from '../models/users_response_model';
import { userAdapter } from './user.adapater';

export const usersResponseAdapter = (resp: any): IUsersResponse => ({
    count: resp.count,
    users: resp.users.map(userAdapter),
});