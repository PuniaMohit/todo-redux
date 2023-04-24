import "./todoList.css";
import * as Icon from "react-bootstrap-icons";

const TodoList = (props) => {
  const showTaskCompleted = (complete, index) => (event) => {
    const { checked } = event.target;
    const newArr = props.todoList.map((item, i) => {
      let day = item.time.split(" ")[0];
      const selectedDate = new Date(day).getDate();
      const realDate = new Date().getDate();
      if (index === i) {
        if (realDate === selectedDate) {
          if (item.color === "green" && !checked) {
            return { ...item, color: "yellow" };
          } else {
            return { ...item, color: "green" };
          }
        } else {
          if (item.color === 'yellow') {
            return { ...item, color: 'green' }
          }
          else {
            return item
          }
        }
      } else {
        return item;
      }
    });
    props.setTodoList(newArr);
  };

  return (
    <div className="todolist-main-container">
      {props.todoList.map((element, index) => {
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
              {element.color === "green" ? (
                <div className="dotOuterBox">
                  <div className="green"></div>
                </div>
              ) : (
                <div className="dotOuterBox">
                  <div
                    className={element.color === "yellow" ? "yellow" : "red"}
                  ></div>
                </div>
              )}
            </label>
            <div className="border"></div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
