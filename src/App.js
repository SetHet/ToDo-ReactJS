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

const STORAGENAME = "TODOS_V1";

function App() {
  let parsedToDos = JSON.parse(localStorage.getItem(STORAGENAME));

  if (!parsedToDos) {
    parsedToDos = defaultTodos;
    saveToDos(parsedToDos);
  }

  const [todos, setTodos] = React.useState(parsedToDos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((x) => !!x.completado).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter((value) =>
    value.mensaje.toLowerCase().includes(searchValue.toLowerCase())
  );

  function EliminarToDo(index) {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    saveToDos(newToDos);
  }

  const completeToDo = (index) => {
    const newToDos = [...todos];
    newToDos[index].completado = !newToDos[index].completado;
    saveToDos(newToDos);

    console.log(`complete todo ${index}`);
  };

  function saveToDos(_json) {
    localStorage.setItem(STORAGENAME, JSON.stringify(_json));
    setTodos(_json);
  }

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
            completed={todo.completado}
            onComplete={() => completeToDo(index)}
            onRemove={() => EliminarToDo(index)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
