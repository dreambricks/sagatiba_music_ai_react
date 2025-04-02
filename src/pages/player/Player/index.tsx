import PlayIcon from "../../../assets/play-btn.svg";
import PauseIcon from "../../../assets/btn-pause.png";
import * as Styled from "./styles";
import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import DownloadBtn from "../../../assets/download_svg.svg";
import Share from "../../../assets/share_orange_svg.svg";

interface AudioPlayerProps {
  audioUrl: string;
  isActive: boolean;
  onPlay: () => void;
  onFinish?: () => void;
  onShare: () => void;
  onDownload: () => void;
}

export const AudioPlayer = ({
  audioUrl,
  isActive,
  onPlay,
  onFinish,
  onShare,
  onDownload,
}: AudioPlayerProps) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (!waveformRef.current) return;

    const wavesurfer = WaveSurfer.create({
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
    });

    wavesurfer.load(audioUrl);
    wavesurferRef.current = wavesurfer;

    wavesurfer.on("finish", () => {
      wavesurfer.seekTo(0);
      onFinish?.();
    });

    return () => wavesurfer.destroy();
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
    <Styled.Container>
      <Styled.AudioContainer>
        <Styled.PlayButton onClick={handleClick}>
          <Styled.PlayImage
            src={isActive ? PauseIcon : PlayIcon}
            alt={isActive ? "Pause" : "Play"}
          />
        </Styled.PlayButton>

        <Styled.WaveformContainer ref={waveformRef} />
      </Styled.AudioContainer>

      <Styled.ActionButton
        src={DownloadBtn}
        alt="Download"
        onClick={onDownload}
      />

      <Styled.ActionButton src={Share} alt="Compartilhar" onClick={onShare} />
    </Styled.Container>
  );
};
