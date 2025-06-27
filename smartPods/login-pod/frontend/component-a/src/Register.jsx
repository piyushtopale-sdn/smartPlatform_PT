import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

export default function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:4000/api/register', { email, password });
            alert('Registered successfully');
            navigate('/')
        } catch (err) {
            alert('Registration Failed');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <input
                className="register-input"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            /><br /><br />
            <input
                className="register-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            /><br /><br />
            <button className="register-button" onClick={handleRegister}>Register</button>
            <Link to="/" className="login-link">
                Login
            </Link>
        </div>

    )
}
