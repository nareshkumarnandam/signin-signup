import React, {useState} from 'react';
import app from '../firebase';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
import NavBar from './NavBar';
import "../App.css";

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const auth = getAuth();
  
    async function handleSubmit() {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log(result);
    }
    return (
      <div>
        <NavBar />
        <div className='mainPage'>
        <h1>New user ? Sign up for a new account!!!</h1>
          <input
            type="email" placeholder='E-mail'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password" placeholder='Password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    );
}

export default SignUp