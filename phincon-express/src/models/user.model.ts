import { Model, DataTypes, Sequelize } from "sequelize";
import { UserModel } from "../types/user.type.js";

export default (sequelize: Sequelize) => {
    class User extends Model<UserModel> {
        static associate(models: any) {}
    }

    User.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fullname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            data: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
        }
    );

    return User;
};
