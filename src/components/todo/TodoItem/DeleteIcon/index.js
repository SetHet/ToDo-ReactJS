import React from "react";
import { ToDoIcon } from "../../../todoicon";

function DeleteIcon({ onClick }) {
  return (
    <>
      <ToDoIcon type="delete" color="gray" onClick={onClick} />
    </>
  );
}

export { DeleteIcon };
