import React from 'react'

const App = () => {

  // localStorage.clear();
  // sessionStorage.clear();

  const user1 = {
    usernmae:"Aditi Singh",
    age:22,
    city:"Jabalpur"
  }
  localStorage.setItem('user1',JSON.stringify(user1));

  const oneUser = JSON.parse(localStorage.getItem('user1'));
  console.log(oneUser);

  localStorage.setItem('user','Aditi');
  localStorage.setItem('age',21);
  localStorage.setItem('profession','developer');

localStorage.removeItem('age');

  const user = localStorage.getItem('user');
  return (
    <div>
      App
    </div>
  )
}

export default App
