import React from "react";
// import logo from "./platzi.webp";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../components/todoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />;
    </TodoProvider>
  );
}

export default App;
