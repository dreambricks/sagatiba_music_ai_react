import styled from "styled-components";
import CustomButton from "../components/customButton";
import SunSvg from "../../assets/sol.svg";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #ffde2e;
  align-items: center;
  overflow: hidden;
`;

export const Title = styled.h1`
  margin-top: 64px;
  text-align: center;
  font-size: 52px;
  font-family: "Gopher-Bold";

  @media (max-width: 1024px) {
    margin-top: 32px;
    font-size: 24px;
  }
`;

export const FormButton = styled(CustomButton)`
  margin-top: 16px;
  width: 300px;
  margin-left: 18%;

  @media (max-width: 1024px) {
    width: 150px;
    margin-left: 30%;
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

export const SunImage = styled.img.attrs({ src: SunSvg })`
  position: absolute;
  bottom: -105px;
  right: 0;

  @media (max-width: 1024px) {
    bottom: -64px;
    height: 40%;
  }
`;
