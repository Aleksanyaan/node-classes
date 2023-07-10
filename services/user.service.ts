interface IUser {
    id: string;
    name: string;
    age: number;
}
const users: IUser[] = [];
export interface IUserService {
    createUser: (payload: Omit<IUser, 'id'>) => IUser;
}
export class UserService implements IUserService{
    createUser(userPayLoad: Omit<IUser, 'id'>): IUser {
        const {name, age} = userPayLoad;
        const user = {
            id: Math.floor(Math.random() * 1000).toString(),
            name,
            age
        };
        users.push(user);
        return user;
    }
}
