import "./style.css";

function CreateTodoButton({ action, closeMode }) {
  return (
    <button
      className={`add-button ${closeMode && "add-button-close"} `}
      onClick={() => action()}
    >
      {closeMode ? "x" : "+"}
    </button>
  );
}

export { CreateTodoButton };
