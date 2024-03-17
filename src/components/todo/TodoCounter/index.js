import React from "react";
import { TodoContext } from "../../todoContext";
import "./style.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  const respuesta = () => {
    if (totalTodos === 0) return "Crea tu primer To Do";
    if (totalTodos === completedTodos)
      return `Felicidades has completado los ${completedTodos} To Do`;
    else return `${completedTodos} de ${totalTodos} completados`;
  };

  return <h1>{respuesta()}</h1>;
}

export { TodoCounter };
