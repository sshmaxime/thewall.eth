import { FC, useState } from "react";
import styled from "styled-components";
import { BigTitle, Title, Normal, NormalThin } from "../components/text";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

import { withRouter } from "react-router-dom";
import { IAppState } from "../store/reducers";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  height: 50px;
  background: linear-gradient(145deg, #f3f7ff, #f3f7ff);
  border-radius: 0% 0% 30px 30px;
  box-shadow: 10px 10px 5px #c1c4cf, -10px -10px 5px #ffffff;

  padding: 30px;
  padding-left: 25%;
  padding-right: 25%;

  display: flex;
  justify-content: space-between;
`;

interface props
  extends RouteComponentProps<{
    address: string;
  }> {}

const Navbar: FC<props> = ({ match }) => {
  const history = useHistory();
  const store = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  let address = store.appState.address;
  if (!address) {
    address = "0x";
  }

  address = address.substring(0, 4) + "..." + address.substring(address.length - 4, address.length);
  return (
    <Container>
      <BigTitle onClick={() => history.push("/")}>The Wall</BigTitle>
      <Title fontStyle={"italic"}>{address || "0x"}</Title>
    </Container>
  );
};

export default withRouter(Navbar);
