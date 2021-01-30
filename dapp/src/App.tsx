import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Header from "./appComponents/header";
import Body from "./appComponents/body";
import Footer from "./appComponents/footer";
import Utils from "./appComponents/utils";

import { init } from "./store/actions/app.actions";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(145deg, #dfe3f0, #bbbfca);
`;

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <Router>
      <Container>
        <Header />
        <Body />
        <Footer />
        <Utils />
      </Container>
    </Router>
  );
};
export default App;
