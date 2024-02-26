import React from "react";
// import logo from "./platzi.webp";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "../hooks/useLocalStorage";

const defaultTodos = [
  { mensaje: "Comprar el pan", completado: true },
  { mensaje: "Pasear al perro", completado: true },
  { mensaje: "Cocinar", completado: false },
];

const STORAGENAME = "TODOS_V1";

function App() {
  const [todos, setTodos] = useLocalStorage(STORAGENAME, defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((x) => !!x.completado).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter((value) =>
    value.mensaje.toLowerCase().includes(searchValue.toLowerCase())
  );

  function EliminarToDo(index) {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setTodos(newToDos);
  }

  const completeToDo = (index) => {
    const newToDos = [...todos];
    newToDos[index].completado = !newToDos[index].completado;
    setTodos(newToDos);

    console.log(`complete todo ${index}`);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      searchValue={searchValue}
      searchTodos={searchTodos}
      completeToDo={completeToDo}
      EliminarToDo={EliminarToDo}
      totalTodos={totalTodos}
      setSearchValue={setSearchValue}
    />
  );
}

export default App;
