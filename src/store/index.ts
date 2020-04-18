import { CounterState } from "./home/types";
import { Reducer, combineReducers } from "redux";
import { routerReducer, RouterState } from "react-router-redux";
import homeReducer from "./home/reducers";
import { Saga } from "redux-saga";
import { all } from "redux-saga/effects";

export interface ApplicationState {
  home: CounterState;
  router: RouterState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  router: routerReducer,
  home: homeReducer,
});

export const sagas: Saga = function* () {
  return yield all([]);
};
