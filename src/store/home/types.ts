import { Action } from "redux";

export enum HomeTypes {
  UPDATE_COUNTER = "@@home/UPDATE_COUNTER",
  RESET_COUNTER = "@@home/RESET_COUNTER",
  GET_USERS_REQUEST = "@@home/GET_USERS_REQUEST",
  GET_USERS_SUCCESS = "@@home/GET_USERS_SUCCESS",
  GET_USERS_FAILURE = "@@home/GET_USERS_FAILURE",
}

export interface HomeState {
  value: number;
  users: User[];
  loading: {
    get: boolean;
    put: boolean;
    delete: boolean;
    post: boolean;
  };
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UpdateCounter extends Action {
  type: HomeTypes.UPDATE_COUNTER;
  payload: number;
}

export interface ResetCounter extends Action {
  type: HomeTypes.RESET_COUNTER;
}

export interface GetUsersRequest extends Action {
  type: HomeTypes.GET_USERS_REQUEST;
}

export interface GetUsersSuccess extends Action {
  type: HomeTypes.GET_USERS_SUCCESS;
  payload: { users: User[] };
}

export interface GetUsersFailure extends Action {
  type: HomeTypes.GET_USERS_FAILURE;
}

export type HomeActions =
  | UpdateCounter
  | ResetCounter
  | GetUsersRequest
  | GetUsersSuccess
  | GetUsersFailure;
