import React from 'react'

import { useState } from 'react';

function App() {

const [color, setColor] = useState('Red');

const changeColor = ()=>{
setColor('Blue')

}

  return (
    <>
      <div className="App"><h1>My favourite color is {color}!</h1></div>
      <button onClick={changeColor}>Blue</button>
      
    </>
  )
}

export default App
