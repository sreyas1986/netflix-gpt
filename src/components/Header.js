import { signOut } from 'firebase/auth'
import { auth } from '../util/firebase'
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../util/userSlice';
import { LOGO_URL } from '../util/constant'


const Header = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const user = useSelector(store => store.user)
  const handleSignOut=() =>{
  
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  navigate("/error");
  // An error happened.
});
}
useEffect(()=>{
const unsubscribe =  onAuthStateChanged(auth, (user) => {

      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
          navigate("/");
        
      }
    });
    return() => unsubscribe();
    
},[])
  return (<>
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 justify-between'>
        <img className='w-44' src={LOGO_URL} alt="logo" />
    </div>
    
    { user && (
      <div className='absolute flex z-80 text-white' style={{"z-index":"1000px !importanat","margin-top":"50px","right":"2px"}}>
        
        <button className='text-white w-100 cursor-pointer my-10'  onClick={handleSignOut}>sign out</button>
        <p>{user.displayName}</p>
        <img src={user?.photoURL} alt=""  className='w-100'/>
        <br />
      </div>
      )}
      </>
      
  )
}

export default Header