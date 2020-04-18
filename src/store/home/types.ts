import { Action } from "redux";

export interface CounterState {
  value: number;
}

export interface UpdateCounter extends Action {
  type: "@@home/UPDATE_COUNTER";
  payload: CounterState;
}

export interface ResetCounter extends Action {
  type: "@@home/RESET_COUNTER";
}

export type HomeActions = UpdateCounter | ResetCounter;
