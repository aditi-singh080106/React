import React, { useState } from 'react'

const App = () => {
  // const [num,setNum] = useState({user:"Aditi Singh",age:21});
  // const btnClicked = () => {
  //   let newnum = {...num};
  //   newnum.age = 28;
  //   newnum.user = "Jeon Jungkook";
  //   console.log(num);
  //   setNum(newnum);
  // }

  // const [num,setNum] = useState([1,2,3,4,5]);
  // const change = () => {
  //   const newnum = [...num];
  //   newnum.push(6);
  //   setNum(newnum);
  // }

  const [num,setNum] = useState({user:"Aditi Singh",age:21});
  const change = () => {
    setNum(prev => ({...prev,age:22}))
  }
  //batch update
  const [val,setVal] = useState(10);
  function change1(){
    setVal(prev => (prev+1));
    setVal(prev => (prev+1));
    setVal(prev => (prev+1));
  }
  return (
    <div>
      <h1>User Name : {num.user}</h1>
      <h1>User's Age : {num.age}</h1>
      {/* <h1>{num}</h1> */}
      <button onClick={change }>click</button>
      <h3>{val}</h3>
      <button onClick={change1}>Batch update</button>
    </div>
  )
}

export default App
