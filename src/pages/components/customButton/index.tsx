import React, { CSSProperties } from "react";
import * as Styled from "./styles";

type Props = {
  title: string;
  style?: CSSProperties;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const CustomButton: React.FC<Props> = ({
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
      {title}
    </Styled.Container>
  );
};

export default CustomButton;
