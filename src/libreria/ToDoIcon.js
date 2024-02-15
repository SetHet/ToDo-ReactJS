import { ReactComponent as CheckSvg } from "../svg/check.svg";
import { ReactComponent as DeleteSvg } from "../svg/delete.svg";
import "./ToDoIcon.css";

const iconTypes = {
  check: (color) => <CheckSvg className="Icon-svg Icon-check" fill={color} />,
  delete: (color) => (
    <DeleteSvg className="Icon-svg Icon-delete" fill={color} />
  ),
};

function ToDoIcon({ type, color }) {
  return (
    <span className={`Icon-container Icon-container-${type}`}>
      {iconTypes[type](color)}
    </span>
  );
}

export { ToDoIcon };
