import { SHOW_EMPTY_INPUT_ERROR } from "../../constants";
import { REMOVE_EMPTY_INPUT_ERROR } from "../../constants";
import { SHOW_DATE_ERROR } from "../../constants";
import { SHOW_HOUR_ERROR } from "../../constants";
import { SHOW_MINUTE_ERROR } from "../../constants";
import { DONT_SHOW_ERROR } from "../../constants";

const initialState = {
  inputError: false,
  dateTimeError:''
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EMPTY_INPUT_ERROR:
      return {
        ...state,
        inputError: true,
      };
    case REMOVE_EMPTY_INPUT_ERROR:
      return {
        ...state,
        inputError: false,
      };
    case SHOW_DATE_ERROR:
      return {
        ...state,
        dateTimeError: 'Date',
      };
    case SHOW_HOUR_ERROR:
      return {
        ...state,
        dateTimeError: 'Hours',
      };
    case SHOW_MINUTE_ERROR:
      return {
        ...state,
        dateTimeError: 'Minute',
      };
    case DONT_SHOW_ERROR:
      return {
        ...state,
        dateTimeError: '',
      };
    default:
      return state;
  }
};

export default errorReducer;
