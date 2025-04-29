const BASE_URL_POKEMON = import.meta.env.VITE_BASE_URL_POKEMON;

export default class PokemonApi {
    static async getPokemon(name: string) {
        const response = await fetch(`${BASE_URL_POKEMON}/pokemon/${name}`);
        const data = await response.json();
        return data;
    }
    static async getAllPokemons() {
        const response = await fetch(`${BASE_URL_POKEMON}/pokemon`);
        const data = await response.json();
        return data;
    }
}
