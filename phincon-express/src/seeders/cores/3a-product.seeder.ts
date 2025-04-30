import { QueryInterface, Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        const categories: any = await queryInterface.sequelize.query(`SELECT id FROM categories;`);
        let products: {
            id: string;
            title: string;
            categoryId: string;
            active: boolean;
            data: string;
        }[] = [];
        categories[0]?.map((category: { id: any }, index: number) => {
            products.push({
                id: uuidv4(),
                title: "Smartphone - " + index,
                categoryId: category.id,
                active: true,
                data: JSON.stringify({
                    description: "Latest model smartphone",
                }),
            });
        });
        await queryInterface.bulkInsert("products", products, {});
    },

    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.bulkDelete("products", {});
    },
};
