import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from 'shell/store'; // 👈 optional: reuse host's actions

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/login', { email, password });
      alert('Login Success! Token: ' + res.data.token);
      navigate('/dashboard')
    } catch (err) {
      alert('Login Failed');
    }
  };

  return (
    <>
      <div style={{ padding: 30 }}>
        <h2>Login</h2>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
        <button onClick={login}>Login</button>
        <Link to="/register" style={{ marginLeft: 10, textDecoration: 'none', color: 'blue' }}>
          Register
        </Link>
         <p>
          Count in remote: {count}
          <button onClick={() => dispatch(increment())}>Increment Store Count</button>
          <button onClick={() => navigate('/host')}>Navigate to host route</button>
        </p>
        </div>
    </>
  );
}
