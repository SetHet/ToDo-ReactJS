import "./TodoSearch.css";

function TodoSearch(props) {
  return (
    <div className="container">
      <input
        className="TodoSearch"
        placeholder={props.placeholder ?? "Pagar cuentas"}
      ></input>
    </div>
  );
}

export { TodoSearch };
