import { SHOW_POP_UP } from "../../constants";
import { HIDE_POP_UP } from "../../constants";

export const showPopUp = () => ({
  type: SHOW_POP_UP,
});
export const hidePopUp = () => ({
  type: HIDE_POP_UP,
});
export const hidePopUpByCancelButton = () => ({
  type: HIDE_POP_UP,
});
export const hidePopUpByDoneButton = () => ({
  type: HIDE_POP_UP,
});
export const hidePopUpByClickGrayBackground = () => ({
  type: HIDE_POP_UP,
});
