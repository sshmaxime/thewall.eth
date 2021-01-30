import { FC } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useSelector } from "react-redux";
import { IAppState } from "./../store/reducers";

export const Notification: FC = () => {
  const store = useSelector((state: IAppState) => state);

  // Global Notification
  if (store.appState.ready === -1) {
    toast("An error occured, please check that you are on Kovan testnet :) !", { type: "error" });
  }

  return <ToastContainer />;
};
