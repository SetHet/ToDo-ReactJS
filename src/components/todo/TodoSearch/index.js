import React from "react";
import "./style.css";
import { TodoContext } from "../../todoContext";

function TodoSearch(props) {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <div className="container">
      <input
        className="TodoSearch"
        placeholder={props.placeholder ?? "Pagar cuentas"}
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      ></input>
    </div>
  );
}

export { TodoSearch };
