import { InitialStateType } from '../type/redux';
import { PayloadAction } from '@reduxjs/toolkit';

export const GetAuthUserPending = (state: InitialStateType) => {
  state.status = 'pending';
};

export const GetAuthUserSuccess = (
  state: InitialStateType,
  { payload }: PayloadAction<any>
) => {
  state.status = 'success';
  state.user = payload.user;
  state.message = payload.message;
};

export const GetAuthUserRejected = (
  state: InitialStateType,
  { payload }: PayloadAction<string>
) => {
  state.errorMessage = payload;
  state.status = 'error';
};
