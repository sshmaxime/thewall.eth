import { INIT, FETCH_WALL_DATA, AppActionTypes } from "../actions/app.actions";
import { brick } from "../models/data";

const commonConstants = {};

export type appState = {
  ready: -1 | 0 | 1;
  walls: Map<string, brick[]>;
};

const appStateReducer = (
  state: appState = {
    ready: 0,
    walls: new Map(),
  },
  action: AppActionTypes,
): appState => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        ready: action.payload,
      };
    case FETCH_WALL_DATA:
      state.walls.set(action.payload.address, action.payload.data);
      return {
        ...state,
        walls: state.walls,
      };
    default:
      return {
        ...state,
      };
  }
};

export { appStateReducer, commonConstants };
