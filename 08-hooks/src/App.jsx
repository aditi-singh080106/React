import React, { useState } from 'react'

const App = () => {
  // let num = 20;
  // function changeNum(){
  //   console.log(num);
  //   num++;
  //   console.log(num)
  // }

  // useState
  const [num , setNum] = useState(30);
  const [uname, setUname] = useState("User");
  const [users, setUsers] = useState([10,20,30]);
  function changeNum(){
    setNum(num+2);
    setUname("Aditi Singh");
    setUsers([1,2,3]);
  }
  return (
    <div>
      <h1>Value of num is {num}</h1>
      <h2>User is : {uname} </h2>
      <h3>{users}</h3>
      <button onClick={changeNum}>Change Value</button>
    </div>
  )
}

export default App
