import { SHOW_EMPTY_INPUT_ERROR } from "../../constants";
import { REMOVE_EMPTY_INPUT_ERROR } from "../../constants";

export const showEmptyInputError = (value) => ({
    type: value === false ? REMOVE_EMPTY_INPUT_ERROR : SHOW_EMPTY_INPUT_ERROR
});
