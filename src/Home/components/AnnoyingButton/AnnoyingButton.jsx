import React from "react";
import style from "./AnnoyingButton.module.css";

function AnnoyingButton({onClick, children, ...props}) {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <button {...props} className={style.button} onClick={handleOnClick}>
      { children }
    </button>
  );
}

export default AnnoyingButton;
