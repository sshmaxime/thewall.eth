import { FC, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "./../store/reducers";
import Page from "../components/page";
import Brick from "../components/brick";
import Spacing from "../components/spacing";
import { RouteComponentProps } from "react-router-dom";
import Icon from "../components/icon";
import ImgSend from "../assets/message.png";
import { fetchWallData, sendWallData } from "../store/actions/app.actions";

interface props
  extends RouteComponentProps<{
    address: string;
  }> {}

const defaultState = {
  address: "",
  message: "",
};

const Wall: FC<props> = ({ match }) => {
  const dispatch = useDispatch();
  const store = useSelector((state: IAppState) => state);
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    dispatch(fetchWallData(match.params.address));
  }, [dispatch]);

  const bricks = store.appState.walls.get(match.params.address);
  if (!bricks) {
    return <Page>Well, nothing here :(</Page>;
  }

  return (
    <Page>
      <div
        style={{
          fontSize: "1.2em",
          fontFamily: "Lato",
          textAlign: "center",
          marginBottom: "20px",
          textShadow: "2px 2px 0px rgba(130, 140, 255, 1)",
          color: "white",
        }}
      >
        {match.params.address}
      </div>
      <Icon
        icon={ImgSend}
        onClick={() => {
          dispatch(sendWallData(state.address, state.message));
        }}
      />
      {bricks.map((elem, index) => {
        return (
          <Fragment key={index}>
            <Brick address={elem.builder} message={elem.message} />
            <Spacing height={50} />
          </Fragment>
        );
      })}
    </Page>
  );
};

export default Wall;
