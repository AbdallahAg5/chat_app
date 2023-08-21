import { InitialStateType } from '../type/redux';
import { createSlice } from '@reduxjs/toolkit';
import AuthThunk, { GetAuthUser } from './AuthAsync';
import {
  AuthPending,
  AuthRejected,
  AuthSuccess,
  GetAuthUserPending,
  GetAuthUserRejected,
  GetAuthUserSuccess,
} from './reducers';

const InitialState: InitialStateType = {
  userName: 'Abdallah Ag',
  user: null,
  status: null,
  errorMessage: null,
};

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AuthThunk.pending, AuthPending)
      .addCase(AuthThunk.fulfilled, AuthSuccess)
      .addCase(AuthThunk.rejected, AuthRejected)
      .addCase(GetAuthUser.pending, GetAuthUserPending)
      .addCase(GetAuthUser.fulfilled, GetAuthUserSuccess)
      .addCase(GetAuthUser.rejected, GetAuthUserRejected);
  },
});

// export const {} = AppSlice.actions;
export default AuthSlice.reducer;
