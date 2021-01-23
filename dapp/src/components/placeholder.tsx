import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Normal, NormalThin } from "./text";
import Spacing from "./spacing";
import Icon from "../components/icon";
import ImgSearch from "../assets/search.png";

const Container = styled.div<{ height?: string }>`
  padding: 5px;
  text-align: left;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  font-family: Montserrat;
`;

const Placeholder: FC<{ value: string; onChange: any }> = ({ value, onChange }) => {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Icon height={"30px"} icon={ImgSearch} onClick={() => {}} />
        <div style={{ width: "10px" }}></div>
        <div>
          <input
            style={{ width: "300px", height: "100%", fontFamily: "Montserrat", fontSize: "0.7em" }}
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Look for an address ..."
          />
        </div>
        <div style={{ width: "10px" }}></div>
      </div>
    </Container>
  );
};

export default Placeholder;
