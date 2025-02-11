import styled from "styled-components";

export const FlexSvgButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const SvgStyled = styled.svg`
  width: 250px;
  position: absolute;

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }

  @media (min-width: 1280px) {
    width: 600px;
  }

  @media (min-width: 1920px) {
    width: 777px;
  }
`;

export const ButtonText = styled.span`
  color: white;
  position: relative;
  z-index: 1;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1280px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1920px) {
    font-size: 3rem;
  }
`;

export const LoadingImage = styled.img`
  margin-top: 0.3em;
  width: 2em;
  position: relative;
  z-index: 1;
  align-self: center;
`;
