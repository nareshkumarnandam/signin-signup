import React from 'react'
import NavBar from './NavBar'
import "../App.css";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='mainPage'>
        <h1 className='homeheading'>Welcome to Firebase authentication..!!
        Sign in to proceed to the website..!!!</h1>
        <div className='homepagebtns'>
            <Link to='/signin'><button>Sign In</button></Link>
            <Link to='/signup'><button>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Home