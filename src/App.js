import logo from "./platzi.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        <TodoItem mensaje="Holaaaaa" />
        <TodoItem activo={true} />
        <TodoItem />
      </ul>
    </div>
  );
}

function TodoItem(props) {
  return (
    <li>
      <span>{props.activo ? "V" : "F"}</span>
      <p>{props.mensaje ?? "default message"}</p>
      <span>X</span>
    </li>
  );
}

export default App;
