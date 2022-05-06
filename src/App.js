import React, { useState } from 'react';
// Helper
import { 
  validateFirstName, 
  validateLastName,
  validateEmail, 
  validatePassword } from './helper';
// Css
import './App.css';
// Backgrounds
import deskBack from './assets/bg-intro-desktop.png';
// import mobBack from './assets/bg-intro-mobile.png';
import error from './assets/icon-error.svg';

const App = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstError, setFirstError] = useState('');
  const [lastError, setLastError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstError('');
    setLastError('');
    setEmailError('');
    setPasswordError('');

    if(!validateFirstName(first)){
      setFirstError('* First name can not be empty.');
    }
    if(!validateLastName(last)){
      setLastError('* Last name can not be empty.');
    }
    if(!validateEmail(email)){
      setEmailError('* Invalid email address.');
    }
    if(!validatePassword(password)){
      setPasswordError('* Password can not be empty.');
    }
  }

  return (
    <div className='container'>
      <img className='background-img' src={deskBack} alt='background' />
      
      <div className='wrapper-left'>
        <h1>
          Learn to code by watching others
        </h1>
        <p>
          See how experienced developers slove problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.
        </p>
      </div>

      <div className='wrapper-right'>
        <div>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </div>
        <form onSubmit={handleSubmit}>

          <div>
            <input
              style={{ borderColor: firstError ? '#ff2a2a' : '#9b9b9b' }} 
              value={first} 
              onChange={({ target }) => setFirst(target.value)} 
              type='text' 
              placeholder='First Name' 
            />
            <img
              style={{ display: firstError ? 'inline' : 'none' }} 
              src={error} alt='logo'
            />
            {firstError && <p className='error-p'>{firstError}</p>}
          </div>

          <div>
            <input
              style={{ borderColor: lastError ? '#ff2a2a' : '#9b9b9b' }} 
              value={last} 
              onChange={({ target }) => setLast(target.value)} 
              type='text' 
              placeholder='Last Name' 
            />
            <img
              style={{ display: lastError ? 'inline' : 'none' }} 
              src={error} alt='logo'
            />
            {lastError && <p className='error-p'>{lastError}</p>}
          </div>

          <div>
            <input
              style={{ borderColor: emailError ? '#ff2a2a' : '#9b9b9b' }} 
              value={email} 
              onChange={({ target }) => setEmail(target.value)} 
              type='text' 
              placeholder='Email Address' 
            />
            <img
              style={{ display: emailError ? 'inline' : 'none' }} 
              src={error} alt='logo'
            />
            {emailError && <p className='error-p'>{emailError}</p>}
          </div>

          <div>
            <input
              style={{ borderColor: passwordError ? '#ff2a2a' : '#9b9b9b' }} 
              value={password} 
              onChange={({ target }) => setPassword(target.value)} 
              type='password' 
              placeholder='Password' 
            />
            <img
              style={{ display: passwordError ? 'inline' : 'none' }} 
              src={error} alt='logo'
            />
            {passwordError && <p className='error-p'>{passwordError}</p>}
          </div>

          <button type='submit'>claim your free trail</button>
          <p>By clicking the button, you agreeing to our <span>Terms and Services</span></p>
        </form>
      </div>
    </div>
  );
}

export default App;