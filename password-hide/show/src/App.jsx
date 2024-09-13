import React, { useState } from 'react'
import show from './assets/eye-regular.svg';
import hidden from './assets/eye-slash-regular.svg'
const App = () => {
  const [password,setPassword]=useState(true);

  const showPassword=()=>{
    setPassword(!password);
  }
  return (
   <>
    <div className=' flex items-center justify-center h-screen bg-black'>

      <input className=' w-96 bg-slate-600 text-white rounded-lg p-2'
       placeholder='Password' 
       type={password?'password':'text'} 
       />
      <div className='-ml-10 cursor-pointer' onClick={showPassword}>
        <img className='w-6 h-6' src={password ? show : hidden} alt="" />
      </div>
      
     
    </div>
   </>
  )
}

export default App