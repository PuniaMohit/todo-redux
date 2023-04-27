import { LIST_DOT_COLOR_CHANGE, ADD_TASK } from "../../constants";

const initialState = {
  list: [
    {
      name: "Start making a presentation",
      time: "2023-04-27 7:08 pm",
      color: "yellow",
      checked: false,
    },
    {
      name: "Pay for rent",
      time: "2023-04-27 7:14 pm",
      color: "yellow",
      checked: false,
    },
    {
      name: "Buy a milk",
      time: "2023-04-30 8:20 pm",
      color: "green",
      checked: false,
    },
    {
      name: "Don't forget to pick up Mickeal from school",
      time: "2023-04-27 8:20 pm",
      color: "yellow",
      checked: false,
    },
    {
      name: "Buy a chocolate for Charlotte",
      time: "2023-04-27 8:20 pm",
      color: "yellow",
      checked: false,
    },
  ],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_DOT_COLOR_CHANGE:
      const updatedList = state.list.map((task) => {
        if (task.name === action.payload.name) {
          return action.payload;
        } else {
          return { ...task };
        }
      });
      return {
        ...state,
        list: updatedList,
      };
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
