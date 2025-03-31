import React, { CSSProperties } from "react";
import * as Styled from "./styles";

type Props = {
  title: string;
  style?: CSSProperties;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
  onClick?: () => void;
};

const CustomButton: React.FC<Props> = ({
  title,
  style,
  className,
  type,
  loading,
  onClick,
}) => {
  return (
    <Styled.Container
      type={type}
      className={className}
      onClick={onClick}
      disabled={loading}
      style={style}
    >
      <Styled.TextRow>
        {title}
        {loading && <Styled.ButtonSpinner />}
      </Styled.TextRow>
    </Styled.Container>
  );
};

export default CustomButton;
