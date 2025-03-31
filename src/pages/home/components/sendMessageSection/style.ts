import styled from "styled-components";
import CustomButton from "../../../components/customButton";
import BgImg from "../../../../assets/dupla.png";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 10%;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-image: url(${BgImg});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
    background-position: center;
  }
`;

export const GenerateButton = styled(CustomButton)`
  width: 200px;
  align-self: flex-end;
`;

export const Title = styled.h1`
  font-family: "Gopher-Bold";
  color: #f15a31;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.h4`
  text-align: start;
  color: black;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TextArea = styled.textarea`
  background-color: #f9f5ed;
  border: none;
  resize: none;
  height: 150px;
  border-radius: 16px;
  padding: 16px;
  color: black;
  font-family: "Gopher-Regular";

  &::placeholder {
    color: #9c9aa0;
  }

  &:focus {
    outline: 1px solid #9c9aa0;
  }

  @media (max-width: 768px) {
    height: 120px;
  }
`;
