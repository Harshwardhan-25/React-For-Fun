import React, { useState } from 'react';

const App = () => {
  // State to manage the main div's background color
  const [color, setColor] = useState('white');
   
  // Function to toggle the main div's background color between black and white
  const changeBg = () => {
    setColor((changeBgColor) => (changeBgColor === 'black' ? 'white' : 'black'));
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-2xl" style={{backgroundColor:color === 'black' ? 'white':'black'}}>
          <button
            onClick={changeBg}
            className=""
            // Conditional button styling based on the main div's background color
            style={{
              backgroundColor: color === 'black' ? 'white' : 'black',
              color: color === 'black' ? 'black' : 'white',
            }}
          >
            {color === 'black' ? 'Switch to White' : 'Switch to Black'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
