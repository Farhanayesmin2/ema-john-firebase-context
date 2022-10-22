import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg"
import { AuthContext } from '../Context/UserContext';
import "./Header.css";
const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu'>
                <Link to='/home'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/order'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
                {user?.email && <span>{user.email}</span> }
              
            </div>
        </nav>
    );
};

export default Header;