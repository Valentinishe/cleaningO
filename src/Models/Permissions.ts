import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '@Types/tools/Sequelize';
import { IPermission } from '@Types/Permissions';




export interface PermissionsInstance extends Sequelize.Instance<IPermission>, IPermission {}


export const PermissionsFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<PermissionsInstance, IPermission> => {
  const attributes: SequelizeAttributes<IPermission> = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
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

  const Permissions = sequelize.define<PermissionsInstance, IPermission>('Permissions', attributes, { timestamps: true });


  Permissions.associate = (models) => {
    Permissions.belongsToMany(models.Roles, {
      through: 'RolesToPermissions',
      as: 'permissions',
      foreignKey: 'permissionId',
      otherKey: 'roleId'
    });
  };

  return Permissions;
};