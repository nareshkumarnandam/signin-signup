import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <ul>
            <Link className='home' to="/"><li>Home</li></Link>
            <Link className='signin' to="/signin"><li>Sign In</li></Link>
            <Link className='signup' to='/signup'><li>Sign Up</li></Link>
        </ul>
    </nav>
  )
}

export default NavBar