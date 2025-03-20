import styled from "styled-components";
import SunSvg from "../../assets/sol.svg";
import CustomButton from "../components/customButton";
import FormCheckbox from "./components/formCheckbox";
import AlreadyRegistered from "./components/alreadyRegistered";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffde2e;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  align-items: center;
  overflow-x: hidden;
  max-width: 100%;
`;

export const SunImageContainer = styled.div`
  position: fixed;
  bottom: -110px;
  right: 0;
  width: 750px;
  height: 750px;
  background-image: url(${SunSvg});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    bottom: -40px;
    width: 250px;
    height: 250px;
  }
`;

export const Title = styled.h1`
  margin-top: 64px;
  text-align: center;
  font-size: 52px;
  font-family: "Gopher-Bold";
  z-index: 1;

  @media (max-width: 1024px) {
    margin-top: 32px;
    margin-left: 16px;
    margin-right: 16px;
    font-size: 24px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 64px;
  z-index: 0;

  @media (max-width: 1024px) {
    width: 95%;
    margin-top: 32px;
  }
`;

export const FormButton = styled(CustomButton)`
  margin-top: 48px;
  margin-bottom: 24px;
  width: 300px;
  margin-left: 18%;

  @media (max-width: 1024px) {
    margin-top: 24px;
    width: 150px;
    margin-left: 30%;
  }
`;

export const CheckBox = styled(FormCheckbox)`
  margin-left: 18%;

  @media (max-width: 1024px) {
    margin-left: 30%;
  }
`;

export const RegisteredButton = styled(AlreadyRegistered)`
  align-self: flex-end;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    margin-bottom: 16px;
  }
`;
