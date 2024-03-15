import { TodoContext } from "../../todoContext";
import "./style.css";
import React from "react";

function ToDoForm() {
  const { setOpenModal, addToDo: addToDoToContext } =
    React.useContext(TodoContext);

  function closeModal() {
    setOpenModal(false);
  }

  function addToDo() {
    const texto = document.getElementById("nuevo-todo").value || "wokitoki";
    addToDoToContext(texto);
    closeModal();
  }

  return (
    <div className="form-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>Ingrese descripcion del nuevo To Do</label>
        <textarea id="nuevo-todo" placeholder="Nuevo To Do" />

        <div className="button-container">
          <button className="button-cancelar" onClick={closeModal}>
            Cancelar
          </button>
          <button className="button-agregar" type="submit" onClick={addToDo}>
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
}

export { ToDoForm };
