import React, { useCallback } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const Home = () => {
  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
