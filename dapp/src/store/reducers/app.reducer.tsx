import {
  INIT,
  FETCH_WALL_DATA,
  AppActionTypes,
  LOADING_SEND_MESSAGE,
  STOP_LOADING_SEND_MESSAGE,
} from "../actions/app.actions";
import { brick } from "../models/data";

const commonConstants = {};

export type appState = {
  ready: -1 | 0 | 1;
  address: string;
  loadSendMessage: boolean;
  walls: Map<string, brick[]>;
};

const appStateReducer = (
  state: appState = {
    ready: 0,
    address: "",
    loadSendMessage: false,
    walls: new Map(),
  },
  action: AppActionTypes,
): appState => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        ready: action.payload.ready,
        address: action.payload.address,
      };
    case FETCH_WALL_DATA:
      state.walls.set(action.payload.address, action.payload.data);
      return {
        ...state,
        walls: state.walls,
      };
    case LOADING_SEND_MESSAGE:
      return {
        ...state,
        loadSendMessage: true,
      };
    case STOP_LOADING_SEND_MESSAGE:
      return {
        ...state,
        loadSendMessage: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export { appStateReducer, commonConstants };
