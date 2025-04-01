import styled from "styled-components";
import CustomButton from "../components/customButton";
import { ContentContainer } from "./components/contentContainer";

const BOTTOM_CONTAINER_SIZE = "40vh";
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
`;

export const BottomContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${BOTTOM_CONTAINER_SIZE};
  background-color: #ccc;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: ${BOTTOM_CONTAINER_SIZE_MOBILE};
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
    font-size: 14px;
  }
`;

export const Button = styled(CustomButton)`
  width: 300px;
  cursor: default;

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
  gap: 54px;
  position: absolute;
  top: calc(100% - (${BOTTOM_CONTAINER_SIZE}));
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    gap: 24px;
    top: calc(100% - (${BOTTOM_CONTAINER_SIZE_MOBILE}));
  }
`;

export const GifContainer = styled(ContentContainer)``;

export const LyricContainer = styled(ContentContainer)`
  justify-content: center;
  align-items: center;

  background-color: #f9f5ed;
  overflow-y: auto;

  /* Esconde a scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Para Firefox */
  scrollbar-width: none;

  /* Para IE/Edge */
  -ms-overflow-style: none;
`;

export const Gif = styled.img`
  display: flex;
  flex: 1;
`;

export const Lyrics = styled.pre`
  font-size: 18px;
  font-family: "Gopher-Regular";
  text-align: center;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 24px;
  padding: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
