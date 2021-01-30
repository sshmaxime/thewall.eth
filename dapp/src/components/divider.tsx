import { FC } from "react";

const Divider: FC<{ height: string }> = ({ height }) => {
  return <div style={{ height: height }} />;
};

export default Divider;
