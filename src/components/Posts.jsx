import { collection } from 'firebase/firestore';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../firebase/firebase';
import Loader from './Loader';

const ref = collection(db, 'posts');

const Posts = () => {
  const [data, isLoading] = useCollectionData(ref);
  if (isLoading) return <Loader />;

  console.log(data);
  return (
    <div className='flex flex-col mt-8 gap-4'>
      {data.map((post, index) => (
        <div key={index} className='p-4 rounded-md bg-gray-100 '>
            <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
