import { TodoCounter } from "../components/todo/TodoCounter";
import { TodoSearch } from "../components/todo/TodoSearch";
import { TodoList } from "../components/todo/TodoList";
import { TodoItem } from "../components/todo/TodoItem";
import { CreateTodoButton } from "../components/todo/CreateTodoButton";
import { LoadingToDos } from "../components/todo/LoadingToDos";
import { ErrorLoadingTodos } from "../components/todo/ErrorLoadingTodos";
import { SinTodos } from "../components/todo/SinTodos";

function AppUI({
  completedTodos,
  searchValue,
  searchTodos,
  completeToDo,
  EliminarToDo,
  totalTodos,
  setSearchValue,
  loading,
  error,
}) {
  return (
    <>
      <TodoCounter completados={completedTodos} totales={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <LoadingToDos />}
        {error && <ErrorLoadingTodos />}
        {!loading && searchTodos.length === 0 && <SinTodos />}

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

export { AppUI };
