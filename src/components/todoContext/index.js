import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  //   const defaultTodos = [
  //     { mensaje: "Comprar el pan", completado: true },
  //     { mensaje: "Pasear al perro", completado: true },
  //     { mensaje: "Cocinar", completado: false },
  //   ];

  const STORAGENAME = "TODOS_V1";

  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage(STORAGENAME, []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((x) => !!x.completado).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter((value) =>
    value.mensaje.toLowerCase().includes(searchValue.toLowerCase())
  );

  const [openModal, setOpenModal] = React.useState(false);

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

  const values = {
    completedTodos,
    searchValue,
    searchTodos,
    completeToDo,
    EliminarToDo,
    totalTodos,
    setSearchValue,
    loading,
    error,
    openModal,
    setOpenModal,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}

function TodoConsumer({ children }) {
  return (
    <TodoContext.Consumer>{(values) => ({ children })}</TodoContext.Consumer>
  );
}

export { TodoContext, TodoProvider, TodoConsumer };
