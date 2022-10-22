import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='login-title'>Sign Up</h1>
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
                
                <input className='btn-login' type="submit" value="SignUp" />
            </form>
            <p>Already Have an Account? <Link to='/login'>Log In </Link> </p>
        </div>
    );
};

export default SignUp;