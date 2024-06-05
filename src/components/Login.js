// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => navigate('/'))
      .catch(error => alert(error.message));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default Login;
