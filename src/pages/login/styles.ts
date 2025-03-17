import styled from "styled-components";
import SunSvg from "../../assets/sol.svg";
import CustomButton from "../components/customButton";
import ForgotPassword from "./components/forgotPassword";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffde2e;
  width: 100vw;
  height: 100vh;
  align-items: center;
  overflow: hidden;
`;

export const SunImage = styled.img.attrs({ src: SunSvg })`
  position: absolute;
  bottom: -105px;
  right: 0;

  @media (max-width: 1024px) {
    bottom: -64px;
    height: 40%;
  }
`;

export const Title = styled.h1`
  margin-top: 64px;
  text-align: center;
  font-size: 52px;
  font-family: "Gopher-Bold";

  @media (max-width: 1024px) {
    margin-top: 32px;
    font-size: 40px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 50%;
  margin-top: 64px;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 80%;
    padding: 16px;
  }
`;

export const FormButton = styled(CustomButton)`
  margin-top: 48px;
  width: 300px;
  margin-left: 22%;

  @media (max-width: 1024px) {
    margin-top: 24px;
    width: 200px;
    margin-left: 30%;
    padding: 14px;
    font-size: 14px;
  }
`;

export const RecoverPassword = styled(ForgotPassword)`
  align-self: flex-end;
  margin-bottom: 64px;

  @media (max-width: 1024px) {
    margin-bottom: 16px;
  }
`;
