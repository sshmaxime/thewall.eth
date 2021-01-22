import { FC } from "react";
import { useSelector } from "react-redux";
import { IAppState } from "./../store/reducers";
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

const Home: FC = () => {
  const store = useSelector((state: IAppState) => state);

  console.log(store.appState.walls);
  return (
    <Container>
      <div>Maxime</div>
    </Container>
  );
};

export default Home;
