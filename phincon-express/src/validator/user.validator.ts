import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const createUserValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            fullname: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
            phoneNumber: Joi.string().required(),
            email: Joi.string().required(),
            active: Joi.string().required(),
            data: Joi.object(),
        });
        const validateError = schema.validate(req.body).error;
        if (validateError) {
            res.status(400).json({
                status: "error",
                message: validateError.message,
            });
            return;
        }
        next();
    } catch (error: any) {
        console.error(error);
    }
};
