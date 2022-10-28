import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Async Thunk Action Definition
export const fetchPost = createAsyncThunk('post/list', async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return data;
    } catch (error) {
        return error?.response;
    }
});

const postSlices = createSlice({
    name: 'post',
    initialState: {},
    // Using the map object notation
    extraReducers: {
        // Handle the pending state
        [fetchPost.pending]: (state, action) => {
            state.loading = true;
        },
        // Handle the fullfilled state
        [fetchPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.postsList = action.payload;
        },
        // Handle the rejected state
        [fetchPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default postSlices.reducer;