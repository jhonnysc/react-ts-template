import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "../../services/api";
import { getUsersSuccess, getUsersFailure } from "./actions";
import { HomeTypes } from "./types";

function* getUsers() {
  try {
    const response = yield call(api.get, "/users");
    yield put(getUsersSuccess(response.data));
  } catch {
    yield put(getUsersFailure());
  }
}

export default all([takeLatest(HomeTypes.GET_USERS_REQUEST, getUsers)]);
