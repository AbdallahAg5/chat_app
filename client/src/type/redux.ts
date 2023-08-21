export type InitialStateType = {
  userName: string;
  status: 'pending' | 'error' | 'success' | null;
  user: null | UserData;
  errorMessage: null | string;
};

export type UserData = {
  id: number;
  name: string;
  email: string;
};
