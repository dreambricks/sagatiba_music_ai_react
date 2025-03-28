import styled from "styled-components";
import CustomButton from "../../../components/customButton";
import FormCheckbox from "../formCheckbox";
import AlreadyRegistered from "../alreadyRegistered";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const FormButton = styled(CustomButton)`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 300px;
  margin-left: 18%;

  @media (max-width: 1024px) {
    width: 150px;
    margin-left: 30%;
  }
`;

export const CheckBox = styled(FormCheckbox)`
  margin-left: 18%;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const RegisteredButton = styled(AlreadyRegistered)`
  align-self: flex-end;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    align-self: flex-start;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: start;
  font-family: "Gopher-Bold";
  color: #f15a31;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h1`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 16px;
  text-align: start;
  font-family: "Gopher-Bold";
  z-index: 1;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;
