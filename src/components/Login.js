import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSigninForm,setIsSigninForm] = useState(true);
    const ToggleSignInForm=()=>{
        setIsSigninForm(!isSigninForm);

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
    <form className=''>
        <h1 className='text-white font-bold'>{isSigninForm?"Sign In" : "Sign Up"}</h1>
        { !isSigninForm &&(
                <input type='text' placeholder='User Name' className="bg-gray-700 w-full p-2 m-2 rounded-md text-white" />
        )
        }
        

        <input type='text' placeholder='Email Address' className="bg-gray-700 w-full p-2 m-2 rounded-md text-white" />
        <input type='password' placeholder='Password' className="bg-gray-700 w-full p-2 m-2 rounded text-white" />
        <button className='w-full p-2 m-4 bg-red-600 text-white rounded-md'> {isSigninForm?"Sign In" : "Sign Up"}</button>
        <p className='text-white cursor-pointer' onClick={ToggleSignInForm} > { isSigninForm? "New to Netflix?Sign Up" : "Already a member Sign in Now"} </p>
    </form>
    </div>
    </div>
  )
}

export default Login