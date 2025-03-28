import styled from "styled-components";
import fundoSol from "../../assets/age_gate_bg.png";
import fundoSolMobile from "../../assets/mobile/age_gate_bg_mobile.png";

export const Container = styled.div`
  display: flex;
  background-image: url(${fundoSol});
  background-color: #ffef00;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    background-image: url(${fundoSolMobile});
  }
`;

export const WhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 50px 140px;

  @media (max-width: 768px) {
    margin: 24px;
    width: 80%;
    padding: 24px 16px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SagatibaLogo = styled.img`
  margin-bottom: 36px;

  @media (max-width: 768px) {
    height: 50px;
    margin-bottom: 16px;
  }
`;

export const AgeTextImg = styled.img`
  height: 200px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 16px;
  }
`;
