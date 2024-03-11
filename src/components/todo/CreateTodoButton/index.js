import "./style.css";

function CreateTodoButton({ action }) {
  return (
    <button className="add-button" onClick={() => action()}>
      +{/* <div className="add-button-plus">+</div> */}
    </button>
  );
}

export { CreateTodoButton };
