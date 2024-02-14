import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      {/* <button onClick={() => props.onComplete()}>{props.index}.- </button> */}
      {/* <input
        type="checkbox"
        className={`ready-selector 
          ${props.completado ? "ready-selector--complete" : ""}`}
        onClick={() => props.onComplete()}
      /> */}
      <span
        onClick={props.onComplete}
        className={`ready-selector 
          ${props.completado ? "ready-selector--complete" : ""}`}
      >
        {props.completado ? "✅" : "☑️"}
      </span>
      <div className={`text ${props.completado && "text--complete"}`}>
        {props.mensaje ?? "default message"}
      </div>
      <button className="delete-selector" onClick={props.onRemove}>
        X
      </button>
    </li>
  );
}

export { TodoItem };
