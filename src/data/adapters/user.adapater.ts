import { IUser } from "../models";

export const userAdapter = (user: any): IUser => ({
  id: user.id,
  documentType: user.documentType,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  phoneNumber: user.phoneNumber,
  cedula: user.cedula,
  avatar: user.avatar,
  token: user.token,
});