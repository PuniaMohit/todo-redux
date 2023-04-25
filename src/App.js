import Header from "./components/Header/header";
import AddTodoPopUp from "./components/AddTodoPopUp/addTodoPopUp";
import TodoList from "./components/TodoList/todoList";
import { useSelector } from "react-redux";
function App() {
  const showPopUp = useSelector((state) => state.show.show);
  return (
    <div className="container">
      <Header />
      <TodoList />
      {showPopUp ? <AddTodoPopUp /> : <div></div>}
    </div>
  );
}

export default App;
