import PlayIcon from "../../../assets/play-btn.svg";
import PauseIcon from "../../../assets/btn-pause.png";

import { AudioContainer, PlayButton, WaveformContainer } from "./styles";
import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

interface AudioPlayerProps {
  audioUrl: string;
  isActive: boolean;
  onPlay: () => void;
}

export const AudioPlayer = ({ audioUrl, isActive, onPlay }: AudioPlayerProps) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (!waveformRef.current) return;

    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#fde047",
      progressColor: "#f97316",
      cursorColor: "transparent",
      barWidth: 3,
      barGap: 3,
      barRadius: 30,
      height: "auto",
      barAlign: "bottom",
      normalize: true,
      fillParent: true,
    });

    wavesurferRef.current.load(audioUrl);

    return () => wavesurferRef.current?.destroy();
  }, [audioUrl]);

  useEffect(() => {
    if (wavesurferRef.current) {
      if (isActive) {
        wavesurferRef.current.play();
      } else {
        wavesurferRef.current.pause();
      }
    }
  }, [isActive]);

  const handleClick = () => {
    onPlay();
  };

  return (
    <AudioContainer>
      <div className="controls">
        <PlayButton onClick={handleClick}>
          {isActive ? (
            <img src={PauseIcon} alt="Pause" className="play-img" />
          ) : (
            <img src={PlayIcon} alt="Play" className="play-img" />
          )}
        </PlayButton>
        <WaveformContainer ref={waveformRef} />
      </div>
    </AudioContainer>
  );
};
