import React from "react";

export const Counter = () => {
    let counter = 100;

    const handleIncrement = (event)=>{
        console.log(event);
        console.log(++counter);
    }

  return (
     <>
        <h1>Counter</h1>        
        <h2>{ counter }</h2>
        <button onClick= { handleIncrement  } >+</button>
        <button onClick= { ( event )=>console.log(event) } >-</button>
        <button>Reset</button>

     </>   
  );
};
