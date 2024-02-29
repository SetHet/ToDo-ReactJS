import React from "react";
import { TodoContext } from "../../todoContext";
import "./style.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h1>
      {completedTodos} de {totalTodos} completados
    </h1>
  );
}

export { TodoCounter };
