import React, { useState } from "react";
import { Button } from "../button/Button";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { ButtonGroup, Typography } from "@mui/material";
import { purple, red } from '@mui/material/colors';

export const Counter = ( {initialValue=0, increment=1, decrement=1} ) => {
   
    const [counter, setcounter] = useState( initialValue );

  return (
     <>
        <Typography color={purple[700]}variant="h1" align="center">Counter</Typography>
        <Typography color={purple[700]} variant="h2" align="center">{ counter }</Typography>     
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button startIcon={ <AddCircleIcon /> } setcounter= { setcounter  } newValue={ counter + increment } ></Button>
        <Button startIcon={ <RemoveCircleIcon /> } setcounter= { setcounter  } newValue={ counter - decrement }  ></Button>
        <Button startIcon={ <RestartAltIcon /> } setcounter= { setcounter  } newValue={ initialValue }  >Reset</Button>
        </ButtonGroup>
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