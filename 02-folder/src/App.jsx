import React from 'react';
import Card1 from "./component/card1.jsx";
import Card2 from "./component/card2.jsx"
import NavBar from './component/NavBar.jsx';
const App = () => {
  return (
    <>
    <div>
      <NavBar />
      <h3>Folder 2 is successfully created..!</h3>
      <Card1 />
      <Card2 />
    </div>
    </>
  )
}

export default App
