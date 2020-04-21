import { HomeState } from "./home/types";
import { Reducer, combineReducers } from "redux";
import { routerReducer, RouterState } from "react-router-redux";
import homeReducer from "./home/reducers";
import { Saga } from "redux-saga";
import { all } from "redux-saga/effects";
import HomeSagas from "./home/sagas";

export interface ApplicationState {
  home: HomeState;
  router: RouterState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  router: routerReducer,
  home: homeReducer,
});

export const sagas: Saga<any> = function* () {
  return yield all([HomeSagas]);
};
