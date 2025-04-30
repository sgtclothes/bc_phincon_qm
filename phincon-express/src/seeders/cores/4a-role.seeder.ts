import { QueryInterface, Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export default {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        let roles = [
            {
                id: uuidv4(),
                title: "user",
                active: true,
                data: JSON.stringify({
                    description: "User role",
                }),
            },
            {
                id: uuidv4(),
                title: "admin",
                active: true,
                data: JSON.stringify({
                    description: "Admin role",
                }),
            },
            {
                id: uuidv4(),
                title: "student",
                active: true,
                data: JSON.stringify({
                    description: "Student role",
                }),
            },
            {
                id: uuidv4(),
                title: "mentor",
                active: true,
                data: JSON.stringify({
                    description: "Mentor role",
                }),
            },
        ];

        await queryInterface.bulkInsert("roles", roles, {});
    },

    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.bulkDelete("roles", {});
    },
};
