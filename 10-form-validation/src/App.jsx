import React from 'react'

const App = () => {
  const submitHandler = (elem) => {
    elem.preventDefault();
    console.log("Form has been submitted!")
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={(elem) => {
        submitHandler(elem)
      }}>
        <input type="text"  placeholder='Enter your name'/>
        <input type="text" placeholder='Enter your age'/>
        <input type="Submit" />
      </form>
    </div>
  )
}

export default App

