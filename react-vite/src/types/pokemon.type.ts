/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PokemonStateType {
    pokemons: { name: string; url: string }[];
    pokemon: any;
    loading: boolean;
    error: any;
}
