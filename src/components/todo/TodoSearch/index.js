import React from "react";
import "./style.css";

function TodoSearch(props) {
  return (
    <div className="container">
      <input
        className="TodoSearch"
        placeholder={props.placeholder ?? "Pagar cuentas"}
        value={props.searchValue}
        onChange={(event) => {
          props.setSearchValue(event.target.value);
        }}
      ></input>
    </div>
  );
}

export { TodoSearch };
