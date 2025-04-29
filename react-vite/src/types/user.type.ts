/* eslint-disable @typescript-eslint/no-explicit-any */

export interface UserType {
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

export interface UserStateType {
    users: UserType[];
    user: UserType | null;
    loading: boolean;
    error: any;
    message: string | null;
    status: string | null;
}

export type UserFormType = Omit<UserType, "createdAt" | "updatedAt" | "data" | "password">;
