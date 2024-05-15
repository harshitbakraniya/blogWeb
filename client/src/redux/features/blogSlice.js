import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBlogs = createAsyncThunk("/get-blogs", async () => {
  const response = await axios.get("http://localhost:4000/api/blogs");
  return response.data.data;
});

export const addBlog = createAsyncThunk("/add-blogs", async (data) => {
  const response = await axios.post("http://localhost:4000/api/blogs", data);
  return response.data.data;
});

const initialState = {
  blogs: [],
  isBlogLoading: false,
  blogError: "",
  blog: {},
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlog: (state) => {
      state.blog = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.isBlogLoading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.isBlogLoading = false;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isBlogLoading = false;
        state.blogError = action.payload;
      });

    builder
      .addCase(addBlog.pending, (state) => {
        state.isBlogLoading = true;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.blog = action.payload;
        state.isBlogLoading = false;
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.isBlogLoading = false;
        state.blogError = action.payload;
      });
  },
});

export const {setBlog} = blogSlice.actions;
export default blogSlice.reducer;
