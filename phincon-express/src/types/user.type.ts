export interface UserModel {
    id: string;
    username: string;
    fullname: string;
    phoneNumber: string;
    data: any;
    email: string;
    password: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}
