import PlayIcon from "../../../assets/play-btn.svg";
import PauseIcon from "../../../assets/btn-pause.png";

import { Container, PlayButton, WaveformContainer } from "./styles";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface AudioPlayerProps {
  audioUrl: string;
}

export const AudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
      setIsPlaying(false);

      if (wavesurferRef.current?.isPlaying()) {
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current as HTMLElement,
      waveColor: "#fde047",
      progressColor: "#f97316",
      cursorColor: "transparent",
      barWidth: 3,
      barGap: 3,
      barRadius: 3,
      barAlign: "bottom",
    });

    wavesurferRef?.current?.load(audioUrl);

    return () => wavesurferRef?.current?.destroy();
  }, []);

  return (
    <Container>
      <div className="controls">
        <PlayButton onClick={togglePlay}>
          {isPlaying ? (
            <img src={PauseIcon} alt="" className="play-img" />
          ) : (
            <img src={PlayIcon} alt="" className="play-img" />
          )}
        </PlayButton>
        <WaveformContainer ref={waveformRef} />
      </div>
    </Container>
  );
};
