/* eslint-disable @typescript-eslint/no-explicit-any */
export default abstract class ModelAPI {
    abstract getById(id: string): Promise<any>;
    abstract getAll(): Promise<any>;
    abstract create(user: any): Promise<any>;
    abstract update(id: string, user: any): Promise<any>;
    abstract delete(id: string): Promise<any>;
}
