import { addDoc, collection } from 'firebase/firestore';
import React, { useCallback, useState } from 'react';
import { db } from '../firebase/firebase';

const ref = collection(db, 'posts');

const AddPost = () => {
  const [body, setBody] = useState('');
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addDoc(ref, { body: body });
      setBody('');
    },
    [body]
  );
  return (
    <div className="mt-8 ">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="What are you working on?"
          className="bg-gray-100 p-4 rounded-t-md"
        />

        <input
          type="submit"
          value="Send"
          className="bg-green-600 p-4 rounded-b-md cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddPost;
