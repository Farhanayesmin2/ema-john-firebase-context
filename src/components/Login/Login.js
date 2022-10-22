import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='login-title'>Login</h1>
            <form>
                <div className='form-control'>
                    <label htmlFor='email'>
                         Email
                    </label>
                    <input type="email" name="name" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>
                         Password
                    </label>
                    <input type="password" name="password" id="" required />
                </div>
                
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p>New to ema john? <Link to='/signup'>Create a New Account</Link>  </p>
        </div>
    );
};

export default Login;