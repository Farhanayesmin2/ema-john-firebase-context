import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Login.css';


const Login = () => {

  //  const [user, setuser] = useState(false);
    const { logIn } = useContext(AuthContext);
    
    const handleLogIn = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
     //   setuser(true)
     
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
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
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>
                         Password
                    </label>
                    <input type="password" name="password" id="" required />
                </div>
                
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p>New to ema john? <Link to='/signup'>Create a New Account</Link> </p>
            
        </div>
    );
};

export default Login;