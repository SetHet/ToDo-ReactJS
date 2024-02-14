import React from "react";
// import logo from "./platzi.webp";
import { TodoCounter } from "./components/todo/TodoCounter";
import { TodoSearch } from "./components/todo/TodoSearch";
import { TodoList } from "./components/todo/TodoList";
import { TodoItem } from "./components/todo/TodoItem";
import { CreateTodoButton } from "./components/todo/CreateTodoButton";

const defaultTodos = [
  { mensaje: "Comprar el pan", completado: true },
  { mensaje: "Pasear al perro", completado: true },
  { mensaje: "Cocinar", completado: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((x) => !!x.completado).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter((value) =>
    value.mensaje.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <TodoCounter completados={completedTodos} totales={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchTodos.map((todo, index) => (
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
