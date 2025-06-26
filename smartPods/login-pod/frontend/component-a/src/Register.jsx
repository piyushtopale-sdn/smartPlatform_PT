import React from 'react';
import axios from 'axios';

export default function Register({ onSuccess }) {
    const handleRegister = async () => {
        await axios.post('http://localhost:4000/api/register', {
            username: 'newuser', password: 'newpass'
        });
        onSuccess();
    };
    return <button onClick={handleRegister}>Register</button>;
}
