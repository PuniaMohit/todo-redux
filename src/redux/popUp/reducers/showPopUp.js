import { SHOW_POP_UP, HIDE_POP_UP } from "../../constants";

const initialState = {
  show: false,
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POP_UP:
      return {
        ...state,
        show: true,
      };
    case HIDE_POP_UP:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default showReducer;
