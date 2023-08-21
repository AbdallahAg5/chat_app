import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../api/api';
import axios from 'axios';

const AuthThunk = createAsyncThunk('auth', async () => {
  try {
    const response = await axiosClient.get('/auth/google');
    if (response) {
      window.open('', '_blank', 'width=600,height=600');
    }
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to auth.');
  }
});

export default AuthThunk;

export const GetAuthUser = createAsyncThunk('getuser', async (_, thunkAPI) => {
  try {
    const res = await axiosClient.get('/user');
    return res.data.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && axios.isAxiosError(err)) {
      if (err?.response?.status == 401) {
        return thunkAPI.rejectWithValue(err?.response?.statusText);
      }
    }
  }
});
