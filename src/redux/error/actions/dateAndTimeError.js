import { SHOW_DATE_ERROR } from "../../constants";
import { SHOW_HOUR_ERROR } from "../../constants";
import { SHOW_MINUTE_ERROR } from "../../constants";
import { DONT_SHOW_ERROR } from "../../constants";

export const dateErrorMessage = (value) => ({
  type: value === 'Date' ? SHOW_DATE_ERROR :
  value === 'Hours' ? SHOW_HOUR_ERROR :
  value === 'Minutes' ? SHOW_MINUTE_ERROR :
  !value && DONT_SHOW_ERROR
});
