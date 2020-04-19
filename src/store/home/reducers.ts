import { Reducer } from "redux";
import { HomeState, HomeActions, HomeTypes } from "./types";

export const initialState: HomeState = {
  value: 1000,
  users: [],
  loading: {
    get: false,
    put: false,
    delete: false,
    post: false,
  },
};

const reducer: Reducer<HomeState> = (
  state: HomeState = initialState,
  action: HomeActions
) => {
  switch (action.type) {
    case HomeTypes.RESET_COUNTER:
      return { ...state, value: 0 };
    case HomeTypes.UPDATE_COUNTER:
      return { ...state, value: state.value + action.payload };
    case HomeTypes.GET_USERS_REQUEST:
      return { ...state, loading: { ...state.loading, get: true } };
    case HomeTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        loading: { ...state.loading, get: false },
      };
    case HomeTypes.GET_USERS_FAILURE:
      return { ...state, loading: { ...state.loading, get: false } };
    default:
      return state;
  }
};

export default reducer;
