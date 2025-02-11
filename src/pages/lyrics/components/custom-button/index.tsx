import { ButtonHTMLAttributes } from "react";
import { ButtonText, FlexSvgButton, SvgStyled } from "./styles";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <FlexSvgButton {...props}>
      <SvgStyled viewBox="0 0 777 137" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H713C748.346 0 777 28.6538 777 64V137H64C28.6538 137 0 108.346 0 73V0Z" fill="#FF4B15" />
      </SvgStyled>
      <ButtonText>{children}</ButtonText>
    </FlexSvgButton>
  );
};