import { FC } from "react";
import styled from "styled-components";
import Navbar from "./navbar";

const Container = styled.div`
  padding-left: 20%;
  padding-right: 20%;
`;

const Page: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Page;
