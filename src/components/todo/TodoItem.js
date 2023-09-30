import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      {/* <span>{props.index}.- </span> */}
      <input type="checkbox" className="ready-selector" />
      {/* {props.completado ? "V" : "F"}
      </input> */}
      <div className="text">{props.mensaje ?? "default message"}</div>
      <button className="delete-selector">X</button>
    </li>
  );
}

export { TodoItem };
