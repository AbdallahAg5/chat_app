import React, { useState } from 'react';
import FormComp from '../components/Form';
import { LoginBody } from '../components/LoginBody';
import { RegisterBody } from '../components/RegisterBody';

const Form: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <>
      {login ? (
        <FormComp
          setLogin={setLogin}
          login={login}
          Header={
            <span className="mt-[1.5em] font-semibold ">Login Form </span>
          }
          spanText="Register"
          body={<LoginBody btnText="Login" />}
        />
      ) : (
        <FormComp
          spanText="Login"
          setLogin={setLogin}
          login={login}
          Header={
            <span className="mt-[1.5em] font-semibold ">Register Form</span>
          }
          body={<RegisterBody btnText="Register" />}
        />
      )}
    </>
  );
};

export default Form;
