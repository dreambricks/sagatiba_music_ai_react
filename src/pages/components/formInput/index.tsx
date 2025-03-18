import { CSSProperties, forwardRef, HTMLInputTypeAttribute } from "react";
import * as Styled from "./styles";

export type IFormInputProps = {
  label: string;
  placeholder: string;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
  style?: CSSProperties;
};

const FormInput = forwardRef<HTMLInputElement, IFormInputProps>(
  (
    { label, placeholder, errorMessage, type, style, maxLength, ...rest },
    ref
  ) => {
    return (
      <Styled.Container style={style}>
        <Styled.InputContainer>
          <Styled.Label>{label}</Styled.Label>

          <Styled.Input
            placeholder={placeholder}
            type={type}
            ref={ref}
            maxLength={maxLength}
            {...rest}
          />
        </Styled.InputContainer>

        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      </Styled.Container>
    );
  }
);

export default FormInput;
