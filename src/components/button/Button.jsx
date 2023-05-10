import React from "react";

export const Button = ({ onClick, children }) => {
  return (
    <>
      <button style={{ color: "blue" }} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
