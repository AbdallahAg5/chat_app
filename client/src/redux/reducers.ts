import { AuthErrorType, InitialStateType, UserData } from '../type/redux';
import { PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import { setToken } from '../api/api';

const cookies = new Cookies();

type SuccessPayload = {
  message: string;
  status: 'error' | 'success';
  token: string;
  user: UserData;
};

export const GetAuthUserPending = (state: InitialStateType) => {
  state.status = 'pending';
};

export const GetAuthUserSuccess = (
  state: InitialStateType,
  { payload }: PayloadAction<SuccessPayload>
) => {
  state.status = 'success';
  state.user = payload.user;
  state.message = payload.message;
  state.token = payload.token;
  !cookies.get('token') &&
    cookies.set('token', payload.token, {
      path: '/',
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      sameSite: 'none',
      secure: true,
    });

  setToken(payload.token);
};

export const GetAuthUserRejected = (
  state: InitialStateType,
  { payload }: PayloadAction<AuthErrorType>
) => {
  const emailErr = payload?.data?.errors?.email;
  const passErr = payload?.data?.errors?.password;
  const message = payload?.data?.message;
  const responseStatus = payload.status;

  if (payload?.status == 422 && emailErr) {
    state.message = emailErr[0];
  } else if (responseStatus == 422 && passErr) {
    state.message = passErr[0];
  } else if (message && responseStatus == 401) {
    state.message = message;
  }

  state.responseStatus = responseStatus;
  state.status = 'error';
};
