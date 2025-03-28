import styled from "styled-components";
import CustomButton from "../components/customButton";
import ForgotPassword from "./components/forgotPassword";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100vw;
  height: 100vh;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Gopher-Bold";
  color: black;
  margin-bottom: 120px;
  margin-top: 120px;

  @media (max-width: 1024px) {
    margin-top: 0;
    margin-bottom: 32px;
    font-size: 24px;
    text-align: start;
    color: #f15a31;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 64px;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const FormButton = styled(CustomButton)`
  margin-top: 24px;
  width: 300px;
  margin-left: 18%;

  @media (max-width: 1024px) {
    margin-left: 30%;
    width: 120px;
  }
`;

export const RecoverPassword = styled(ForgotPassword)`
  align-self: flex-end;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    margin-bottom: 32px;
    align-self: flex-start;
  }
`;
