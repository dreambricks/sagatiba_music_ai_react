import styled from "styled-components";
import backGroundAudio from "../../../assets/audio_background.png";

export const Container = styled.div`
  display: flex;
  height: 50px;
  gap: 8px;
`;

export const AudioContainer = styled.div`
  display: flex;
  position: relative;
  background-image: url(${backGroundAudio});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 180px;
  align-items: center;
  gap: 4px;
`;

export const PlayButton = styled.button`
  height: 30px;
  margin-left: 12px;
  align-self: center;
  border: none;
  background: none;
  cursor: pointer;
`;

export const WaveformContainer = styled.div`
  width: 100%;
  height: 75%;
  margin-right: 12px;
`;

export const PlayImage = styled.img`
  height: 30px;
  cursor: pointer;
`;

export const ActionButton = styled.img`
  width: 50px;
  cursor: pointer;
`;
