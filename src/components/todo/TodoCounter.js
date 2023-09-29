import "./TodoCounter.css";

function TodoCounter({ completados, totales }) {
  return (
    <h1>
      {completados} de {totales} completados
    </h1>
  );
}

export { TodoCounter };
