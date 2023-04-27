import { useDispatch, useSelector } from "react-redux";
import * as Icon from "react-bootstrap-icons";
import "./todoList.css";
import { listDotColorChange } from "../../redux/todoList/actions/colorUpdateList";

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);
  const dotColor = (element) => {
    if (new Date().getDate() === new Date(element.time).getDate()) {
      return element.checked
        ? element.color === "green"
          ? "yellow"
          : "green"
        : "yellow";
    } else {
      return "green";
    }
  };
  return (
    <div className="todolist-main-container">
      {list.map((element, index) => {
        let color = dotColor(element);
        return (
          <div className="list" key={index}>
            <label className="input-box">
              <input
                className="checkbox"
                type="checkbox"
                name={index}
                onChange={(event) => {
                  dispatch(
                    listDotColorChange({
                      name: element.name,
                      time: element.time,
                      color: color,
                      checked: event.target,
                    })
                  );
                }}
              />
              <div className="task-content">
                <div className="checkbox-content">
                  <p className="task-name">{element.name}</p>
                </div>
                {element.time && (
                  <div className="time">
                    <Icon.Alarm className="time-icon" />
                    <div className="list-time">{element.time}</div>
                  </div>
                )}
              </div>
              <div className="dotOuterBox">
                <div className={color}></div>
              </div>
            </label>
            <div className="border"></div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
