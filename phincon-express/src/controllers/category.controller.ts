import db from "../models/index.js";
import { Request, Response } from "express";

class CategoryController {
    constructor() {}

    async getAll(req: Request, res: Response) {
        try {
            const categories = await db.Category.findAll({
                attributes: ["id", "title"],
                include: [
                    {
                        model: db.Product,
                        attributes: ["id", "title"],
                        as: "products",
                    },
                ],
            });
            console.log(categories);
            res.status(200).json({
                status: "success",
                message: "Categories fetched successfully",
                data: categories,
            });
        } catch (error: any) {
            console.error(error);
            res.status(500).json({
                status: "error",
                message: error.message,
            });
        }
    }
}

export default new CategoryController();
