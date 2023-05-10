import React, { useState } from "react";
import { Button } from "../button/Button";

export const Counter = ( {initialValue=0, increment=1, decrement=1} ) => {
   
    const [counter, setcounter] = useState( initialValue );

  return (
     <>
        <h1>Counter</h1>        
        <h2>{ counter }</h2>
        <Button setcounter= { setcounter  } newValue={ counter + increment } >+</Button>
        <Button setcounter= { setcounter  } newValue={ counter - decrement }  >-</Button>
        <Button setcounter= { setcounter  } newValue={ initialValue }  >Reset</Button>
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