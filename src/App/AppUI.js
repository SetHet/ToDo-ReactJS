import { TodoCounter } from "../components/todo/TodoCounter";
import { TodoSearch } from "../components/todo/TodoSearch";
import { TodoList } from "../components/todo/TodoList";
import { TodoItem } from "../components/todo/TodoItem";
import { CreateTodoButton } from "../components/todo/CreateTodoButton";
import { LoadingToDos } from "../components/todo/LoadingToDos";
import { ErrorLoadingTodos } from "../components/todo/ErrorLoadingTodos";
import { SinTodos } from "../components/todo/SinTodos";
import { TodoContext } from "../components/todoContext";
import { Modal } from "../components/todo/Modal";
import React from "react";

function AppUI() {
  return (
    <TodoContext.Consumer>
      {({
        searchTodos,
        completeToDo,
        EliminarToDo,
        loading,
        error,
        openModal,
        setOpenModal,
      }) => (
        <>
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {loading && <LoadingToDos />}
            {error && <ErrorLoadingTodos />}
            {!loading && searchTodos.length === 0 && !openModal && <SinTodos />}

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

          <CreateTodoButton
            action={() => {
              setOpenModal(!openModal);
            }}
            closeMode={openModal}
          />

          {openModal && (
            <Modal>
              <div></div>
            </Modal>
          )}
        </>
      )}
    </TodoContext.Consumer>
  );
}

export { AppUI };
