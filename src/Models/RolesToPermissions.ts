import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '@Types/tools/Sequelize';
import { IRoleToPermission } from '@Types/RolesToPermissions';


export interface RolesToPermissionsInstance extends Sequelize.Instance<IRoleToPermission>, IRoleToPermission {}


export const RolesToPermissionsFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<RolesToPermissionsInstance, IRoleToPermission> => {
  const attributes: SequelizeAttributes<IRoleToPermission> = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
    },
    permissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Permissions',
        key: 'id'
      }
    },
    createdAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.DATE
    }
  };

  const RolesToPermissions = sequelize.define<RolesToPermissionsInstance, IRoleToPermission>('RolesToPermissions', attributes, { timestamps: true });


  return RolesToPermissions;
};