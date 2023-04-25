import Header from "./components/Header/header";
import AddTodoPopUp from "./components/AddTodoPopUp/addTodoPopUp";
import TodoList from "./components/TodoList/todoList";
import { useState } from "react";
function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div className="container">
      <Header setShowPopUp={setShowPopUp} />
      <TodoList />
      {showPopUp && <AddTodoPopUp setShowPopUp={setShowPopUp} />}
    </div>
  );
}

export default App;
