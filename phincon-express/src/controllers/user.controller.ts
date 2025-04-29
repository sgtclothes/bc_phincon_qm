import { Request, Response } from "express";
import AbstractModel from "../abstracts/model.abstract.js";
import { v4 as uuidv4 } from "uuid";
import db from "../models/index.js";

class UserController extends AbstractModel {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const users = await db.User.findAll({
                attributes: ["id", "fullname"],
            });
            res.json({
                status: "success",
                message: "Users fetched successfully",
                data: users,
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
            const user = await db.User.findByPk(req.params.id, {
                attributes: ["id", "fullname"],
            });
            if (!user) {
                res.json({
                    message: "User not found",
                    status: "error",
                });
                return;
            }
            res.json({
                status: "success",
                message: "User fetched successfully",
                data: user,
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
            const user = { ...req.body, id: uuidv4() };
            await db.User.create(user);
            res.json({
                status: "success",
                message: "User created successfully",
                data: user,
            });
        } catch (error: any) {
            console.log(error);
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            /** cara 1 */
            const user = await db.User.update({ ...req.body }, { where: { id } });
            /** cara 2 */
            // let user = await db.User.findByPk(id);
            // console.log(user);
            // if (!user) {
            //     res.json({
            //         status: "error",
            //         message: "User not found",
            //     });
            // }
            // user.fullname = req.body.fullname;
            // user.username = req.body.username;
            // user.password = req.body.password;
            // user.phoneNumber = req.body.phoneNumber;
            // user.email = req.body.email;
            // user.active = req.body.active;
            // user.data = req.body.data;
            // await user.save();
            res.json({
                status: "success",
                message: "User updated successfully",
                data: user,
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
            await db.User.destroy({
                where: {
                    id,
                },
            });
            res.json({
                status: "success",
                message: "User deleted successfully",
                data: id,
            });
        } catch (error: any) {
            res.json({
                status: "error",
                message: error.message,
            });
        }
    }
}

export default new UserController();
