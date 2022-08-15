import React, { useRef } from "react";
import PropTypes from 'prop-types';
import KeysMap from "../../../utils/keys-map";
import style from "./AnnoyingInput.module.css";

function AnnoyingInput({ placeholder, onInput, ...props }) {
  
  const inputRef = useRef(null);

  const handleOnKeyDown = (event) => {
    const transformedKey = KeysMap[event.key];
    if (transformedKey) {
      event.preventDefault();
      inputRef.current.value += transformedKey;
      inputRef.current.blur();
    }
    
    setTimeout(() => {
      onInput(inputRef.current.value);
    });
  };

  return (
    <input
      {...props}
      placeholder={placeholder}
      onKeyDown={handleOnKeyDown}
      ref={inputRef}
      className={style.input}
    />
  );
}

AnnoyingInput.propTypes = {
  placeholder: PropTypes.string,
  onInput: PropTypes.func,
  [PropTypes.string]: PropTypes.any,
};

export default AnnoyingInput;
