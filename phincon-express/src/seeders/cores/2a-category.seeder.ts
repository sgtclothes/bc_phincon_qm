import { QueryInterface, Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        let categories = [
            {
                id: uuidv4(),
                title: "Electronics",
                active: true,
                data: JSON.stringify({
                    description: "All kinds of electronic items",
                }),
            },
            {
                id: uuidv4(),
                title: "Books",
                active: true,
                data: JSON.stringify({
                    description: "Various genres of books",
                }),
            },
            {
                id: uuidv4(),
                title: "Clothing",
                active: true,
                data: JSON.stringify({
                    description: "Men's and women's clothing",
                }),
            },
            {
                id: uuidv4(),
                title: "Furniture",
                active: true,
                data: JSON.stringify({
                    description: "Home and office furniture",
                }),
            },
            {
                id: uuidv4(),
                title: "Toys",
                active: true,
                data: JSON.stringify({
                    description: "Toys for all ages",
                }),
            },
        ];

        await queryInterface.bulkInsert("categories", categories, {});
    },

    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.bulkDelete("categories", {});
    },
};
