import React from "react";
import ReactDOM from "react-dom";

// modal es generico, este usa los portales
function Modal({ children }) {
  // retornar un portal que contenido y a donde
  return ReactDOM.createPortal(
    <div className="Modal">{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
