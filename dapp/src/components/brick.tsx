import { FC } from "react";
import styled from "styled-components";
import { Normal, NormalThin } from "./text";
import Spacing from "./spacing";

const Container = styled.div`
  border-radius: 20px 20px 20px 20px;
  background: #e3e7f3;
  box-shadow: 10px 10px 2px #c1c4cf, -10px -10px 2px #ffffff;

  padding: 20px;
  padding-left: 10%;
  padding-right: 10%;

  font-family: Montserrat;
  font-size: 1.5em;
`;

const Brick: FC<{ address: string; message: string }> = ({ address, message }) => {
  return (
    <Container>
      <NormalThin>{address}</NormalThin>
      <Spacing />
      <Normal>{message}</Normal>
    </Container>
  );
};

export default Brick;
