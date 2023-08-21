import React from 'react';
import { Header as HeaderComp } from '../components/Header';
import { data } from '../data';
import useAuthWith from '../hooks/useAuthWith';
import { FormType } from '../type';
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
    <div className="grid place-content-center  w-full h-screen  ">
      <div className="w-[473.831px] border-2 border-gray h-auto py-[2.5em] px-[3em] rounded-[1.2em] relative">
        <HeaderComp />
        <p className=" text-2xl underline-offset-2 underline pt-7 text-textColor">
          {' '}
          {Header}
        </p>
        {body}
        <p className="text-center text-gray pb-[1.1em]">
          or continue with these social profile
        </p>
        <Socials data={data} AuthWith={AuthWithHandler} />
        <p className="text-center text-gray pt-[1.1em]">
          Adready a member?{' '}
          <span
            className="text-blue  cursor-pointer"
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
