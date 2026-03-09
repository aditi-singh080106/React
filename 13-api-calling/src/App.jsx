import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  
  const [data, setData] = useState([]);

  // fetch method
  async function getDataFromFetch (){
    console.log("Data ara h...");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/23");
    const data = await response.json();

    console.log(data);
    setData(data);
  }

  // axios method
  const getDataFromAxios = async () => {
    console.log("nacho");
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/2");
    
    setData(response.data);
  }

  return (
    <div>
      <button onClick={getDataFromFetch}>Get Date from fetch api</button>
      <button onClick={getDataFromAxios}>Get Date from axios api</button>
      <div>
        {data.map(function() {
            return <h3>Hello</h3>
          })
        }
      </div>
    </div>
  )
}

export default App
