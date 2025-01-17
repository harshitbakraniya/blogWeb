import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "./features/blogSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
    reducer :{
        blogReducer,
        userReducer
    }
})