import React, { useCallback } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../components/Loader';
import Posts from '../components/Posts';
import AddPost from '../components/AddPost';
const Home = () => {
  const [user, isLoading] = useAuthState(auth);
  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-md py-12 mx-auto">
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className='text-xl'>{user.displayName}</h1>
          <p className='text-lg text-gray-600'>{user.email}</p>
        </div>

        <button onClick={handleSignOut} 
        className="px-4 py-2 bg-green-400 rounded-md cursor-pointer ">
          Sign Out
        </button>
      </div>
      <AddPost/>
      <Posts/>
    </div>
  );
};

export default Home;
