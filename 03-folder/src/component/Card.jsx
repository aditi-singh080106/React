import React from 'react'

const Card = (props) => {
  console.log(props);
  return (
    <>
    <div className="parent">
        <div className='card'>        
        <img src={props.img} alt="" />
        <h2>{props.user}</h2>     
        <h3>Age : {props.age}</h3>   
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
        </div>
      </div>
    </>
  )
}

export default Card
