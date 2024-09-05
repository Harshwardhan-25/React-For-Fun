import React, { useState } from 'react'


const App = () => {
  const[color,setColor]=useState("white");

  
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center  bottom-16 inset-x-0 px-1 rounded">
        <div className="flex flex-wrap justify-center text-white shadow-2xl from-transparent px-3 py-2 gap-3 rounded-3xl">
          <button onClick={()=>{setColor("violet")}}   className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={()=>{setColor("indigo")}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"indigo"}}>Indigo</button>
          <button onClick={()=>{setColor("blue")}}  className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>{setColor("green")}}   className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>{setColor("yellow")}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>{setColor("orange")}}  className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>{setColor("red")}}  className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"red"}}>Red</button>
        </div>
      </div>
    </div>
  )
}

export default App