import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp6NUA9POXjVMJkzxClfJvsnqp_FAKXxU",
  authDomain: "project-499352111633",
  projectId: "adv102-1d152",
  storageBucket: "adv102-1d152.appspot.com",
  messagingSenderId: "499352111633",
  appId: "1:499352111633:web:48ec828873f1f0d85affb0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Registration successful, you can redirect or do something else here
      console.log('User registered:', userCredential.user);
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RegistrationForm;
