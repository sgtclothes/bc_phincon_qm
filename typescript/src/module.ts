export const name: string = "Sigit";
export function subtract(a: number, b: number): number {
    return a - b;
}

export default function stringModule(): {
    generateRandomCharacters: (length: number) => string;
    generateUsername: (name: string) => string;
} {
    return {
        generateRandomCharacters: (length) => {
            return Array.from({ length }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join("");
        },
        generateUsername: (name) => {
            return name
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("");
        },
    };
}
