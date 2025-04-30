import { Model, DataTypes, Sequelize } from "sequelize";
import { CategoryModel } from "../types/category.type.js";

export default (sequelize: Sequelize) => {
    class Category extends Model<CategoryModel> {
        static associate(models: any) {
            Category.hasMany(models.Product, {
                foreignKey: "categoryId",
                as: "products",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });
        }
    }

    Category.init(
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
            modelName: "Category",
            tableName: "categories",
        }
    );

    return Category;
};
