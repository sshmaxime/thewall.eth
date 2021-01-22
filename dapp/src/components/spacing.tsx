import { FC } from "react";

const Spacing: FC<{ height?: number }> = ({ height = 10 }) => {
  return <div style={{ height: height }}></div>;
};

export default Spacing;
