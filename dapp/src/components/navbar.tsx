import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background: linear-gradient(145deg, #f3f7ff, #ccd0db);
  border-radius: 0% 0% 40px 40px;

  padding: 30px;
  padding-left: 20%;
  padding-right: 20%;

  font-family: Montserrat;
  font-size: 1.5em;
`;

const Navbar: FC = () => {
  return (
    <Container>
      <div>The Wall</div>
    </Container>
  );
};

export default Navbar;
