import React, { useState } from 'react'

const App = () => {
  
  const [title, setTitle] = useState('');

  const formSubmit = (elem) => {
    elem.preventDefault();
    console.log("From has been submitted by", title);
    setTitle('');
  }
  return (
    <div>
      <h1>From</h1>
      <form onSubmit={(elem) => {
        formSubmit(elem)
      }}  >
        <input type="text" placeholder='Enter your name' value={title} onChange={(elem) => {
          setTitle(elem.target.value)
          console.log("User is typing!")
        }} />
        <input type="number" placeholder='Enter your age' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
