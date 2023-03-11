import React from "react";
import GoogleButton  from 'react-google-button';
import {auth} from '../firebase';
import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";

const style ={
    wrapper: `flex justify-center`,
}
const googleSignin =()=>{
    const provider= new GoogleAuthProvider()
    signInWithRedirect(auth, provider);
}
const Signin = ()=>{
    return (
        <button className={style.wrapper}>
        <GoogleButton onClick={googleSignin}/>
        </button>
    )
}
export default Signin