import { Model, DataTypes, Sequelize } from "sequelize";
import { ProductModel } from "../types/product.type.js";

export default (sequelize: Sequelize) => {
    class Product extends Model<ProductModel> {
        static associate(models: any) {
            Product.belongsTo(models.Category, {
                foreignKey: "categoryId",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                as: "category"
            });
        }
    }

    Product.init(
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
            categoryId: {
                type: DataTypes.UUID,
                allowNull: false
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
            modelName: "Product",
            tableName: "products",
        }
    );

    return Product;
};
