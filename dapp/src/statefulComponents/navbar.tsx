import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { BigTitle, Title, Normal, NormalThin } from "../components/text";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

import { withRouter } from "react-router-dom";
import { IAppState } from "../store/reducers";
import { useHistory } from "react-router-dom";
import Icon from "../components/icon";
import { fetchWallData, sendWallData } from "../store/actions/app.actions";
import ImgSearch from "../assets/search.png";
import Placeholder from "../components/placeholder";

const Container = styled.div`
  height: 50px;
  background: linear-gradient(145deg, #f3f7ff, #f3f7ff);
  border-radius: 0% 0% 30px 30px;
  box-shadow: 10px 10px 5px #c1c4cf, -10px -10px 5px #ffffff;

  padding: 30px;
  padding-left: 20%;
  padding-right: 20%;

  display: flex;
  -webkit-display: flex;
  -moz-display: flex;
  -ms--display: flex;

  justify-content: space-between;
`;

interface props
  extends RouteComponentProps<{
    address: string;
  }> {}

const defaultState = {
  searchField: "",
};

const Navbar: FC<props> = ({ match }) => {
  const history = useHistory();
  const store = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState(defaultState);

  let address = store.appState.address;
  if (!address) {
    address = "0x";
  }
  address = address.substring(0, 4) + "..." + address.substring(address.length - 4, address.length);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ searchField: e.target.value });
  };

  const nav = (e: any) => {
    if (e.key === "Enter") {
      setState({ searchField: "" });
      dispatch(fetchWallData(state.searchField));
      history.push("/building/" + state.searchField);
    }
  };

  return (
    <Container>
      <div onKeyDown={nav}>
        <Placeholder value={state.searchField} onChange={handleChange} />
      </div>
      <div style={{ flex: 1, margin: "auto", display: "flex", justifyContent: "center" }}>
        <BigTitle onClick={() => history.push("/")}>The Wall</BigTitle>
      </div>
      <div
        style={{
          flex: 1,
          margin: "auto",
        }}
      >
        <Title fontStyle={"italic"}>{address || "0x"}</Title>
      </div>
    </Container>
  );
};

export default withRouter(Navbar);
