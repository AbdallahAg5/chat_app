import facebook from '../assets/facebook.png';
import github from '../assets/github.png';
import google from '../assets/google.png';
import twitter from '../assets/twitter.png';
import { SocialType } from '../type';

export const data: SocialType[] = [
  {
    icon: github,
    altIcons: 'github',
    className: 'w-10 h-10',
  },
  {
    icon: facebook,
    altIcons: 'facebook',
    className: 'w-9 h-9',
  },
  {
    icon: google,
    altIcons: 'google',
    className: 'w-8 h-8',
  },
  {
    icon: twitter,
    altIcons: 'twitter',
    className: 'w-8 h-8',
  },
];

export const EmailOption = {
  required: 'Email is required',
  pattern: {
    value: /^[a-zA-Z0-9]([a-zA-Z0-9]+)?@$/,
    message: 'Email must be correct',
  },
};

export const PasswordOption = {
  required: 'Password is required',
  pattern: {
    value: /^.{8,}$/,
    message: 'Password must have 8 char',
  },
};

export const UserOption = {
  required: 'Name is required',
};

export const NameOption = {
  required: 'Name is required',
};
export const FieldOption = {
  required: 'Field is required',
};

export const DataOption = {
  required: 'Data is required',
};

export const FormSteps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
];
