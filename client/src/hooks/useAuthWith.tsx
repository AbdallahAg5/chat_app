import { AuthFunction } from '../type';

const useAuthWith = (): AuthFunction => {
  const AuthWith: (authWith: string) => void = (authWith) => {
    const authWindow = window.open(
      `${import.meta.env.VITE_BASE_URL}/auth/${authWith}`,
      '_self'
    );

    const checkWindowClosed = setInterval(() => {
      if (authWindow && authWindow.closed) {
        clearInterval(checkWindowClosed);
      }
    }, 1000);
  };

  return AuthWith;
};

export default useAuthWith;
