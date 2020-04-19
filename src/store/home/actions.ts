import { ActionCreator } from "redux";
import {
  UpdateCounter,
  ResetCounter,
  HomeTypes,
  GetUsersRequest,
  GetUsersSuccess,
  GetUsersFailure,
  User,
} from "./types";

export const updateCounter: ActionCreator<UpdateCounter> = (value: number) => ({
  type: HomeTypes.UPDATE_COUNTER,
  payload: value,
});

export const resetCounter: ActionCreator<ResetCounter> = () => ({
  type: HomeTypes.RESET_COUNTER,
});

export const getUsersRequest: ActionCreator<GetUsersRequest> = () => ({
  type: HomeTypes.GET_USERS_REQUEST,
});

export const getUsersSuccess: ActionCreator<GetUsersSuccess> = (
  users: User[]
) => ({
  type: HomeTypes.GET_USERS_SUCCESS,
  payload: { users },
});

export const getUsersFailure: ActionCreator<GetUsersFailure> = () => ({
  type: HomeTypes.GET_USERS_FAILURE,
});
