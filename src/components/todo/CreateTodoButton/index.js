import "./style.css";

function CreateTodoButton(props) {
  return (
    <button className="add-button" onClick={() => console.log("Click crear")}>
      +{/* <div className="add-button-plus">+</div> */}
    </button>
  );
}

export { CreateTodoButton };
