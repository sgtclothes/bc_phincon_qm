/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthStateType {
    login: { email: string; password: string };
    user: any;
    token: string | null;
    loading: boolean;
    error: any;
}
