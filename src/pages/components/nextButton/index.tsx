import React, { CSSProperties } from "react";
import * as Styled from "./styles";

type Props = {
  title: string;
  style?: CSSProperties;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const NextButton: React.FC<Props> = ({
  title,
  style,
  className,
  type,
  onClick,
}) => {
  return (
    <Styled.Container
      type={type}
      className={className}
      onClick={onClick}
      style={style}
    >
      <div style={{ flex: 1, textAlign: "center" }}>{title}</div>
      <span>&gt;</span>
    </Styled.Container>
  );
};

export default NextButton;
