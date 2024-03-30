import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidate } from '../util/CheckValidate';
import { auth } from "../util/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../util/userSlice';



const Login = () => {
    const [isSigninForm,setIsSigninForm] = useState(true);
    const [errorMessage,setErrorMessage]= useState(null);

    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate =  useNavigate();
    const ToggleSignInForm=()=>{
        setIsSigninForm(!isSigninForm);

    }
    const SubmitSignIn=()=>{

        console.log(email.current.value+password.current.value);
     const validationResult = CheckValidate(email.current.value,password.current.value);
        setErrorMessage(validationResult);
        if(validationResult) return;
        if(!isSigninForm){
            //Sign up Method
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // update profile...
                updateProfile(auth.currentUser, {
                    displayName:  name.current.value , photoURL: "https://avatars.githubusercontent.com/u/4228166?v=4"
                  }).then(() => {
                    // Profile updated!
                    const { uid, email, displayName} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL: "https://avatars.githubusercontent.com/u/4228166?v=4"}));
                    navigate("/browse");
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                // ..
                });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorMessage);
            });

        }
        


    }
  return (
   <div>
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg
"  alt="bodyimage"/>
        </div>
        <div className='w-3/12  p-12  left-96   bg-black my-36 
        absolute rounded z-10 bg-opacity-80'>
    <form className='' onSubmit={(e)=> e.preventDefault()}>
        <h1 className='text-white font-bold'>{isSigninForm?"Sign In" : "Sign Up"}</h1>
        { !isSigninForm &&(
                <input type='text' ref={name} placeholder='First  Name' className="bg-gray-700 w-full p-2 m-2 rounded-md text-white" />
        )
        }
        

        <input type='text' ref={email} placeholder='Email Address' className="bg-gray-700 w-full p-2 m-2 rounded-md text-white" />
        <input type='password' ref={password} placeholder='Password' className="bg-gray-700 w-full p-2 m-2 rounded text-white" />
        
        <p className='text-red-700  font-bold p-4'>{errorMessage}</p>
        <button className='w-full p-2 m-4 bg-red-600 text-white rounded-md' onClick={SubmitSignIn}> {isSigninForm?"Sign In" : "Sign Up"}</button>
       
        <p className='text-white cursor-pointer' onClick={ToggleSignInForm} > { isSigninForm? "New to Netflix?Sign Up" : "Already a member Sign in Now"} </p>
        
    </form>
    </div>
    </div>
  )
}

export default Login