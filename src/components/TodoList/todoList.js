import "./todoList.css";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { listDotColorChange } from "../../redux/todoList/actions/colorUpdateList";

const TodoList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);
  const showTaskCompleted = (complete, index) => (event) => {
    const { checked } = event.target;
    const updatedList = list.map((item, i) => {
      if (index === i) {
        const day = item.time.split(" ")[0];
        const color =
          new Date().getDate() === new Date(day).getDate()
            ? item.color === "green" && !checked
              ? "yellow"
              : "green"
            : item.color;
        return { ...item, color };
      } else {
        return item;
      }
    });
    dispatch(listDotColorChange(updatedList));
  };

  return (
    <div className="todolist-main-container">
      {list.map((element, index) => {
        return (
          <div className="list" key={index}>
            <label className="input-box">
              <input
                className="checkbox"
                type="checkbox"
                name={index}
                onClick={showTaskCompleted("complete", index)}
                key={index}
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
                <div
                  className={
                    element.color === "green"
                      ? "green"
                      : element.color === "yellow"
                      ? "yellow"
                      : "red"
                  }
                ></div>
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
