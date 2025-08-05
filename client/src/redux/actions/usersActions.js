import { actions } from ".";
import { api } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadUsers = createAsyncThunk("users/loadUsers", async (count, { dispatch }) => {
    try {
        dispatch(actions.app.setLoading(true));
        const response = await api.usersApi.loadUsers(count);
        return response;
    } finally {
        dispatch(actions.app.setLoading(false));
    }
});

export const loadUsersFromDB = createAsyncThunk("users/loadUsersFromDB", async () => {
    const response = await api.usersApi.loadUsersFromDB();
    return response.data;
});

export const addUser = createAsyncThunk("users/addUser", async (data) => {
    const response = await api.usersApi.addUserToDB(data);
    return response.status;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (data) => {
    const response = await api.usersApi.deleteUserFromDB(data);
    return response;
});
