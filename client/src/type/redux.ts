export type InitialStateType = {
  userName: string;
  status: 'pending' | 'error' | 'success' | null;
  user: null | UserData;
  errorMessage: null | string;
  message: string;
  token: string;
};

export type UserData = {
  id: number;
  name: string;
  email: string;
};
