import React, { CSSProperties } from "react";
import * as Styled from "./styles";

type Props = {
  className?: string;
  style?: CSSProperties;
};

const Spinner: React.FC<Props> = ({ className, style }) => {
  return <Styled.Container className={className} style={style} />;
};

export default Spinner;
