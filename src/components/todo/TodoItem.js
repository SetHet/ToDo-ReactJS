function TodoItem(props) {
  return (
    <li>
      {/* <span>{props.index}.- </span> */}
      <span>{props.completado ? "V" : "F"}</span>
      <p>{props.mensaje ?? "default message"}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
