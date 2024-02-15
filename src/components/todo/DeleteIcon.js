import React from "react";
import { ToDoIcon } from "../../libreria/ToDoIcon";

function DeleteIcon({ onClick }) {
  return (
    <>
      <ToDoIcon type="delete" color="gray" onClick={onClick} />
    </>
  );
}

export { DeleteIcon };
