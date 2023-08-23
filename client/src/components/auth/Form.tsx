import React from 'react';
import { data } from '../../data';
import useAuthWith from '../../hooks/useAuthWith';
import { FormType } from '../../type';
import { Header as HeaderComp } from '../Header';
import Socials from './Socials';

const FormComp: React.FC<FormType> = ({
  Header,
  setLogin,
  spanText,
  login,
  body,
}) => {
  const AuthWith = useAuthWith();

  const AuthWithHandler = (authMethod: string) => {
    AuthWith(authMethod);
  };

  return (
    <div className="grid place-content-center  w-full lg:w-[50%] h-screen  ">
      <div className="w-[473.831px] border-2 border-customGray h-auto py-[2.5em] px-[3em] rounded-[1.2em] relative">
        <HeaderComp />
        <p className=" text-2xl underline-offset-2 underline pt-7 text-textColor">
          {' '}
          {Header}
        </p>
        {body}
        <p className="text-center text-customGray pb-[1.1em]">
          or continue with these social profile
        </p>
        <Socials data={data} AuthWith={AuthWithHandler} />
        <p className="text-center text-customGray pt-[1.1em]">
          {spanText == 'Login'
            ? 'Adready a member? '
            : "You don't have an account? "}
          <span
            className="text-softBlue  cursor-pointer"
            onClick={() => setLogin(!login)}
          >
            {spanText}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FormComp;
