import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from 'shell/store'; // 👈 optional: reuse host's actions

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/login', { email, password });
      alert('Login Success! Token: ' + res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login Failed');
    }
  };

  const register = async () => {
    try {
      await axios.post('http://localhost:4000/api/register', { email, password });
      alert('Registered successfully');
    } catch (err) {
      alert('Registration Failed');
    }
  };

  return (
    <>
      <div>
        <h2>Login/Register</h2>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
        <button onClick={login}>Login</button>
        <button onClick={register} style={{ marginLeft: 10 }}>Register</button>
        <p>
          Count in remote: {count}
          <button onClick={() => dispatch(increment())}>Increment Store Count</button>
          <button onClick={() => navigate('/host')}>Navigate to host route</button>
        </p>
      </div>
    </>
  );
}
