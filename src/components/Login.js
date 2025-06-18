import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = React.useState({ username: '', password: '' });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/userinfo/authenticate', user);
            const token = res.data.token;
            if (token && token.split('.').length === 3) {
                localStorage.setItem('token', token);
                navigate('/dashboard');
            } else {
                console.error('Invalid token received:', token);
                alert('Authentication failed. Invalid token.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Invalid credentials');
        }

    }

    return (
        <div className="container mt-4 col-md-4">
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
                <input name="username" className="form-control mb-2" onChange={handleChange} placeholder="Username" />
                <input name="password" type="password" className="form-control mb-2" onChange={handleChange} placeholder="Password" />
                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    )
}

export default Login