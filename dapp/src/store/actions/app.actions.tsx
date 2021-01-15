import { IAppState } from "../reducers/index";
import { Dispatch } from "redux";
import { sdk } from "../../sdk";

///////////
// READY //
///////////
export const READY = "READY";
export interface ActionInit {
  type: typeof READY;
  payload: -1 | 0 | 1; // -1 == error loading // 0 == loading // 1 == loaded
}

export const init = () => {
  const toDispatch = (payload: -1 | 0 | 1): ActionInit => {
    return {
      type: READY,
      payload: payload,
    };
  };

  return async (dispatch: any, getState: () => IAppState) => {
    try {
      await sdk.ready;

      // Init first calls
      //

      return dispatch(toDispatch(1));
    } catch {
      return dispatch(toDispatch(-1));
    }
  };
};

export type AppActionTypes = ActionInit;
