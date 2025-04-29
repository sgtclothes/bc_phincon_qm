import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../../types/todo.type";

const initialState: { todos: TodoType[] } = {
    todos: [
        {
            id: "1",
            text: "Learn React",
            completed: false,
        },
    ],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todoAdded(state, action: PayloadAction<{ id: string; text: string }>) {
            state.todos.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false,
            });
        },
        todoToggled(state, action: PayloadAction<string>) {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;
