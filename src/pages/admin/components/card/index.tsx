import React, { PropsWithChildren } from "react";
import * as Styled from "./styles";
import { CSSProperties } from "styled-components";

type Props = PropsWithChildren & {
  style?: CSSProperties;
};

const Card: React.FC<Props> = ({ children, style }) => {
  return <Styled.Container style={style}>{children}</Styled.Container>;
};

export default Card;
