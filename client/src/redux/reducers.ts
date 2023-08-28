import { InitialStateType, UserData, laravelRequestType } from '../type/redux';
import { PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

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
  console.log(payload);
  state.status = 'success';
  state.user = payload.user;
  state.message = payload.message;
  state.token = payload.token;
  cookies.set('token', payload?.token, {
    path: '/',
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    sameSite: 'none',
    secure: true,
  });
};

export const GetAuthUserRejected = (
  state: InitialStateType,
  { payload }: PayloadAction<laravelRequestType>
) => {
  const emailErr = payload?.data?.errors?.email;
  const passErr = payload?.data?.errors?.password;

  if (payload?.status == 422 && emailErr) {
    state.message = emailErr[0];
  } else if (payload?.status == 422 && passErr) {
    state.message = passErr[0];
  }

  state.status = 'error';
};
