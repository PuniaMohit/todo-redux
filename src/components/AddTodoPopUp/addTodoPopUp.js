import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/todoList/actions/addList";
import { showEmptyInputError } from "../../redux/error/actions/inputError";
import { dateErrorMessage } from "../../redux/error/actions/dateAndTimeError";
import "./addTodoPopUp.css";

const AddTodoPopUp = ({ setShowPopUp }) => {
  const showInputError = useSelector((state) => state.inputError.inputError);
  const errorDateAndTimeMessage = useSelector(
    (state) => state.inputError.dateTimeError
  );
  const dispatch = useDispatch();
  const popupRef = useRef(null);
  const [input, setInput] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [dotColor, setDotColor] = useState("");

  const updateTime = (event) => {
    const dateObj = new Date(event.target.value);
    const suffix = dateObj.getHours() >= 12 ? "pm" : "am";
    const showHours = dateObj.getHours() % 12 || 12;
    let errorDateAndTimeMessage = "";
    if (new Date().getDate() > dateObj.getDate())
      errorDateAndTimeMessage = "Date";
    else if (new Date().getDate() === dateObj.getDate()) {
      if (dateObj.getHours() < new Date().getHours())
        errorDateAndTimeMessage = "Hours";
      else if (dateObj.getHours() === new Date().getHours()) {
        if (dateObj.getMinutes() < new Date().getMinutes())
          errorDateAndTimeMessage = "Minutes";
      }
    }
    const date = dateObj.getDate().toString().padStart(2, "0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear().toString();
    setDotColor(date === new Date().getDate().toString() ? "yellow" : "green");
    setDateAndTime(
      `${year}-${month}-${date} ${showHours}:${dateObj.getMinutes()} ${suffix}`
    );
    dispatch(dateErrorMessage(errorDateAndTimeMessage));
  };
  const taskObj = {
    name: input,
    time: dateAndTime,
    color: dotColor,
    checked: false,
  };
  const updateTodo = () => {
    if (!input) {
      dispatch(showEmptyInputError());
    } else if (!dateAndTime) {
      dispatch(dateErrorMessage("Date"));
    } else {
      setShowPopUp(false);
      dispatch(addTask(taskObj));
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopUp(false);
      dispatch(showEmptyInputError(false));
      dispatch(dateErrorMessage());
    }
  };
  return (
    <div>
      <div className="faded-background"></div>
      <div className="input-container" ref={popupRef}>
        <div className="input-inside-container">
          <div className="popup-header">Add Todo</div>
          <textarea
            className={showInputError ? "task-input-red" : "task-input"}
            onChange={(event) => {
              setInput(event.target.value);
              dispatch(showEmptyInputError(false));
            }}
          />
          {showInputError && <div className="error">Input is Empty</div>}
          {errorDateAndTimeMessage && (
            <div className="error">
              Your picked wrong {errorDateAndTimeMessage}
            </div>
          )}
          <input
            className="daytime-input"
            type="datetime-local"
            onChange={updateTime}
          />
          <div className="buttons">
            <button
              onClick={() => {
                setShowPopUp(false);
                dispatch(showEmptyInputError(false));
                dispatch(dateErrorMessage());
              }}
            >
              Cancel
            </button>
            {!errorDateAndTimeMessage && (
              <button onClick={updateTodo}>Done</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodoPopUp;
