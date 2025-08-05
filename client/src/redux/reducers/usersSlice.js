import { createSlice } from "@reduxjs/toolkit";
import { actions } from "../actions";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        usersFromDB: [],
        userAddedSuccessfully: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actions.users.loadUsers.fulfilled, (state, action) => {
            state.users = [...state.users, ...action.payload];
        });
        builder.addCase(actions.users.loadUsersFromDB.fulfilled, (state, action) => {
            state.usersFromDB = action.payload;
        });
        builder.addCase(actions.users.addUser.fulfilled, (state, action) => {
            if (action.payload === 200) {
                state.userAddedSuccessfully = true;
            }
        });
        builder.addCase(actions.users.addUser.rejected, (state, action) => {
            if (action.payload === 409) {
                state.userAddedSuccessfully = false;
            }
        });
        builder.addCase(actions.users.deleteUser.fulfilled, (state, action) => {
            if (action.payload !== "") {
                state.usersFromDB = state.usersFromDB.filter((user) => user.login.uuid !== action.payload);
            }
        });
    },
});

export default usersSlice.reducer;
