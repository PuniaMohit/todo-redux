import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { hidePopUp, hidePopUpByButton } from '../../redux/popUp/actions/showPopUp'
import "./addTodoPopUp.css";

const AddTodoPopUp = (props) => {
  const dispatch = useDispatch();
  const popupRef = useRef(null);
  const [input, setInput] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [dotColor, setDotColor] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const updateTime = (event) => {
    const arrDateAndTime = event.target.value.split("T");
    let day = event.target.value.split("T")[0];
    const hours = arrDateAndTime[1].split(":")[0];
    const minutes = arrDateAndTime[1].split(":")[1];
    const suffix = hours >= 12 ? "pm" : "am";
    const showHours = hours > 12 ? hours - 12 : hours;
    const time = showHours + ":" + minutes + " " + suffix;
    const dateAndTim = day + " " + time;
    const selectedDate = new Date(day).getDate();
    const realDate = new Date().getDate();
    const realHours = new Date().getHours();
    const realMinutes = new Date().getMinutes();
    if (realDate > selectedDate) {
      setErrorMessage("Date");
    } else if (realDate == selectedDate) {
      if (hours < realHours) {
        setErrorMessage("Hours");
      } else if (hours == realHours) {
        if (minutes < realMinutes) {
          setErrorMessage("Minutes");
        } else {
          setErrorMessage("");
        }
      } else {
        setErrorMessage("");
      }
    } else {
      setErrorMessage("");
    }
    setDateAndTime(dateAndTim);

    if (selectedDate == realDate) {
      setDotColor("yellow");
    } else if (realDate < selectedDate) {
      setDotColor("green");
    }
  };

  const updateTodo = () => {
    if (input === "") {
      setEmptyInput(true);
    } else if (!dateAndTime) {
      setErrorMessage("Date");
    } else {
      setEmptyInput(false);
      props.setShowPop(false);
      props.setTodoList([
        ...props.todoList,
        { name: input, time: dateAndTime, color: dotColor },
      ]);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      props.setShowPop(false);
    }
  };
  return (
    <div>
      <div className="faded-background" onClick={() => dispatch(hidePopUp())}></div>
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
            <button onClick={() => dispatch(hidePopUpByButton())}>Cancel</button>
            {errorMessage ? <></> : <button onClick={updateTodo}>Done</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodoPopUp;
