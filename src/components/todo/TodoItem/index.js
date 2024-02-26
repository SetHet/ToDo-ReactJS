import "./style.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

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
      {/* <span
        onClick={props.onComplete}
        className={`ready-selector 
          ${props.completado ? "ready-selector--complete" : ""}`}
      >
        {props.completado ? "✅" : "☑️"}
      </span> */}
      <CompleteIcon completed={props.completed} onClick={props.onComplete} />
      <div className={`text ${props.completed && "text--complete"}`}>
        {props.mensaje ?? "default message"}
      </div>
      {/* <button className="delete-selector" onClick={props.onRemove}>
        X
      </button> */}
      <DeleteIcon onClick={props.onRemove} />
    </li>
  );
}

export { TodoItem };
