/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PokemonApi from "../../services/api/pokemon.api";
import { PokemonStateType } from "../../types/pokemon.type";

const getPokemon = createAsyncThunk<PokemonStateType, string, { rejectValue: string }>(
    "pokemon/getPokemon",
    async (name, { rejectWithValue }) => {
        try {
            const response = await PokemonApi.getPokemon(name);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const getAllPokemons = createAsyncThunk("pokemon/getAllPokemons", async () => {
    try {
        const response = await PokemonApi.getAllPokemons();
        return response;
    } catch (error: any) {
        return error.message;
    }
});

const initialState: PokemonStateType = {
    pokemons: [],
    pokemon: null,
    loading: false,
    error: null,
};

const pokemon = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPokemon.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getPokemon.fulfilled, (state, action) => {
            state.loading = false;
            state.pokemon = action.payload;
        });
        builder.addCase(getPokemon.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(getAllPokemons.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllPokemons.fulfilled, (state, action) => {
            state.loading = false;
            state.pokemons = action?.payload?.results ?? [];
        });
        builder.addCase(getAllPokemons.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default pokemon.reducer;
export { getPokemon, getAllPokemons };
