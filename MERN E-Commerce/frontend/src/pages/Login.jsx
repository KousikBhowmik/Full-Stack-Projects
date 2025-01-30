import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl '>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800  ' />
        </div>
        {currentState === "Login"?'':<input className='w-full px-3 py-2 border border-gray-800  ' required placeholder='Name' type="text" />}
        <input className='w-full px-3 py-2 border border-gray-800  ' required placeholder='Email' type="email" />
        <input className='w-full px-3 py-2 border border-gray-800  ' required placeholder='Password' type="password" />
        <div className='w-full flex justify-between text-sm mt-[-8px] '>
          <p className='cursor-pointer'>Forgot your passowrd?</p>
          {
            currentState === "Login"? 
            <p className='cursor-pointer' onClick={() => setCurrentState("Sing Up")}>Create account</p>:
            <p className='cursor-pointer' onClick={() => setCurrentState("Login")}>Login here</p>
          }
        </div>
        <button onClick={onSubmitHandler} className='bg-black text-white font-light px-8 py-2 mt-4 ' >{currentState === "Login"? "Sing In": "Sing Up"}</button>
    </form>
  )
}

export default Login
