import styled from "styled-components";
import backGroundAudio from "../../../assets/audio_background.png";

export const AudioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 100px;
  background: url(${backGroundAudio}) center center no-repeat;
  background-size: contain;
  padding: 0px 30px;
  position: relative;
  width: 100%;
  max-width: 230px;

  .background {
    width: 100%;
    display: block;
  }

  .controls {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 0px;
  }

  @media (min-width: 768px) {
    max-width: 320px;
    padding: 0px 30px;
    height: 150px;
    .controls {
      padding: 0 10px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 400px;
    .controls {
      padding: 0 30px;
    }
  }

  @media (min-width: 1920px) {
    max-width: 530px;
    height: 200px;
  }
`;

export const PlayButton = styled.button`
  width: 5em;
  height: 5em;
  border: none;
  cursor: pointer;
  z-index: 1;
  background: none;
  .play-img {
    width: 100%;
    display: block;
  }

  @media (min-width: 768px) {
    width: 6em;
    height: 6em;
  }

  @media (min-width: 1920px) {
    width: 7em;
    height: 7em;
  }
`;

export const WaveformContainer = styled.div`
  margin-left: 20px;
  width: 100%;
  max-width: 100%;
  height: 40px; 
`;
