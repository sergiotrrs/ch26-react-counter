import React, { useState } from "react";

export const Counter = () => {
   
    const [counter, setcounter] = useState( 99 );
 
    const handleIncrement = (event)=>{       
        setcounter( counter + 1 )        
    }
 
    const handleDecrement = (event)=>{       
        setcounter( counter - 1 )        
    }
 
    const handleReset = (event)=>{       
        setcounter( 0 )        
    }


  return (
     <>
        <h1>Counter</h1>        
        <h2>{ counter }</h2>
        <button onClick= { handleIncrement  } >+</button>
        <button onClick= { handleDecrement  } >-</button>
        <button onClick= { handleReset  } >Reset</button>

     </>   
  );
};
