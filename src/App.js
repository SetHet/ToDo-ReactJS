// import React from "react";
// import logo from "./platzi.webp";
import { TodoCounter } from "./components/todo/TodoCounter";
import { TodoSearch } from "./components/todo/TodoSearch";
import { TodoList } from "./components/todo/TodoList";
import { TodoItem } from "./components/todo/TodoItem";
import { CreateTodoButton } from "./components/todo/CreateTodoButton";

const defaultTodos = [
  { mensaje: "Comprar el pan", completado: false },
  { mensaje: "Pasear al perro", completado: true },
  { mensaje: "Cocinar", completado: false },
];

function App() {
  return (
    <>
      <TodoCounter completados={1} totales={3} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            mensaje={todo.mensaje}
            completado={todo.completado}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
