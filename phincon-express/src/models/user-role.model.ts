import { Model, DataTypes, Sequelize } from "sequelize";
import { UserRoleModel } from "../types/user-role.type.js";

export default (sequelize: Sequelize) => {
    class UserRole extends Model<UserRoleModel> {
        static associate(models: any) {
        }
    }

    UserRole.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            userId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            roleId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "roles",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
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
            modelName: "UserRole",
            tableName: "users_roles",
        }
    );

    return UserRole;
};
