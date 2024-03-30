import { signOut } from 'firebase/auth'
import { auth } from '../util/firebase'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
const navigate = useNavigate();
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
  return (<>
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 justify-between'>
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
' alt="logo" />
    </div>
    <br/><br/><br/><br/>
    { user && (
      <div className='flex z-30 my-15 justify-end'>
        
        <button className='bg-red-500 w-100'  onClick={handleSignOut}>sign out</button>
        <br/>
        <p>{user.displayName}</p>
        <img src={user?.photoURL} alt=""  className='w-100'/>
      </div>
      )}
      </>
      
  )
}

export default Header