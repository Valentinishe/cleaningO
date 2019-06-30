import * as Sequelize from "sequelize";
import { UsersFactory } from '@Models/Users';
import { RolesFactory } from '@Models/Roles';
import { RolesToPermissionsFactory } from '@Models/RolesToPermissions';
import { PermissionsFactory } from '@Models/Permissions';
import { IDataBase } from '@Types/DB';

const DATABASE = 'ominta';
const USERNAME = 'root';
const PASSWORD = '123456';
const PORT = 5432;
const params = {
    host: "localhost",
    dialect: "postgres",
};

let db: IDataBase = null;




class PostgresSQL {
    static init(){
        const sequelize = new Sequelize(`${params.dialect}://${USERNAME}:${PASSWORD}@${params.host}:${PORT}/${DATABASE}`);

        db = {
            sequelize,
            Sequelize,
            Permissions: PermissionsFactory(sequelize, Sequelize),
            Roles: RolesFactory(sequelize, Sequelize),
            RolesToPermissions: RolesToPermissionsFactory(sequelize, Sequelize),
            Users: UsersFactory(sequelize, Sequelize),
        };
   

        Object.keys(db).forEach(modelName => {
            if (db[modelName].associate) {
                db[modelName].associate(db);
            }
        });

    }

    static sync() {
        PostgresSQL.init();
        // exit need when we migrate from console
        db.sequelize.sync({ force: true }).then(() => process.exit());
    }

    static getDB():IDataBase {
        return db;
    }
}

export default PostgresSQL;