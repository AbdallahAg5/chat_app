import React, { useState } from 'react';
import FormComp from '../components/auth/Form';
import { LoginBody } from '../components/auth/LoginBody';
import { RegisterBody } from '../components/auth/RegisterBody';
import Welcome from '../components/auth/Welcome';
import { SEO } from '../service/Seo';
import Redirecting from '../service/Redirecting';
import { RootType } from '../redux/store';
import { useSelector } from 'react-redux';

const Form: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);
  const auth = useSelector((e: RootType) => e.auth);

  return (
    <>
      {auth.message && <Redirecting />}
      <SEO title="Chat App" />
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
    </>
  );
};

export default Form;
