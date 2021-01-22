import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { init } from "./store/actions/app.actions";
import { IAppState } from "./store/reducers";
import Navbar from "./components/navbar";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

const ErrorLoadingApp: FC<any> = () => {
  return <div>Error</div>;
};
const LoadingApp: FC<any> = () => {
  return <div>Loading</div>;
};

const Container = styled.div`
  height: 100vh;
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
    <Router>
      <Container>
        <Navbar />
        <div style={{ height: "30px" }} />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
