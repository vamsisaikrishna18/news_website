// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => navigate('/'))
      .catch(error => alert(error.message));
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
