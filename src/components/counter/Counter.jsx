import React, { useState } from "react";
import { Button } from "../button/Button";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export const Counter = ( {initialValue=0, increment=1, decrement=1} ) => {
   
    const [counter, setcounter] = useState( initialValue );

  return (
     <>
        <h1>Counter</h1>        
        <h2>{ counter }</h2>
        <Button startIcon={ <AddCircleIcon /> } setcounter= { setcounter  } newValue={ counter + increment } ></Button>
        <Button startIcon={ <RemoveCircleIcon /> } setcounter= { setcounter  } newValue={ counter - decrement }  ></Button>
        <Button startIcon={ <RestartAltIcon /> } setcounter= { setcounter  } newValue={ initialValue }  >Reset</Button>
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