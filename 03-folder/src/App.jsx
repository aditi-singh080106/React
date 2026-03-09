import React from 'react'
import Card from "./component/Card.jsx"

const App = () => {
  return (
    <>      
      <div className='parent'>
        <Card user="Aditi Singh" age={22} img="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card user="Jeon Jungkook" age={28} img="https://filmfare.wwmindia.com/content/2025/jul/jungkook11752844836.jpg" />
        <Card user="Astha Gupta" age={20} img="https://images.unsplash.com/photo-1514489024785-d5ba8dfb2198?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWVzdGhldGljJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" />
      </div>        
    </>
  )
}

export default App
