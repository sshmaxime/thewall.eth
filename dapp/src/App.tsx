import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { init } from "./store/actions/app.actions";
import { IAppState } from "./store/reducers";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Wall from "./pages/wall";

const ErrorLoadingApp: FC<any> = () => {
  useEffect(() => {
    toast("An error occured, please check that you are on Kovan testnet :) !", { type: "error" });
  }, []);
  return <div>Error</div>;
};
const LoadingApp: FC<any> = () => {
  return <div>Loading</div>;
};

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(145deg, #dfe3f0, #bbbfca);
`;

const App: FC = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: IAppState) => state);

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  if (store.appState.ready === 0) {
    return <LoadingApp />;
  } else if (store.appState.ready === -1) {
    return <ErrorLoadingApp />;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        <Switch>
          <Route path="/building/:address" component={Wall} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
