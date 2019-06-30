import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '@Types/tools/Sequelize';
import { IUser } from '@Types/Users';




export interface UserInstance extends Sequelize.Instance<IUser>, IUser {}

export const UsersFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<UserInstance, IUser> => {
  const attributes: SequelizeAttributes<IUser> = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
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

  const Users = sequelize.define<UserInstance, IUser>('Users',  attributes, {  timestamps: true });

  Users.associate = (models) => {
    Users.belongsTo(models.Roles, { foreignKey: 'roleId', targetKey: 'id' });
  };

  return Users;
};