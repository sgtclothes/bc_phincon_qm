import { QueryInterface, Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import db from "../../models/index.js";

export default {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        const roles = await db.Role.findAll({ attributes: ["id", "title"] });
        const user = await db.User.findOne({ where: { username: "sysadminphindojo" }, attributes: ["id", "username"] });

        let userRoles: {
            id: string;
            userId: string;
            roleId: string;
        }[] = [];

        const adminRole = roles.find((role: { id: string; title: string }) => role.title === "admin");
        userRoles.push({ id: uuidv4(), userId: user.id, roleId: adminRole.id });

        await queryInterface.bulkInsert("users_roles", userRoles, {});
    },

    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.bulkDelete("users_roles", {});
    },
};
