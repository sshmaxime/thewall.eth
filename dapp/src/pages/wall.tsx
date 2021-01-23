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
import { motion } from "framer-motion";
import { Title } from "../components/text";
import Placeholder from "../components/realPlaceholder";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface props
  extends RouteComponentProps<{
    address: string;
  }> {}

const defaultState = {
  message: "",
};

const Wall: FC<props> = ({ match }) => {
  const dispatch = useDispatch();
  const store = useSelector((state: IAppState) => state);
  const [state, setState] = useState(defaultState);
  const [modalIsOpen, setIsOpen] = useState(false);

  const triggerModal = () => {
    setIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    dispatch(fetchWallData(match.params.address));
  }, [dispatch]);

  let bricks = store.appState.walls.get(match.params.address);
  bricks = bricks?.slice().reverse();

  const isMyWall = match.params.address === store.appState.address;

  const variants0 = {
    open: { x: -200 },
    closed: { x: 0 },
  };

  const variants = {
    open: { display: "block", opacity: 1, x: 0, y: 20 },
    closed: {
      display: "none",
      opacity: 0,
      x: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ message: e.target.value });
  };

  const nav = (e: any) => {
    if (e.key === "Enter") {
      dispatch(sendWallData(match.params.address, state.message));
      setState({ message: "" });
      setIsOpen(false);
    }
  };

  return (
    <Page>
      <div
        style={{
          fontSize: "1.3em",
          fontFamily: "Lato",
          textAlign: "center",
          marginBottom: "20px",
          textShadow: "2px 2px 0px rgba(130, 140, 255, 1)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {match.params.address}
        {isMyWall ? null : (
          <>
            <motion.div animate={modalIsOpen ? "open" : "closed"} variants={variants0}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {!store.appState.loadSendMessage ? (
                  <Icon
                    icon={ImgSend}
                    height={"75px"}
                    onClick={() => {
                      triggerModal();
                    }}
                  />
                ) : (
                  <Loader type="TailSpin" color="black" height={40} width={40} />
                )}

                <motion.div
                  onKeyDown={nav}
                  animate={modalIsOpen ? "open" : "closed"}
                  variants={variants}
                >
                  <Placeholder value={state.message} onChange={handleChange} />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </div>

      <div style={{ height: "20px" }} />

      {bricks &&
        bricks.map((elem, index) => {
          return (
            <Fragment key={index}>
              <Brick address={elem.builder} message={elem.message} />
              <Spacing height={50} />
            </Fragment>
          );
        })}

      {bricks?.length === 0 ? (
        isMyWall ? (
          <div style={{ fontFamily: "Montserrat" }}>You don't have any message :(</div>
        ) : (
          <div style={{ fontFamily: "Montserrat" }}>
            Your friend doesn't have any message :( send him one !
          </div>
        )
      ) : null}
    </Page>
  );
};

export default Wall;
