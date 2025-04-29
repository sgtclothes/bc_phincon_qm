/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getAllPokemons } from "../features/pokemons/pokemon.slice";

const Pokemon = () => {
    const dispatch = useDispatch();
    const { pokemon, pokemons, loading } = useSelector((state: any) => state.pokemons);

    useEffect(() => {
        dispatch(getAllPokemons() as any);
        dispatch(getPokemon("pikachu") as any);
    }, [dispatch]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    return (
        <div>
            {pokemon && (
                <div className="bg-yellow-50 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-xl font-bold text-yellow-600 mb-4">Featured Pokémon</h2>
                    <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow">
                        {pokemon.sprites && (
                            <img
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                className="w-32 h-32 object-contain"
                            />
                        )}
                        <div className="ml-0 sm:ml-6 mt-4 sm:mt-0">
                            <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>
                            <div className="mt-2">
                                <span className="text-sm text-gray-600">Height: {pokemon.height}</span>
                                <span className="ml-4 text-sm text-gray-600">Weight: {pokemon.weight}</span>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {pokemon?.types?.map((type: any, index: number) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded capitalize"
                                    >
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-indigo-700 mb-6">Pokémon List</h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {pokemons?.map((pokemon: any) => (
                        <button
                            key={pokemon.name}
                            className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center"
                            onClick={() => dispatch(getPokemon(pokemon.name) as any)}
                        >
                            <div className="font-medium capitalize text-center">{pokemon.name}</div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
