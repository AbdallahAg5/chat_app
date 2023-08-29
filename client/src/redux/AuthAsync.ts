import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../api/api';
import axios from 'axios';
import { ValType } from '../type';

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

export const RegisterThunk = createAsyncThunk(
  'register',
  async (data: ValType, thunkAPI) => {
    try {
      const response = await axiosClient.post('/auth/register', data);
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && axios.isAxiosError(err) && err?.response) {
        return thunkAPI.rejectWithValue(err.response);
      }
    }
  }
);

export const GetAuthUser = createAsyncThunk('getuser', async (_, thunkAPI) => {
  try {
    const res = await axiosClient.get('/auth/profile');
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && axios.isAxiosError(err) && err?.response) {
      return thunkAPI.rejectWithValue(err?.response);
    }
  }
});
