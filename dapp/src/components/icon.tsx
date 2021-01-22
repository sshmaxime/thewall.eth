import { FC } from "react";
import styled from "styled-components";
import { Normal, NormalThin } from "./text";
import Spacing from "./spacing";

const Container = styled.img`
  cursor: pointer;
  transition-duration: 0.5s;

  height: 75px;
  &:hover {
    transform: scale(1.2);
  }
`;

const Icon: FC<{ icon: any; onClick: Function }> = ({ icon, onClick }) => {
  return <Container src={icon} onClick={() => onClick()}></Container>;
};

export default Icon;
