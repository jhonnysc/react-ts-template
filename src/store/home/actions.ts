import { ActionCreator } from "redux";
import { UpdateCounter, ResetCounter } from "./types";

export const updateCounter: ActionCreator<UpdateCounter> = (value: number) => ({
  type: "@@home/UPDATE_COUNTER",
  payload: {
    value,
  },
});

export const resetCounter: ActionCreator<ResetCounter> = () => ({
  type: "@@home/RESET_COUNTER",
});
