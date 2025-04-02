import styled from "styled-components";
import CustomButton from "../components/customButton";
import { ContentContainer } from "./components/contentContainer";
import LyricsBg from "../../assets/lyrics_background.png";

const BOTTOM_CONTAINER_SIZE = "30vh";
const BOTTOM_CONTAINER_SIZE_MOBILE = "30vh";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: white;
`;

export const TopContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 32px;
  padding: 32px;

  @media (max-width: 768px) {
    gap: 24px;
    padding: 16px;
    margin-top: 10%;
  }
`;

export const BottomContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${BOTTOM_CONTAINER_SIZE};
  justify-content: center;
  align-items: center;
  background-image: url(${LyricsBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% ${BOTTOM_CONTAINER_SIZE};

  @media (max-width: 768px) {
    height: ${BOTTOM_CONTAINER_SIZE_MOBILE};
    background-size: 100% ${BOTTOM_CONTAINER_SIZE_MOBILE};
  }
`;

export const Title = styled.h1`
  font-family: "Gopher-Bold";
  color: #f15a31;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  text-align: center;
  color: black;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Button = styled(CustomButton)`
  width: 300px;
  cursor: default;

  &:active {
    border: none;
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const DisclaimerText = styled.span`
  position: absolute;
  bottom: 16px;
  font-size: 12px;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  left: 50%;
  top: calc(100% - (${BOTTOM_CONTAINER_SIZE}));
  justify-content: center;
  align-items: center;
  gap: 54px;
  transform: translate(-50%, -50%);
  padding: 16px;

  @media (max-width: 1440px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    gap: 8px;
    top: calc(100% - (${BOTTOM_CONTAINER_SIZE_MOBILE}));
  }
`;

export const GifContainer = styled(ContentContainer)``;

export const LyricContainer = styled(ContentContainer)`
  background-color: #f9f5ed;
  padding: 8px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  /* Esconde a scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const Gif = styled.img`
  display: flex;
  flex: 1;
`;

export const Lyrics = styled.pre`
  font-size: 18px;
  font-family: "Gopher-Regular";
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
  flex: 1;
  min-height: min-content;

  /* Centraliza visualmente o conteúdo quando cabe no container */
  display: flex;
  flex-direction: column;
  justify-content: safe center; /* Usa 'safe' para evitar cortes */

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const AudiosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
