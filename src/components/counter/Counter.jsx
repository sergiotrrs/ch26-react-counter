import React, { useState } from "react";
import { Button } from "../button/Button";


export const Counter = ( {initialValue=0, increment=1, decrement=1} ) => {
   
    const [counter, setcounter] = useState( initialValue );
 
    const handleIncrement = (event)=>{       
        setcounter( counter + increment )        
    }
 
    const handleDecrement = (event)=>{       
        setcounter( counter - decrement )        
    }
 
    const handleReset = (event)=>{       
        setcounter( initialValue ) ;       
    }


  return (
     <>
        <h1>Counter</h1>        
        <h2>{ counter }</h2>
        <Button onClick= { handleIncrement  } >+</Button>
        <Button onClick= { handleDecrement  } >-</Button>
        <Button onClick= { handleReset  } >Reset</Button>

     </>   
  );
};

/*
 Hacer un componente para el botòn.
 atributo: increment={5}
 atributo: increment={-5}
 atributo: onClick={ fncCallBack }
 Color text: blue;

*/