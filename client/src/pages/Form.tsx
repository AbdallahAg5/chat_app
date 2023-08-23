import React, { useState } from 'react';
import FormComp from '../components/auth/Form';
import { LoginBody } from '../components/auth/LoginBody';
import { RegisterBody } from '../components/auth/RegisterBody';
import Welcome from '../components/auth/Welcome';

const Form: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <div className="flex">
      <Welcome />
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
    </div>
  );
};

export default Form;
