import React from "react";

export const Button = ({ children, setcounter, newValue, style }) => {

/*     const handleOnClick = (event)=>{       
        setcounter(  newValue  ) ;       
    } */

  return (
    <>
      <button style={style} onClick={ ()=> setcounter(newValue)  }>
        {children}
      </button>
    </>
  );
};
