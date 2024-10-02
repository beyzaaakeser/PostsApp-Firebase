import React, { useCallback, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { toast } from 'react-toastify';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) return;
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success('You have signed up successfully!');
        })
        .catch((e) => {
          toast.error('An error occurred while trying to sign up.' + e.message);
        });
    },
    [email, password]
  );

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl mb-8">Create new account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your e-mail"
          className="p-4 bg-gray-100 rounded-md "
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="p-4 bg-gray-100 rounded-md "
        />
        <input
          type="submit"
          className="p-4 bg-green-200 rounded-md cursor-pointer"
        />
      </form>
    </div>
  );
};

export default SignUp;
