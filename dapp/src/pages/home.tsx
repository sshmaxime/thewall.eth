import { FC } from "react";
import { useSelector } from "react-redux";
import { IAppState } from "./../store/reducers";

import { Link } from "react-router-dom";

const Home: FC = () => {
  const store = useSelector((state: IAppState) => state);

  return (
    <div>
      <div>Maxime</div>
    </div>
  );
};

export default Home;
