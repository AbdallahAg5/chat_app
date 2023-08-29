import { ReactElement, ReactNode } from 'react';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';

export type Inputs = {
  name?: string | null;
  email: string | null;
  password: string | null;
};

export type ValType = {
  name?: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
};

export type BtnType = {
  text: string;
  style: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

export type SocialType = {
  altIcons: string;
  icon: string;
  className: string;
};

export type FormType = {
  Header: JSX.Element;
  spanText: 'Register' | 'Login';
  setLogin: (val: boolean) => void;
  login: boolean;
  body: ReactElement;
};

export type ThemePropsType = {
  setTheme: (theme: 'dark' | 'light') => void;
};

export type AuthFunction = (authWith: string) => void;

export type FormBodyType = {
  btnText: string;
};

export type FormIconPropType = {
  style: string;
};

export type CompleteFormType = {
  firstName: string;
  lastName: string;
  birthDate: string;
  userImg: string;
  phone: string;
};

export type CompleteValFormType = {
  userName: string;
  lastName: string;
  birthDate: string;
  userImg: string;
  phone: string;
};

export type SelectOption = {
  val: string;
  opt: string;
};

export interface SelectType extends GlobalInput {
  default?: string;
  style: string;
  name: string;
  labelStyle?: string;
  registredOption?: NonNullable<unknown>;
  error?: FieldError | undefined;
  divStyle?: string;
  label?: string;
  onChangeHandler?: () => void;
  defaultValue: string;
  options: SelectOption[];
}

export interface InputType extends GlobalInput {
  Icon?: ReactElement | null;
  placeholder?: string;
  type: 'email' | 'password' | 'text' | 'date' | 'file';
  style: string;
  altIcon?: string;
}

export interface GlobalInput {
  style: string;
  labelStyle?: string;
  label?: string;
  error?: FieldError | undefined;
  onChangeHandler?: () => void;
  name: string;
  registredOption?: NonNullable<unknown>;
  divStyle?: string;
  register: UseFormRegister<CompleteFormType> | UseFormRegister<Inputs>;
}

export type LocationType = {
  lat: number | null;
  lng: number | null;
};

export type StepPropsType = {
  register: UseFormRegister<CompleteFormType> | UseFormRegister<Inputs>;
  errors?: FieldErrors<CompleteFormType>;
};

export type StepContextType = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export interface ContextProviderProps {
  children: ReactNode;
}

export type SeoType = {
  title: string;
};
