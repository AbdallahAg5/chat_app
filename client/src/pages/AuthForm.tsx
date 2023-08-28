import { ToastId, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormComp from '../components/auth/Form';
import { LoginBody } from '../components/auth/LoginBody';
import { RegisterBody } from '../components/auth/RegisterBody';
import Welcome from '../components/auth/Welcome';
import { RootType } from '../redux/store';
import { SEO } from '../service/Seo';

const Form: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const auth = useSelector((e: RootType) => e.auth);
  const toast = useToast();

  useEffect(() => {
    if (auth.message && auth.status == 'error') {
      const toastId: ToastId = toast({
        title: 'Auth message.',
        description: auth.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });

      return () => {
        toast.close(toastId);
      };
    }
    auth.message && auth.status == 'success' && navigate('/complete/profile');
  }, [auth.message, toast, auth.status, navigate]);

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
