import React, { useState } from 'react'
import { useEffect } from 'react';
import  './App.css';
const App = () => {
  const [time,setTime]=useState(new Date());

  useEffect(()=>{
   setInterval(()=>setTime(new Date()),1000);
       
  })
  return (
    <div>
         {time.toLocaleTimeString()}
    </div>
  )
}

export default App