import { QueryInterface, DataTypes } from "sequelize";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.createTable("roles", {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            data: {
                type: DataTypes.JSON,
                allowNull: true,
                defaultValue: {},
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
        });
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.dropTable("roles");
    },
};

export function up(queryInterface: QueryInterface): any {
    throw new Error("Function not implemented.");
}

