import { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { IAppState } from "./../store/reducers";
import Page from "../statefulComponents/page";

const NotFound: FC = () => {
  return <Page>Oups</Page>;
};

export default NotFound;
