import React from "react";
import { ToDoIcon } from "../../../todoicon";

function CompleteIcon({ completed, onClick }) {
  return (
    <>
      <ToDoIcon
        type="check"
        color={completed ? "green" : "gray"}
        onClick={onClick}
      />
    </>
  );
}

export { CompleteIcon };
