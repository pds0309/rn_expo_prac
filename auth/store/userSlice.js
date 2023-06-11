import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../apis/authApi";

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

export const __getUser = createAsyncThunk(
  "getUser",
  async ({ email, password }, thunkAPI) => {
    try {
      await login({ email, password });
      return thunkAPI.fulfillWithValue({ email, password });
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: {
    [__getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice;
