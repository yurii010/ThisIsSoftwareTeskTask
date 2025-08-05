import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: false,
        emptyState: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setEmptyState: (state, action) => {
            state.emptyState = action.payload;
        },
    },
});

export const { setLoading, setEmptyState } = appSlice.actions;
export default appSlice.reducer;
