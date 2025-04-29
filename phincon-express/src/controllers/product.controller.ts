import { Request, Response } from "express";
import AbstractModel from "../abstracts/model.abstract.js";

let products = [
    {
        id: 1,
        name: "Product 1",
        price: 10000,
    },
    {
        id: 2,
        name: "Product 2",
        price: 20000,
    },
    {
        id: 3,
        name: "Product 3",
        price: 30000,
    },
    {
        id: 4,
        name: "Product 4",
        price: 40000,
    },
];

class ProductController extends AbstractModel {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            res.json({
                status: "success",
                message: "Products fetched successfully",
                products,
            });
        } catch (error: any) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
    async getById(req: Request, res: Response): Promise<void> {
        try {
            const product = products.find((product) => product.id === Number(req.params.id));
            res.json({
                status: "success",
                message: "Product fetched successfully",
                product,
            });
        } catch (error: any) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
    async create(req: Request, res: Response): Promise<void> {
        try {
            products.push({ ...req.body, id: products.length + 1 });
            res.json({
                status: "success",
                message: "Product created successfully",
            });
        } catch (error: any) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
    async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name, price } = req.body;
            const product = products.find((product) => product.id === Number(id));
            if (!product) {
                res.json({
                    status: "error",
                    message: "Product not found",
                });
                return;
            }
            product.name = name;
            product.price = price;
            res.json({
                status: "success",
                message: "User updated successfully",
                data: product,
            });
        } catch (error: any) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            products = products.filter((product) => product.id !== Number(id));
            res.json({
                status: "success",
                message: "User deleted successfully",
                data: products,
            });
        } catch (error: any) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
}

export default new ProductController();
