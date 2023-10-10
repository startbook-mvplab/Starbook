import { IUser } from './user.model';

export interface IUsersResponse {
   count: number,
   users: IUser[],
}

