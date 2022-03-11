import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";

import className from "./Modal.module.css";

const Modal = () => {
  const [show, setShow] = useState(false);
  const overlayRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef);
    console.log(buttonRef);
  });

  const onClickOutside = (el) => {
    if (overlayRef.current && (!overlayRef.current.contains(el) || (overlayRef.current.contains(el) && el === buttonRef.current))) {
      setShow(false);
    }
  };

  const showModal = (el) => {
    console.log(buttonRef.current);
    console.log(inputRef.current);
    setShow((prev) => !prev);
  };

  return ReactDOM.createPortal(
    <>
      <Button clickHandler={() => showModal()} ref={buttonRef} />
      <Input name="sd" ref={inputRef} />
      {show && (
        <div onClick={({ target }) => onClickOutside(target)} className={className.overlay}>
          <div ref={overlayRef} className={className.modalBody}>
            <h3>Modal using React portal</h3>
            <Button ref={buttonRef}>Close</Button>
          </div>
        </div>
      )}
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
