import { Model, DataTypes, Sequelize } from "sequelize";
import { RoleModel } from "../types/role.type.js";

export default (sequelize: Sequelize) => {
    class Role extends Model<RoleModel> {
        static associate(models: any) {
            Role.belongsToMany(models.User, {
                through: "users_roles",
                as: "users",
                foreignKey: "roleId",
                otherKey: "userId",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });
        }
    }

    Role.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
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
            modelName: "Role",
            tableName: "roles",
        }
    );

    return Role;
};
