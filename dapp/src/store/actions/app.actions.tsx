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
  payload: -1 | 0 | 1; // -1 == error loading // 0 == loading // 1 == loaded
}

export const init = () => {
  const toDispatch = (payload: -1 | 0 | 1): ActionInit => {
    return {
      type: INIT,
      payload: payload,
    };
  };

  return async (dispatch: any, getState: () => IAppState) => {
    try {
      await sdk.ready;

      // Fetch my wall
      dispatch(fetchWall(sdk.address));
      //

      return dispatch(toDispatch(1));
    } catch (err: any) {
      console.log(err);
      return dispatch(toDispatch(-1));
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

export const fetchWall = (address: string) => {
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
      console.log(err);
      return;
    }
  };
};

export type AppActionTypes = ActionInit | ActionFetchWallData;
