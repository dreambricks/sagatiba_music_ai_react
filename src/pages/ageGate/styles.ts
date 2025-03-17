import styled from "styled-components";
import fundoSol from "../../assets/fundo_sol.svg";

export const Container = styled.div`
  display: flex;
  background-image: url(${fundoSol});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
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

export const Button = styled.button`
  background-color: #ff4b15;
  padding: 20px;
  width: 100%;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  color: white;
  font-size: 24px;
  border: transparent;
  cursor: pointer;

  &:active {
    border: 1px solid #ff4b15;
  }
`;
