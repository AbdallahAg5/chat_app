import { SubmitHandler, useForm } from 'react-hook-form';
import { EmailIcon, Password, User } from '../../assets/Icons';
import { EmailOption, NameOption, PasswordOption } from '../../data';
import { FormBodyType, Inputs, ValType } from '../../type';
import Btn from '../uikit/Btn';
import Input from '../uikit/Input';
import { RegisterThunk } from '../../redux/AuthAsync';
import { RootType } from '../../redux/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const RegisterBody: React.FC<FormBodyType> = ({ btnText }) => {
  const dispatch: ThunkDispatch<RootType, unknown, AnyAction> = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: ValType) => {
    dispatch(RegisterThunk(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-[2em] ">
      <Input
        type="text"
        placeholder="Name"
        style={`w-full pl-[2.5em]  border-2 border-customGray rounded-[.4em] ${
          !errors.name ? 'border-customGray' : 'border-2 border-error'
        } `}
        Icon={<User style="w-5 h-5 absolute top-3 left-2" />}
        altIcon="user__icon"
        name="name"
        register={register}
        registredOption={NameOption}
        error={errors.name}
        divStyle="w-full h-[60px]"
      />
      <Input
        type="email"
        placeholder="Email"
        style={`w-full pl-[2.5em]   border-2 border-customGray rounded-[.4em]  ${
          !errors.email ? 'border-customGray' : 'border-2 border-error'
        } `}
        Icon={<EmailIcon style="w-5 h-5 absolute top-3 left-2" />}
        altIcon="email__icon"
        name="email"
        register={register}
        registredOption={EmailOption}
        error={errors.email}
        divStyle="w-full h-[60px]"
      />
      <Input
        type="password"
        placeholder="Password"
        style={`w-full pl-[2.5em]  border-2 border-customGray rounded-[.4em] ${
          !errors.password ? 'border-customGray' : 'border-2 border-error'
        }`}
        Icon={<Password style="w-5 h-5 absolute top-3 left-2" />}
        altIcon="password__icon"
        name="password"
        register={register}
        registredOption={PasswordOption}
        error={errors.password}
        divStyle="w-full h-[60px]"
      />
      <Btn
        type="submit"
        text={btnText}
        style="bg-softBlue rounded-[.4em] w-full text-center py-[.3em] text-white mt-[1.8em] hover:bg-softBlue"
      />
    </form>
  );
};
