import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("/register", async (data) => {
  const response = await axios.post("http://localhost:4000/api/register", data);
  return response.data.data;
});

export const loggedUser = createAsyncThunk("/login", async (data) => {
  const response = await axios.post("http://localhost:4000/api/login", data);
  return response.data;
});

export const getUser = createAsyncThunk("/get-user", async () => {
  const headers = {
    "authorization": `Bearer ${localStorage.getItem("token")}`,
  };
  const response = await axios.get("http://localhost:4000/api/user", {
    headers,
  });
  return response.data.user;
});

const initialState = {
  user: {},
  isloading: false,
  error: "",
  userLoggedIn: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isloading = false;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });

    builder
      .addCase(loggedUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(loggedUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        console.log(action.payload);
        localStorage.setItem("token", action.payload.token);
        state.isloading = false;
      })
      .addCase(loggedUser.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getUser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isloading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
