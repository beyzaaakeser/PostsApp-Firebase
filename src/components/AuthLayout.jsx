import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import Loader from './Loader';

const AuthLayout = () => {
  const [user, isLoading] = useAuthState(auth);
  if (isLoading) {
    return <Loader />;
  }
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
