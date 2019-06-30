import * as Sequelize from "sequelize";

// models
import { UserInstance } from '@Models/Users';
import { RolesInstance } from '@Models/Roles';
import { RolesToPermissionsInstance } from '@Models/RolesToPermissions';
import { PermissionsInstance } from '@Models/Permissions';

// types
import { IUser } from '@Types/Users';
import { IRole } from '@Types/Roles';
import {IRoleToPermission } from '@Types/RolesToPermissions';
import { IPermission } from '@Types/Permissions';



export interface IDataBase {
    sequelize: Sequelize.Sequelize;
    Sequelize: Sequelize.SequelizeStatic;
    Permissions: Sequelize.Model<PermissionsInstance, IPermission>
    Roles: Sequelize.Model<RolesInstance, IRole>;
    RolesToPermissions: Sequelize.Model<RolesToPermissionsInstance, IRoleToPermission>;
    Users: Sequelize.Model<UserInstance, IUser>;
}