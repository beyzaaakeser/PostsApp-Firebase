import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) return;
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success('Password reset email sent successfully! Check your inbox.');
        })
        .catch((e) => {
          toast.error(
            'An error occurred while sending the password reset email.' +
              e.message
          );
        });
    },
    [email]
  );
  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl mb-8">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your e-mail"
          className="p-4 bg-gray-100 rounded-md "
        />
        <input
          value="Send reset password e-mail"
          type="submit"
          className="p-4 bg-green-200 rounded-md cursor-pointer mb-4 "
        />
        <Link to="/sign-in" className="text-blue-700 text-end">
          Back to sign in.
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
