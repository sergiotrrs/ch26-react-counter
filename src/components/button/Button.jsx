import ButtonMui from "@mui/material/Button";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

export const Button = ({ children, setcounter, newValue, startIcon }) => {
  /*     const handleOnClick = (event)=>{       
        setcounter(  newValue  ) ;       
    } */

  return (
    <>
      <ButtonMui
        variant="contained"
        startIcon={startIcon}
        onClick={() => setcounter(newValue)}
      >
        {children}
      </ButtonMui>
    </>
  );
};
