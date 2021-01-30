import { FC } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "../pages";

const Body: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route exact path="/building/:address" component={Pages.Wall} />
        <Route component={Pages.NotFound} />
      </Switch>
    </>
  );
};

export default Body;
