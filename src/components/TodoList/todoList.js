import "./todoList.css";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { listDotColorChange } from "../../redux/todoList/actions/colorUpdateList";

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);
  return (
    <div className="todolist-main-container">
      {list.map((element, index) => {
        let color;
        if (new Date().getDate() === new Date(element.time).getDate()) {
          color = element.checked
            ? element.color === "green"
              ? "yellow"
              : "green"
            : "yellow";
        } else {
          color = "green";
        }
        return (
          <div className="list" key={index}>
            <label className="input-box">
              <input
                className="checkbox"
                type="checkbox"
                name={index}
                onChange={(event) => {
                  const { checked } = event.target;
                  let newObjTask = {
                    name: element.name,
                    time: element.time,
                    color: color,
                    checked: checked,
                  };
                  dispatch(listDotColorChange(newObjTask));
                }}
              />
              <div className="task-content">
                <div className="checkbox-content">
                  <p className="task-name">{element.name}</p>
                </div>
                {element.time ? (
                  <div className="time">
                    <Icon.Alarm className="time-icon" />
                    <div className="list-time">{element.time}</div>
                  </div>
                ) : (
                  <></>
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
