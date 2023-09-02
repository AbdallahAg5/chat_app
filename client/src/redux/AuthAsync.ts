import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosClient from '../api/api';
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

export const LoginThunk = createAsyncThunk(
  'login',
  async (data: ValType, thunkAPI) => {
    try {
      const response = await axiosClient.post('/auth/login', data);
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

/*  setting up the profile */

export const CompleProfileThunk = createAsyncThunk(
  'complete_profile',
  async (data: FormData, thunkAPI) => {
    try {
      const res = await axiosClient.post('/auth/complete-profile', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && axios.isAxiosError(err) && err?.response) {
        return thunkAPI.rejectWithValue(err?.response);
      }
    }
  }
);
