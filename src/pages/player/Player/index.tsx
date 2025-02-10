import PlayIcon from "../../../assets/play-btn.svg";
import PauseIcon from "../../../assets/btn-pause.png";

import { AudioContainer, PlayButton, WaveformContainer } from "./styles";
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

    wavesurferRef?.current?.load(audioUrl);

    return () => wavesurferRef?.current?.destroy();
  }, []);

  return (
    <AudioContainer>
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
    </AudioContainer>
  );
};
