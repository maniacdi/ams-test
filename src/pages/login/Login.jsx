import React, { useState } from 'react';
import './Login.scss';

// eslint-disable-next-line react/prop-types
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      handleLogin();
    } else {
      setEmailError('Please enter a valid email address');
    }
  };
  const isValidEmail = (email) => {
    // regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            placeholder='example@example.com'
          />{' '}
          {emailError && <div className='error'>{emailError}</div>}
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default Login;
