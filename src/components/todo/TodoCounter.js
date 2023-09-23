function TodoCounter(props) {
  return (
    <h1>
      {props.completados} de {props.totales} completados
    </h1>
  );
}

export { TodoCounter };
