import { ADD_TASK } from "../../constants";

export const addTask = (addTodoList) => ({
  type: ADD_TASK,
  payload: addTodoList,
});
