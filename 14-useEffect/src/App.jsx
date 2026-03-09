import React, { useEffect, useState } from 'react'

const App = () => {
  // --------- wrong method
  // const random = () => {
  //   let num = Math.random();
  //   console.log(num);
  // }
    
  // random();
  // ----------------------
  const [num , setNum] = useState(0);
  const [num2,setNum2] = useState(1);

  useEffect(function(){
    console.log("UseEffect is running..!");
  },[num2]);

  const change = () => {
    setNum(num+1);
  }

  const change2 = () => {
    setNum2(num);
  }

  return (
    <div> 
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onClick={change} onDoubleClick={change2}>click</button>
      App
    </div>
  )
}

export default App
