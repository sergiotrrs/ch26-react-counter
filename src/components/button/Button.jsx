import React from "react";

export const Button = ({ children, setcounter, newValue }) => {

    const handleOnClick = (event)=>{       
        setcounter(  newValue  ) ;       
    }

  return (
    <>
      <button style={{ color: "blue" }} onClick={ handleOnClick  }>
        {children}
      </button>
    </>
  );
};
