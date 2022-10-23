import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import "./SignUp.css";


const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState(null);

    const handleSignUp = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
            console.error(error)
        })
        
        
        console.log(email, password, confirm);
        if (password.length < 6) {
            setError("Password Should be 6 character or more.")
        }
        if (password !== confirm) {
            setError("Your Password did not match.");
            return;
        }
}

    return (
        <div className='form-container'>
            <h1 className='login-title'>Sign Up</h1>
            <form  onSubmit={handleSignUp} >
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
                <div className='form-control'>
                    <label htmlFor='confirm'>
                        Confirm Password
                    </label>
                    <input type="password" name="confirm"  required />
                </div>
              
                <input className='btn-login' type="submit" value="SignUp" />
            </form>
            <p>Already Have an Account? <Link to='/login'>Log In </Link> </p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;