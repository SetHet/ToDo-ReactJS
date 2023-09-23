// import logo from "./platzi.webp";
import "./App.css";
import { TodoCounter } from "./components/todo/TodoCounter";
import { TodoSearch } from "./components/todo/TodoSearch";
import { TodoList } from "./components/todo/TodoList";
import { TodoItem } from "./components/todo/TodoItem";
import { CreateTodoButton } from "./components/todo/CreateTodoButton";

function App() {
  return (
    <div className="App">
      <TodoCounter completados={1} totales={3} />
      <TodoSearch />

      <TodoList>
        <TodoItem mensaje="Holaaaaa" />
        <TodoItem activo={true} />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
