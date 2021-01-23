import { FC } from "react";
import styled from "styled-components";
import { Normal, NormalThin } from "./text";
import Spacing from "./spacing";

const Container = styled.img<{ height?: string }>`
  cursor: pointer;
  transition-duration: 0.5s;

  height: ${(props) => props.height};
  &:hover {
    transform: scale(1.05);
  }
`;

const Icon: FC<{ icon: any; onClick: Function; height?: string }> = ({
  icon,
  onClick,
  height = undefined,
}) => {
  return <Container src={icon} onClick={() => onClick()} height={height} />;
};

export default Icon;
