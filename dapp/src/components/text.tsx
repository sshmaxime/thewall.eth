import { FC } from "react";
import styled, { StyledFunction } from "styled-components";

const NormalThin_ = styled.div`
  font-family: Montserrat;
  font-size: 0.6em;
  font-style: italic;
`;

export const NormalThin: FC = ({ children }) => {
  return <NormalThin_>{children}</NormalThin_>;
};

//

const Normal_ = styled.div`
  font-family: Montserrat;
  font-size: 0.9em;
`;

export const Normal: FC = ({ children }) => {
  return <Normal_>{children}</Normal_>;
};

//

const Title_ = styled.div<{ fontStyle?: string }>`
  font-family: Montserrat;
  font-size: 1.1em;
  color: #c1c1c1;
  font-weight: 400;
  letter-spacing: -1px;
  text-align: right;
  font-style: ${(props) => props.fontStyle};
`;

export const Title: FC<{ fontStyle?: string }> = ({ children, fontStyle }) => {
  return <Title_ fontStyle={fontStyle}>{children}</Title_>;
};

//

const BigTitle_ = styled.div<{ fontStyle?: string }>`
  font-family: Montserrat;
  font-size: 2em;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  cursor: pointer;
  text-shadow: 3px 2px 0px silver;

  transition-duration: 0.5s;

  &:hover {
    transform: scale(1.02);
  }
  font-style: ${(props) => props.fontStyle};
`;

export const BigTitle: FC<{ fontStyle?: string; onClick?: Function }> = ({
  children,
  fontStyle,
  onClick,
}) => {
  return (
    <BigTitle_ fontStyle={fontStyle} onClick={() => (onClick ? onClick() : null)}>
      {children}
    </BigTitle_>
  );
};
