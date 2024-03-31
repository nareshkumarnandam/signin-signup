import React, {useState} from 'react';
import app from '../firebase';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
import NavBar from './NavBar';
import "../App.css";

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const auth = getAuth();
  
    async function handleSubmit() {
      try{
        const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      }catch{
        alert("Account does not exist")
      }
    }
  
    return (
      <div>
        <NavBar />
        <div className='mainPage'>
            <h1>Already have an account ? Sign in!!!</h1>
          <input
            type="email" placeholder="E-mail"
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
            Sign In
          </button>
        </div>
      </div>
    );
}

export default SignIn