import { SubmitHandler, useForm } from 'react-hook-form';
import { EmailIcon, Password } from '../../assets/Icons';
import Btn from '../uikit/Btn';
import Input from '../uikit/Input';
import { EmailOption, PasswordOption } from '../../data';
import { FormBodyType, Inputs, ValType } from '../../type';
import { LoginThunk } from '../../redux/AuthAsync';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootType } from '../../redux/store';
import { useDispatch } from 'react-redux';

export const LoginBody: React.FC<FormBodyType> = ({ btnText }) => {
  const dispatch: ThunkDispatch<RootType, unknown, AnyAction> = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: ValType) => {
    dispatch(LoginThunk(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-[2em] ">
      <Input
        type="email"
        placeholder="Email"
        style={`w-full pl-[2.5em]  mt-[.9em] border-2  rounded-[.4em] ${
          !errors.email ? 'border-customGray' : 'border-2 border-error'
        }`}
        Icon={<EmailIcon style="w-5 h-5 absolute top-6 left-2" />}
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
        style={`w-full pl-[2.5em] mt-[.9em] border-2  rounded-[.4em] ${
          !errors.password ? 'border-customGray' : 'border-2 border-error'
        }`}
        Icon={<Password style="w-5 h-5 absolute top-6 left-2" />}
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
