import React from "react";
import PropTypes from 'prop-types';
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

AnnoyingButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  [PropTypes.string]: PropTypes.any
};

export default AnnoyingButton;
