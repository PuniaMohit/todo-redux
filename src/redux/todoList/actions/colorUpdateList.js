import { LIST_DOT_COLOR_CHANGE } from "../../constants";

export const listDotColorChange = (updatedList) => ({
  type: LIST_DOT_COLOR_CHANGE,
  payload: updatedList,
});
