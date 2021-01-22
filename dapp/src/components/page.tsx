import { FC } from "react";
import styled from "styled-components";
import Navbar from "../statefulComponents/navbar";

const Container = styled.div`
  padding-left: 25%;
  padding-right: 25%;
`;

const Page: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ height: "50px" }} />
      <Container>{children}</Container>
    </>
  );
};

export default Page;
