import styled from "styled-components";
import HomeBg from "../../../../assets/home-bg.png";
import HomeBgMobile from "../../../../assets/mobile/home-bg-mobile.png";
import CustomButton from "../../../components/customButton";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f9f5ed;
  align-items: center;
  overflow: hidden;
`;

export const BgImage = styled.div`
  margin-top: 24px;
  height: 80%;
  width: 90%;
  background-image: url(${HomeBg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
    background-image: url(${HomeBgMobile});
  }
`;

export const CreateButton = styled(CustomButton)`
  width: 300px;
  margin-left: -60px;
  margin-top: 16px;

  @media (max-width: 1024px) {
    width: 250px;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    width: 200px;
    margin-left: 0;
  }
`;
