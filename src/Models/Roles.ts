import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '@Types/tools/Sequelize';
import { IRole } from '@Types/Roles';




export interface RolesInstance extends Sequelize.Instance<IRole>, IRole {}


export const RolesFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<RolesInstance, IRole> => {
  const attributes: SequelizeAttributes<IRole> = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  };

  const Roles = sequelize.define<RolesInstance, IRole>( 'Roles',  attributes, {  timestamps: true });

  Roles.associate = (models) => {
    Roles.hasMany(models.Users, { foreignKey: 'roleId', sourceKey: 'id'});
    Roles.belongsToMany(models.Permissions, {
      through: 'RolesToPermissions',
      as: 'roles',
      foreignKey: 'roleId',
      otherKey: 'permissionId'
    });
  };

  return Roles;
};