/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserAPI from "../../services/api/user.api";
import { UserFormType, UserStateType } from "../../types/user.type";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async (_, { rejectWithValue }) => {
    try {
        const response = await UserAPI.getAll();
        return response;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const createUser = createAsyncThunk("users/createUser", async (userData: UserFormType, { rejectWithValue }) => {
    try {
        console.log(userData);
        const response = await UserAPI.create(userData);
        return response;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const updateUser = createAsyncThunk("users/updateUser", async (userData: UserFormType, { rejectWithValue }) => {
    try {
        console.log(userData);
        const response = await UserAPI.update(userData.id, userData);
        return response;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (userId: string, { rejectWithValue }) => {
    try {
        const response = await UserAPI.delete(userId);
        return response;
    } catch (error: any) {
        return rejectWithValue(error.response.data);
    }
});

const initialState: UserStateType = {
    users: [],
    user: null,
    loading: false,
    error: null,
    message: null,
    status: null,
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.status = "pending";
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.data;
                state.message = action.payload.message;
                state.status = action.payload.status;
            })
            .addCase(getAllUsers.rejected, (state, action: any) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload.data);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.users.findIndex((user) => user.id === action.payload.data.id);
                if (index !== -1) {
                    state.users[index] = action.payload.data;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.filter((user) => user.id !== action.payload.data);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userSlice.reducer;
