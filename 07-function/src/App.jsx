import React from 'react'

const App = () => {

  const btnClicked = () => {
    console.log("Button Clicked..!");
  }
  const mouseEntered = () => {
    console.log("Mouse Entered..!");

  }
  function userTyping(elem){
    console.log("User is typing now...");
    console.log("User typed => ", elem.target.value);
  }
  function pageScrolling(elem){
    console.log("Page is scrolling now...");
    console.log("Speed of scrolling : ", elem.deltaY);
    console.log(elem.deltaY);
    if(elem.deltaY>0){
      console.log("Scrolling downwards..!");
    }
    else{
      console.log("Scrolling upward...!");
    }
  }
  return (
    <div onWheel={(elem) =>{
      pageScrolling(elem)
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>

      {/* <h1>Hello, User</h1>
      <div onMouseMove={(elem) => {
        console.log("Nachooo............");
        console.log(elem);
        console.log(elem.clientX , elem.clientY);
      }}
       className='box'></div> */}
      {/* < button onClick={btnClicked} onMouseEnter={mouseEntered}>Chnage User</button>
      <button onClick={btnClicked}>Explore More..</button> */}

      {/* <input onClick={() => {
        console.log("Input pe click hua hai") } 
      } onChange={(elem) => {
          console.log("User is typing...");
          console.log(elem.target.value);
        }} type="text" placeholder='Enter Your Name Here..' /> */}

        
        {/* <input onChange={function(elem){
          userTyping(elem);
        }} type="text" placeholder='Enter yuor name here..!' /> */}
    </div>
  )
}

export default App
