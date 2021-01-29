import { IAppState } from "../reducers/index";
import { Dispatch } from "redux";
import { sdk } from "../../sdk";
import { brick } from "../models/data";

//////////
// INIT //
//////////
export const INIT = "INIT";
export interface ActionInit {
  type: typeof INIT;
  payload: {
    ready: -1 | 0 | 1; // -1 == error loading // 0 == loading // 1 == loaded
    address: string;
  };
}

export const init = () => {
  const toDispatch = (payload: { ready: -1 | 0 | 1; address: string }): ActionInit => {
    return {
      type: INIT,
      payload: payload,
    };
  };

  return async (dispatch: any, getState: () => IAppState) => {
    try {
      await sdk.ready;

      return dispatch(toDispatch({ ready: 1, address: sdk.address }));
    } catch (err: any) {
      console.log(err);
      return dispatch(toDispatch({ ready: -1, address: "" }));
    }
  };
};

/////////////////////
// FETCH_WALL_DATA //
/////////////////////
export const FETCH_WALL_DATA = "FETCH_WALL_DATA";
export interface ActionFetchWallData {
  type: typeof FETCH_WALL_DATA;
  payload: { address: string; data: brick[] };
}

export const fetchWallData = (address: string) => {
  const toDispatch = (payload: { address: string; data: brick[] }): ActionFetchWallData => {
    return {
      type: FETCH_WALL_DATA,
      payload: payload,
    };
  };

  return async (dispatch: any, getState: () => IAppState) => {
    try {
      return dispatch(
        toDispatch({ address: address, data: await sdk.smartContract.inspect(address) }),
      );
    } catch (err: any) {
      console.log("1");
      console.log(err);
      return;
    }
  };
};

////////////////////
// SEND_WALL_DATA //
////////////////////
export const SEND_WALL_DATA = "SEND_WALL_DATA";
export interface ActionSendWallData {
  type: typeof SEND_WALL_DATA;
  payload: { address: string; data: brick[] };
}

export const sendWallData = (address: string, message: string) => {
  return async (dispatch: any, getState: () => IAppState) => {
    try {
      dispatch({ type: LOADING_SEND_MESSAGE, payload: {} });
      let transaction = await sdk.build(address, message);
      if (transaction) {
        dispatch({ type: STOP_LOADING_SEND_MESSAGE, payload: {} });
        dispatch(fetchWallData(address));
      }
    } catch (err: any) {
      dispatch({ type: STOP_LOADING_SEND_MESSAGE, payload: {} });
      console.log(err);
      return;
    }
  };
};

export const LOADING_SEND_MESSAGE = "LOADING_SEND_MESSAGE";
export interface ActionLoadingSendMessage {
  type: typeof LOADING_SEND_MESSAGE;
  payload: {};
}
export const STOP_LOADING_SEND_MESSAGE = "STOP_LOADING_SEND_MESSAGE";
export interface ActionStopLoadingSendMessage {
  type: typeof STOP_LOADING_SEND_MESSAGE;
  payload: {};
}

export type AppActionTypes =
  | ActionInit
  | ActionFetchWallData
  | ActionLoadingSendMessage
  | ActionStopLoadingSendMessage;
