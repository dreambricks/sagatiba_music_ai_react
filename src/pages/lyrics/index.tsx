import * as Styled from "./styles";
import Download from "../../assets/download_lyric.gif";
import { useEffect, useRef, useState } from "react";
import { getLyrics, getTaskId } from "../../storage";
import { useWebSocket } from "./useSocket";
import { toast } from "react-toastify";
import { AudioPlayer } from "../player/Player";

// "https://sagatibamusicapi.zapto.org/static/mp3/sagatiba_5dc876b5-070c-4dc9-ba42-ad30cf284602_1f.mp3"

const LOADING_MESSAGES = [
  "Aprendendo estilo musical...",
  "Refinando os acordes...",
  "Carregando inspiração...",
  "Pausa para uma Sagatiba...",
  "Ajustando o tom perfeito...",
  "Criando harmonia mágica...",
  "Coletando dados...",
] as const;

export const LyricsPage = () => {
  const [lyrics, setLyrics] = useState("");
  const [taskId, setTaskId] = useState<number>();
  const [audioUrls, setAudioUrls] = useState<string[]>([]);
  const [loadingText, setLoadingText] = useState("Coletando dados...");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const buttonInterval = useRef<undefined | number>();

  const { message } = useWebSocket(taskId);

  const getTask = () => {
    const taskId = getTaskId();
    console.log(taskId);
    if (taskId !== null) {
      setTaskId(Number(taskId));
    }
  };

  useEffect(() => {
    getTask();
    const item = getLyrics();
    if (item) setLyrics(item);
  }, []);

  useEffect(() => {
    if (!audioUrls.length) {
      let index = 0;
      buttonInterval.current = setInterval(() => {
        setLoadingText(LOADING_MESSAGES[index]);
        index = (index + 1) % LOADING_MESSAGES.length;
      }, 3500);
    } else {
      clearInterval(buttonInterval.current);
      setLoadingText("QUERO FAZER O DOWNLOAD");
    }

    return () => clearInterval(buttonInterval.current);
  }, [audioUrls]);

  useEffect(() => {
    if (message?.audio_urls) {
      setAudioUrls(message.audio_urls);
      // clearLocalStorage();
    }
  }, [message]);

  const handleDownloadMp3 = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Erro ao baixar arquivo`);

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const filename = `sagatiba_${Date.now()}.mp3`;

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro ao baixar os arquivos:", error);
      alert("Erro ao baixar os arquivos: " + (error as Error).message);
    }
  };

  const handleShare = async (music_index: number) => {
    const url = `https://seguenasaga.sagatiba.com/mensagem?task_id=${taskId}&index=${music_index}`;

    if (navigator.share) {
      try {
        await navigator.share({ url });
        console.log("Link compartilhado com sucesso!");
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      handleCopyToClipboard(url);
    }
  };

  const handleCopyToClipboard = (texto: string) => {
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        toast.success("✅ Link copiado para a área de transferência!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
        });
      })
      .catch((err) => console.error("Erro ao copiar:", err));
  };

  const renderTitle = () => {
    if (!audioUrls.length) {
      return (
        <div>
          <Styled.Title>ma.I.A.ra e mar.A.I.sa</Styled.Title>
          <Styled.Title>estão aquecendo a voz!</Styled.Title>
        </div>
      );
    }

    return (
      <div>
        <Styled.Title>Bora seguir na saga?</Styled.Title>
        <Styled.Title>Sua música tá pronta!</Styled.Title>
      </div>
    );
  };

  const renderDescription = () => {
    if (!audioUrls.length) {
      return (
        <div>
          <Styled.Description>
            Sua música pode demorar uns minutinhos pra ficar pronta.
          </Styled.Description>

          <Styled.Description style={{ marginTop: "16px" }}>
            Mas fica de boa que a gente te manda uma mensagem quando estiver
            tudo certo pro play.
          </Styled.Description>
        </div>
      );
    }

    return (
      <div>
        <Styled.Description>
          Mas ó: a inteligência artificial ainda tá aprendendo a viver e
          aperfeiçoando suas criações.
        </Styled.Description>
        <Styled.Description>
          Por isso, geramos duas versões pra você escolher qual mais combina com
          seu rolê.
        </Styled.Description>
        <Styled.Description>
          Quanto mais músicas você criar, mais ela aprende a seguir na saga.
        </Styled.Description>
      </div>
    );
  };

  const formattedLyrics = lyrics
    .replace(/\[(intro|verse|outro)\]|\*|markdown/gi, "")
    .trim();

  return (
    <Styled.Container>
      <Styled.TopContentContainer>
        {renderTitle()}

        {renderDescription()}

        {!audioUrls.length && <Styled.Button title={loadingText} />}

        <Styled.AudiosContainer>
          {audioUrls.slice(0, 2).map((url, idx) => (
            <AudioPlayer
              key={idx}
              audioUrl={url}
              isActive={activeIndex === idx}
              onPlay={() =>
                setActiveIndex((prev) => (prev === idx ? null : idx))
              }
              onFinish={() => setActiveIndex(null)}
              onShare={() => handleShare(idx)}
              onDownload={() => handleDownloadMp3(url)}
            />
          ))}
        </Styled.AudiosContainer>
      </Styled.TopContentContainer>

      <Styled.BottomContentContainer>
        <Styled.CenteredContainer>
          <Styled.GifContainer>
            <Styled.Gif src={Download} />
          </Styled.GifContainer>

          <Styled.LyricContainer>
            <Styled.Lyrics>{formattedLyrics}</Styled.Lyrics>
          </Styled.LyricContainer>
        </Styled.CenteredContainer>

        <Styled.DisclaimerText>
          Beba com moderação. Não compartilhe com menores de 18 anos.
        </Styled.DisclaimerText>
      </Styled.BottomContentContainer>
    </Styled.Container>
  );
};
