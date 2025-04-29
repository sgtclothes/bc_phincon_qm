import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todos/todo.slice";
import pokemonReducer from "./features/pokemons/pokemon.slice";
import userReducer from "./features/users/user.slice";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        pokemons: pokemonReducer,
        users: userReducer,
    },
});
