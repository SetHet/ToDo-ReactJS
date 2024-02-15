import { ReactComponent as CheckSvg } from "../svg/check.svg";
import { ReactComponent as DeleteSvg } from "../svg/delete.svg";

const iconTypes = {
  check: <CheckSvg />,
  delete: <DeleteSvg />,
};

function ToDoIcon({ type, color }) {
  return (
    <span className={`Icon Icon-svg Icon-${type}`}>{iconTypes[type]}</span>
  );
}

export { ToDoIcon };
