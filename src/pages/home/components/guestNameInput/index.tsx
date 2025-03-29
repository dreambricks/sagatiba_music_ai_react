import { CSSProperties, forwardRef } from "react";
import * as Styled from "./styles";

export type IFormInputProps = {
  placeholder: string;
  value: string;
  errorMessage?: string;
  style?: CSSProperties;
  onChange: (value: string) => void;
};

const GuestNameInput = forwardRef<HTMLInputElement, IFormInputProps>(
  ({ placeholder, errorMessage, value, style, onChange, ...rest }, ref) => {
    return (
      <Styled.Container style={style}>
        <Styled.Input
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={(e) => onChange(e.target.value)}
          {...rest}
        />

        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      </Styled.Container>
    );
  }
);

export default GuestNameInput;
