import { ToastId, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootType } from '../redux/store';

function Redirecting() {
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
    } else {
      if (
        auth.message &&
        auth.status == 'success' &&
        auth?.user?.profileCompleted
      ) {
        navigate('/chat');
      } else if (
        auth.message &&
        auth.status == 'success' &&
        !auth?.user?.profileCompleted
      ) {
        navigate('/complete/profile');
      }
    }
  }, [
    auth.message,
    toast,
    auth.status,
    navigate,
    auth?.user?.profileCompleted,
  ]);

  return null;
}

export default Redirecting;
