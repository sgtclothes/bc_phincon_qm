import { QueryInterface, Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

export default {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        let users = [
            {
                id: uuidv4(),
                fullname: "System Administrator",
                username: "sysadminphindojo",
                email: "sysadmin@phindojo.id",
                phoneNumber: "081234567890",
                password: await bcrypt.hash("abcDEF123!", 10),
                active: true,
                data: JSON.stringify({
                    platforms: ["phindojo"],
                }),
            },
            {
                id: uuidv4(),
                fullname: "Administrator",
                username: "adminphindojo",
                email: "admin@phindojo.id",
                phoneNumber: "081234567891",
                password: await bcrypt.hash("abcDEF123!", 10),
                active: true,
                data: JSON.stringify({
                    platforms: ["phindojo"],
                }),
            },
            {
                id: uuidv4(),
                fullname: "Student",
                username: "studentphindojo",
                email: "student@phindojo.id",
                phoneNumber: "081234567892",
                password: await bcrypt.hash("abcDEF123!", 10),
                active: true,
                data: JSON.stringify({
                    platforms: ["phindojo"],
                }),
            },
            {
                id: uuidv4(),
                fullname: "Mentor",
                username: "mentorphindojo",
                email: "mentor@phindojo.id",
                phoneNumber: "081234567893",
                password: await bcrypt.hash("abcDEF123!", 10),
                active: true,
                data: JSON.stringify({
                    platforms: ["phindojo"],
                }),
            },
            {
                id: uuidv4(),
                fullname: "User",
                username: "userphindojo",
                email: "user@phindojo.id",
                phoneNumber: "081234567894",
                password: await bcrypt.hash("abcDEF123!", 10),
                active: true,
                data: JSON.stringify({
                    platforms: ["phindojo"],
                }),
            },
        ];

        await queryInterface.bulkInsert("users", users, {});
    },

    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.bulkDelete("users", {});
    },
};
