export type InitialStateType = {
  status: 'pending' | 'error' | 'success' | null;
  user: null | UserData;
  message: null | string | undefined;
  token: null | string;
};

export type UserData = {
  id: number;
  name: string;
  email: string;
};

export type laravelRequestType = {
  status: number;
  data?: { errors: { email?: string[]; password: string[] } };
};
