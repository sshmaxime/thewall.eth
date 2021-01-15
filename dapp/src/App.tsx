import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { init } from "./store/actions/app.actions";
import { IAppState } from "./store/reducers";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";

const ErrorLoadingApp: FC<any> = () => {
  return <div>Error</div>;
};
const LoadingApp: FC<any> = () => {
  return <div>Loading</div>;
};

const App: FC = () => {
  // TODO: read the chain elements from the lib (smart contract)
  // TODO: display the different block headers/forks

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
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
