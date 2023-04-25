import { LIST_DOT_COLOR_CHANGE, ADD_TASK } from "../../constants";

const initialState = {
  list: [
    {
      name: "Start making a presentation",
      time: "2023-04-25 7:08 pm",
      color: "yellow",
    },
    { name: "Pay for rent", time: "2023-04-25 7:14 pm", color: "yellow" },
    { name: "Buy a milk", time: "2023-04-30 8:20 pm", color: "green" },
    {
      name: "Don't forget to pick up Mickeal from school",
      time: "2023-04-25 8:20 pm",
      color: "yellow",
    },
    {
      name: "Buy a chocolate for Charlotte",
      time: "2023-04-25 8:20 pm",
      color: "yellow",
    },
  ],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_DOT_COLOR_CHANGE:
      return { ...state, list: action.payload };
    case ADD_TASK:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

export default listReducer;
