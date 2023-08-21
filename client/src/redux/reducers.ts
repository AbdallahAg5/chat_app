import { InitialStateType } from '../type/redux';
import { PayloadAction } from '@reduxjs/toolkit';

export const AuthPending = (state: InitialStateType) => {
  state.status = 'pending';
};

export const AuthSuccess = (
  state: InitialStateType,
  { payload }: PayloadAction<any>
) => {
  state.status = 'success';
};

export const AuthRejected = (
  state: InitialStateType,
  { payload }: PayloadAction<any>
) => {
  state.status = 'error';
};

export const GetAuthUserPending = (state: InitialStateType) => {
  state.status = 'pending';
};

export const GetAuthUserSuccess = (
  state: InitialStateType,
  { payload }: PayloadAction<any>
) => {
  state.status = 'success';
  state.user = payload;
};

export const GetAuthUserRejected = (
  state: InitialStateType,
  { payload }: PayloadAction<string>
) => {
  state.errorMessage = payload;
  state.status = 'error';
};
