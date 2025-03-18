import React, { CSSProperties } from "react";
import * as Styled from "./Styles";

type ICheckboxProps = {
  text: string;
  value: boolean;
  onClick: (selected: boolean) => void;
  style?: CSSProperties;
};

const Checkbox: React.FC<ICheckboxProps> = ({
  text,
  value,
  style,
  onClick,
}) => {
  return (
    <Styled.Container style={style}>
      <Styled.Checkbox
        checked={value}
        onChange={(e) => {
          onClick(e.target.checked);
        }}
      />

      <Styled.Text onClick={() => {}}>{text}</Styled.Text>
    </Styled.Container>
  );
};

export default Checkbox;
