import React, { useState } from 'react'


const App = () => {
  const [show,setShow] = useState(true);

const toggle=()=>{
  setShow(!show);
};

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
    
    {
      show && <p className=" flex justify-center  text-center">Hello World !!</p>
    } 
    
    <button className=" flex justify-center bg-orange-400 rounded-lg border-2  px-4 py-2  " onClick={toggle}>{ show ? "hide":"show"}</button>  
    </div>
    
    
    </>
  )
}

export default App