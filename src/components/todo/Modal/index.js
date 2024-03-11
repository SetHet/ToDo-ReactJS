import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { TodoContext } from "../../todoContext";

// modal es generico, este usa los portales
function Modal({ children }) {
  const { setOpenModal } = React.useContext(TodoContext);

  // retornar un portal que contenido y a donde
  return ReactDOM.createPortal(
    <div className="Modal" onClick={() => setOpenModal(false)}>
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
