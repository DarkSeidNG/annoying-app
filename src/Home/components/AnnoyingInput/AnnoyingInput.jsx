import React, { useRef } from "react";
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

export default AnnoyingInput;
