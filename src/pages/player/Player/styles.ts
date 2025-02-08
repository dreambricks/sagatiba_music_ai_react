import styled from "styled-components";
import backGroundAudio from "../../../assets/audio_background.png";

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 80%;
  background: url(${backGroundAudio}) center center no-repeat;
  background-size: contain;
  padding: 20px 30px 20px 20px;
  position: relative;
  width: 100%;
  max-width: 430px;
  gap: 10px;

  .background {
    width: 100%;
    display: block;
  }

  .controls {
    width: 100%;
    max-width: 430px;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    inset: 0;
    padding: 0 40px;
  }
`;

export const PlayButton = styled.button`
  width: 3em;
  height: 3em;
  border: none;
  cursor: pointer;
  background: none;
  left: 100px;
  .play-img {
    width: 100%;
    display: block;
  }
`;

export const WaveformContainer = styled.div`
  margin-left: 1rem;
  left: 150px;
  flex-grow: 1;
  max-height: 128px;
`;
