import styled from "styled-components";
import Balde from "../../../../assets/balde_background.png";
import CustomButton from "../../../components/customButton";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background-color: #faf5ed;

  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column-reverse;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 35%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px;
  }
`;

export const LeftImage = styled.img.attrs({ src: Balde })`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
`;

export const Title = styled.h2`
  font-family: "Gopher-Bold";
  color: #f15a31;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ChooseDayText = styled.h5`
  margin-top: 64px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 32px;
  }
`;

export const NextButton = styled(CustomButton)`
  width: 200px;
  margin-top: 32px;
  align-self: flex-end;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  width: 390px;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OptionButton = styled.button<{
  selected: boolean;
  selectedColor: string;
}>`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 16px 36px;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid #ccc;
  background-color: ${(props) =>
    props.selected ? props.selectedColor : "#FFFFFF"};
  color: ${(props) => (props.selected ? "black" : "#555")};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.selected ? props.selectedColor : "#f0f0f0"};
  }
`;
