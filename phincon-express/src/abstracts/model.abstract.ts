import { Request, Response } from "express";

export default abstract class AbstractModel {
    abstract getById(req: Request, res: Response): Promise<any>;
    abstract getAll(req: Request, res: Response): Promise<any>;
    abstract create(req: Request, res: Response): Promise<any>;
    abstract update(req: Request, res: Response): Promise<any>;
    abstract delete(req: Request, res: Response): Promise<any>;
}
