import React from "react";
import * as Styled from "./styles";

type Props = {
  className?: string;
};

const Spinner: React.FC<Props> = ({ className }) => {
  return <Styled.Container className={className} />;
};

export default Spinner;
