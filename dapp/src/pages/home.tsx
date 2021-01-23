import { FC } from "react";
import { useSelector } from "react-redux";
import { IAppState } from "./../store/reducers";
import Page from "../components/page";
import Brick from "../components/brick";
import Spacing from "../components/spacing";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router-dom";

const Container = styled.div`
  border-radius: 20px 20px 20px 20px;
  background: #e3e7f3;
  box-shadow: 10px 10px 2px #c1c4cf, -10px -10px 2px #ffffff;

  padding: 20px;
  padding-left: 20%;
  padding-right: 20%;

  font-family: Montserrat;
  font-size: 1.5em;
`;

const Home: FC = () => {
  const history = useHistory();
  const store = useSelector((state: IAppState) => state);

  if (store.appState.address) {
    return <Redirect to={"/building/" + store.appState.address} />;
  }

  return (
    <Page>
      <Container>Welcome !</Container>
    </Page>
  );
};

export default Home;
