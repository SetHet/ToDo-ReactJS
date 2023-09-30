import "./TodoSearch.css";

function TodoSearch(props) {
  return (
    <div className="container">
      <input placeholder={props.placeholder ?? "Pagar cuentas"}></input>
    </div>
  );
}

export { TodoSearch };
