import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// import { increment } from 'shell/store'; // 👈 optional: reuse host's actions
import './Login.css';

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:4005/service-a/api/login', { email, password });
      alert('Login Success! Token: ' + res.data.token);
      navigate('/dashboard')
    } catch (err) {
      alert('Login Failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        className="login-input"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br /><br />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br /><br />
      <button className="login-button" onClick={login}>Login</button>
      <Link to="/register" className="register-link">
        Register
      </Link>
      {/* <p className="count-section">
        Count in component-a : {count}
        <br />
        <button onClick={() => dispatch(increment())}>Increment Store Count</button>
        <Link to="/host" className="register-link">
          Host
        </Link>
      </p> */}
    </div>
  );
}
