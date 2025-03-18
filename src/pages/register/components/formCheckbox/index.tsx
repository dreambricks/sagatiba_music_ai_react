import { CSSProperties, forwardRef } from "react";
import * as Styled from "./styles";

type IFormCheckboxProps = {
  text: string;
  style?: CSSProperties;
  className?: string;
  errorMessage?: string;
};

const FormCheckbox = forwardRef<HTMLInputElement, IFormCheckboxProps>(
  ({ text, errorMessage, style, className, ...rest }, ref) => {
    return (
      <Styled.Container style={style} className={className}>
        <Styled.CheckBoxRow>
          <Styled.Checkbox ref={ref} {...rest} />

          <Styled.Text>{text}</Styled.Text>
        </Styled.CheckBoxRow>

        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      </Styled.Container>
    );
  }
);

export default FormCheckbox;
