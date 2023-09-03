// import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
// import { GetAuthUser } from '../redux/AuthAsync';
// import { RootType } from '../redux/store';
// import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import React from 'react';

const AuthContext = () => {
  // const dispatch: ThunkDispatch<RootType, unknown, AnyAction> = useDispatch();
  // const auth = useSelector((e: RootType) => e.auth);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(GetAuthUser());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (auth.message === 'Unauthenticated.' && auth.responseStatus === 401) {
  //     document.cookie =
  //       'token' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  //     navigate('/');
  //   }
  // }, [auth.message, auth.responseStatus, navigate]);

  return <Outlet />;
};

const MemoizedAuthContext = React.memo(AuthContext);
export default MemoizedAuthContext;
