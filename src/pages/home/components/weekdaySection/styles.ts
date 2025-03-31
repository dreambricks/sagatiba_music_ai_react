import styled from "styled-components";
import BgImg from "../../../../assets/bg_datarole.png";
import CustomButton from "../../../components/customButton";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background-image: url(${BgImg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: space-evenly;
`;

export const WeekDaysContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
    width: 100%;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  color: #f15a31;
  font-size: 34px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const NextButton = styled(CustomButton)`
  width: 200px;
`;
