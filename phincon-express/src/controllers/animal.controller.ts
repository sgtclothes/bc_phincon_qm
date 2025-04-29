import { Request, Response } from "express";
import AbstractModel from "../abstracts/model.abstract.js";

class AnimalController extends AbstractModel {
    currentAnimal: string;

    constructor() {
        super();
        this.currentAnimal = "cat";
    }

    async getAll(req: Request, res: Response) {
        return ["cat", "dog", "bird"];
    }

    async getById(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

    async create(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

    async update(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

    async delete(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
}

export default new AnimalController();
