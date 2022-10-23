import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Login.css';


const Login = () => {

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogIn = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
     
     
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from,{replace: true})
            })
            .catch(error => {
                console.error(error);
        })

    }

    return (
        <div className='form-container'>
            <h1 className='login-title'>Login</h1>
            <form onSubmit={handleLogIn} >
                <div className='form-control'>
                    <label htmlFor='email'>
                         Email
                    </label>
                    <input type="email" name="email"  required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>
                         Password
                    </label>
                    <input type="password" name="password"  required />
                </div>
                
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p>New to ema john? <Link to='/signup'>Create a New Account</Link> </p>
            
        </div>
    );
};

export default Login;