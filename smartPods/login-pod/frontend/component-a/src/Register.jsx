import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <div style={{ padding: 30 }}>
            <h2>Register</h2>
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
            <button onClick={handleRegister} style={{ marginLeft: 10 }}>Register</button>
        </div>
    )
}
