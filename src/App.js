import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/header";
import AddTodoPopUp from "./components/AddTodoPopUp/addTodoPopUp";
import TodoList from "./components/TodoList/todoList";
import{useSelector} from "react-redux"
function App() {
  const [showPop, setShowPop] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      name: "Start making a presentation",
      time: "2023-04-18 7:08 pm",
      color: "yellow",
    },
    { name: "Pay for rent", time: "2023-04-18 7:14 pm", color: "yellow" },
    { name: "Buy a milk", time: "2023-04-20 8:20 pm", color: "green" },
    {
      name: "Don't forget to pick up Mickeal from school",
      time: "2023-04-18 8:20 pm",
      color: "yellow",
    },
    {
      name: "Buy a chocolate for Charlotte",
      time: "2023-04-18 8:20 pm",
      color: "yellow",
    },
  ]);

  const show=useSelector(state=>state.show)
  useEffect(() => {
    // ..logic for red color of circle when task time and date crosses selected time and date....just have to use local storage here and we are done.
    // const todoColorCheckedList= todoList.map((element, index) => {
    //   let day = element.time.split(' ')[0]
    //   const selectedDate = new Date(day).getDate()
    //   let hours = parseInt(element.time.split(' ')[1].split(':')[0])
    //   const am_pm = element.time.split(' ')[2]
    //   const realDate = new Date().getDate()
    //   const realHours = new Date().getHours()
    //   hours = am_pm === 'pm' ? hours + 12 : hours
    //   console.log(selectedDate)
    //   console.log(realDate)
    //   if (selectedDate == realDate) {
    //     if(realHours>hours){
    //         return {...element, color:'red'}
    //     }else{
    //       return { ...element, color: 'yellow' }
    //     }
    //   }
    //   else if (realDate < selectedDate) {
    //     return { ...element, color: 'green' }
    //   }
    //   else if (realDate > selectedDate) {
    //     return { ...element, color: 'red' }
    //   }
    // })
    // setTodoList(todoColorCheckedList)
  }, []);

  return (
    <div className="container">
      <Header setShowPop={setShowPop} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      {show ? (
        <AddTodoPopUp
          setShowPop={setShowPop}
          setTodoList={setTodoList}
          todoList={todoList}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
