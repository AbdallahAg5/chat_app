import { InitialStateType } from '../type/redux';
import { createSlice } from '@reduxjs/toolkit';
import AuthThunk, { GetAuthUser, RegisterThunk } from './AuthAsync';
import {
  GetAuthUserPending,
  GetAuthUserRejected,
  GetAuthUserSuccess,
} from './reducers';

const InitialState: InitialStateType = {
  user: null,
  status: null,
  message: null,
  token: null,
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AuthThunk.pending, GetAuthUserPending)
      .addCase(AuthThunk.fulfilled, GetAuthUserSuccess)
      .addCase(AuthThunk.rejected, GetAuthUserRejected)
      .addCase(GetAuthUser.pending, GetAuthUserPending)
      .addCase(GetAuthUser.fulfilled, GetAuthUserSuccess)
      .addCase(GetAuthUser.rejected, GetAuthUserRejected)
      .addCase(RegisterThunk.pending, GetAuthUserPending)
      .addCase(RegisterThunk.fulfilled, GetAuthUserSuccess)
      .addCase(RegisterThunk.rejected, GetAuthUserRejected);
  },
});

// export const {} = AppSlice.actions;
export default AuthSlice.reducer;
