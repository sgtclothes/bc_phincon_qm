import db from "../models/index.js";

class UserService {
    async getAll(): Promise<Response> {
        try {
            const response = await db.User.findAll({
                attributes: ["id", "fullname"],
                include: [
                    {
                        model: db.Role,
                        attributes: ["id", "title"],
                        as: "roles",
                        through: { attributes: [], model: db.UserRole },
                    },
                ],
            });
            return response;
        } catch (error: any) {
            throw new Error("failed to fetch: " + error.message);
        }
    }
    async getById(id: string): Promise<Response> {
        try {
            const response = await db.User.findByPk(id, {
                attributes: ["id", "fullname"],
                include: [
                    {
                        model: db.Role,
                        attributes: ["id", "title"],
                        as: "roles",
                        through: { attributes: [], model: db.UserRole },
                    },
                ],
            });
            return response;
        } catch (error: any) {
            throw new Error("failed to fetch: " + error.message);
        }
    }
}

export default new UserService();
