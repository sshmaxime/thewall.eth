import { READY, AppActionTypes } from "../actions/app.actions";

const commonConstants = {};

export type appState = {
  ready: -1 | 0 | 1;
};

const appStateReducer = (
  state: appState = {
    ready: 0,
  },
  action: AppActionTypes,
): appState => {
  switch (action.type) {
    case READY:
      return {
        ...state,
        ready: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export { appStateReducer, commonConstants };
