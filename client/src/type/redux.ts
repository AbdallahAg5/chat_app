export type InitialStateType = {
  status: 'pending' | 'error' | 'success' | null;
  user: null | UserData;
  message: null | string | undefined;
  token: null | string;
  responseStatus?: number;
};

export type UserData = {
  id: number;
  name: string;
  email: string;
  profileCompleted?: boolean | null;
};

export type AuthErrorType = {
  status: number;
  data?: {
    errors?: { email?: string[]; password: string[] };
    message?: string;
  };
};
