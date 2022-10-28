import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../slices/counterSlices'; // We can use any name instead of postReducer

const store = configureStore({
    // Only required param here is reducer
    reducer:{
        post : postReducer
    }
});

export default store;