// import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
// import { RootType } from '../redux/store';
// import { useEffect } from 'react';
// import { GetAuthUser } from '../redux/AuthAsync';
// import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();
const AuthContext = () => {
  // const dispatch: ThunkDispatch<RootType, unknown, AnyAction> = useDispatch();
  // const auth = useSelector((e: RootType) => e.auth);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (
  //     cookies.get('token') &&
  //     !auth.token &&
  //     auth.message != 'Unauthenticated.'
  //   ) {
  //     dispatch(GetAuthUser());
  //   } else if (
  //     auth.message === 'Unauthenticated.' &&
  //     auth.responseStatus === 401
  //   ) {
  //     navigate('/');
  //   }

  //   console.log('hiiiiiiiii');
  // }, [auth.message, auth.responseStatus]);

  return <Outlet />;
};

export default AuthContext;
