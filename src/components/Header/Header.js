import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg"
import { AuthContext } from '../Context/UserContext';
import "./Header.css";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    
//     const logOutButton = () => {
//         logOut()
//             .then( () => {
//                 return alert("Log out Successfully.");
//             })
//             .catch(error => {
//                 console.error(error);
//         })
// }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu'>
                <Link to='/home'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/order'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                {
                    user?.uid ?
                    <button className='btn-logout' onClick={logOut}>Sign Out</button>
                        :
                        <>
                              <Link to='/login'>Login</Link> 
                              <Link to='/signup'>Sign Up</Link> 
                        </>
                      
              }
            </div>
        </nav>
    );
};

export default Header;