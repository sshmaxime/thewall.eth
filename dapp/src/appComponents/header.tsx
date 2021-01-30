import { FC } from "react";

import Navbar from "../statefulComponents/navbar";
import Divider from "../components/divider";

const Header: FC = () => {
  return (
    <>
      <Navbar />
      <Divider height="50px" />
    </>
  );
};

export default Header;
