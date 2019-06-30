import { IRole } from '@Types/Roles';


export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    roleId: IRole['id'];

    createdAt?: Date;
    updatedAt?: Date;
};