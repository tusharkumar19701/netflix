import React, { useState } from 'react'
import Header from './Header';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className=''>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        </div>
        <form className='absolute w-3/12 bg-black p-12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700 rounded-lg' />}
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 text-gray-400'>{isSignInForm ? "New to Netflix?" : "Already Registered?"}<span className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In"} </span></p>
        </form>
    </div>
  )
}

export default Login;