import { Reducer } from "redux";
import { CounterState, HomeActions } from "./types";

export const initialState = {
  value: 1000,
};

const reducer: Reducer<CounterState> = (
  state: CounterState = initialState,
  action
) => {
  switch ((action as HomeActions).type) {
    case "@@home/RESET_COUNTER":
      return { ...state, value: 0 };
    case "@@home/UPDATE_COUNTER":
      return { ...state, value: state.value + action.payload.value };
    default:
      return state;
  }
};

export default reducer;
