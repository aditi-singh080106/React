import React, { useEffect, useState } from 'react'

const App = () => {
  const [a,setA] = useState(1);
  const [b,setB] = useState(0);

  function changeA(){
    setA(a+2);
  }

  function changeB(){
    setB(b+1);
  }

  useEffect(function(){
    console.log("Value of 'a' has been changed now..!");
  },[a]);

  useEffect(function(){
    console.log("Value of 'b' has been changeed now..!");
  },[b]);
  return (
    <div>
      <h1>Value of a : {a}</h1>
      <h1>Value of b : {b}</h1>      
      <button onClick={changeA}>change-a</button>
      <button onClick={changeB}>change-b</button>
    </div>
  )
}

export default App
