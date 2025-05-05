/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL_API = import.meta.env.VITE_BASE_URL_API;

export default class AuthApi {
    static async login(data: { email: string; password: string }) {
        try {
            const response = await fetch(`${BASE_URL_API}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                credentials: "include",
            });
            const json = await response.json();
            if (json?.status === "error") {
                throw new Error(json.message);
            }
            return json;
        } catch (error: any) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}
