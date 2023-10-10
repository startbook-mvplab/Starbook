
import { IStartup, IUser } from '../models';
import { IUserRepository, UserRepository } from '../repositories/user.repository ';
export interface IUserUseCase {
    login(email: string, password: string): Promise<IUser | null>;
    register(name: string, phone: string, email: string, buinessType: string, password: string): Promise<any>;
    forgotPassword(email: string): Promise<any>;
    verifyCode(email: string,verificationCode:string,password:string): Promise<any>;
}


export class UserUseCases implements IUserUseCase {

    private userRepository: IUserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    login(email: string, password: string): Promise<IUser | null> {
        return this.userRepository.login(email, password);
    }

    register(name: string, phone: string, email: string, buinessType: string, password: string): Promise<any> {
        return this.userRepository.register(name, phone, email, buinessType, password);
    }

    forgotPassword(email: string): Promise<any>{
        return this.userRepository.forgotPassword(email);
    }

    verifyCode(email: string,verificationCode:string,password:string): Promise<any>{
        return this.userRepository. verifyCode(email,verificationCode,password);
    }


}

