import React, { useState, useEffect } from 'react';
import FormComp from '../components/auth/Form';
import { LoginBody } from '../components/auth/LoginBody';
import { RegisterBody } from '../components/auth/RegisterBody';
import Welcome from '../components/auth/Welcome';
import { SEO } from '../service/Seo';
import { useSelector } from 'react-redux';
import { RootType } from '../redux/store';
import { ToastId, useToast } from '@chakra-ui/react';

const Form: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);
  const auth = useSelector((e: RootType) => e.auth);
  const toast = useToast();

  useEffect(() => {
    if (auth.message && !auth.errorMessage) {
      const toastId: ToastId = toast({
        title: 'Auth message.',
        description: auth.message,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });

      return () => {
        toast.close(toastId);
      };
    }
  }, [auth.message, toast]);

  return (
    <>
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
