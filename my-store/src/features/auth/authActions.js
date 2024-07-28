import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginSuccess} from "./authSlice";
import axios from "axios";

const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { dispatch, rejectWithValue }) => {
    const { username, password } = userData;
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_DOMAIN}/login`, {
        username,
        password,
      });
      const user = response.data;
      dispatch(loginSuccess(user));
      return user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);



export { loginUser };
