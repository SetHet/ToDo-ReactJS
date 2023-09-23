function TodoItem(props) {
  return (
    <li>
      <span>{props.activo ? "V" : "F"}</span>
      <p>{props.mensaje ?? "default message"}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
