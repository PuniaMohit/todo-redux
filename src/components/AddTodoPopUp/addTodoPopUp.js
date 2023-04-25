import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todoList/actions/addList";
import "./addTodoPopUp.css";

const AddTodoPopUp = (props) => {
  const { setShowPopUp } = props;
  const dispatch = useDispatch();
  const popupRef = useRef(null);
  const [input, setInput] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [dotColor, setDotColor] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateTime = (event) => {
    const dateObj = new Date(event.target.value);
    const suffix = dateObj.getHours() >= 12 ? "pm" : "am";
    const showHours = dateObj.getHours() % 12 || 12;
    let errorMessage = "";
    if (new Date().getDate() > dateObj.getDate()) errorMessage = "Date";
    else if (new Date().getDate() === dateObj.getDate()) {
      if (dateObj.getHours() < new Date().getHours()) errorMessage = "Hours";
      else if (dateObj.getHours() === new Date().getHours()) {
        if (dateObj.getMinutes() < new Date().getMinutes())
          errorMessage = "Minutes";
      }
    }
    const date = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear().toString();
    setDotColor(date === new Date().getDate().toString() ? "yellow" : "green");
    setDateAndTime(
      `${year}-${month}-${date} ${showHours}:${dateObj.getMinutes()} ${suffix}`
    );
    setErrorMessage(errorMessage);
  };
  const addTodoList = { name: input, time: dateAndTime, color: dotColor };
  const updateTodo = () => {
    if (input === "") {
      setEmptyInput(true);
    } else if (!dateAndTime) {
      setErrorMessage("Date");
    } else {
      setEmptyInput(false);
      setShowPopUp(false);
      dispatch(addTask(addTodoList));
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopUp(false);
    }
  };
  return (
    <div>
      <div className="faded-background"></div>
      <div className="input-container" ref={popupRef}>
        <div className="input-inside-container">
          <div className="popup-header">Add Todo</div>
          <textarea
            className={emptyInput ? "task-input-red" : "task-input"}
            onChange={(event) => {
              setInput(event.target.value);
              setEmptyInput(false);
            }}
          />
          {emptyInput ? <div className="error">Input is Empty</div> : <></>}
          {errorMessage ? (
            <div className="error">Your picked wrong {errorMessage}</div>
          ) : (
            <></>
          )}
          <input
            className="daytime-input"
            type="datetime-local"
            onChange={updateTime}
          ></input>
          <div className="buttons">
            <button onClick={() => setShowPopUp(false)}>Cancel</button>
            {errorMessage ? <></> : <button onClick={updateTodo}>Done</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodoPopUp;
