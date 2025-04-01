import * as Styled from "./styles";
import Download from "../../assets/download_lyric.gif";
import { useEffect, useRef, useState } from "react";
import { getLyrics, getTaskId } from "../../storage";
import { useWebSocket } from "./useSocket";
import { toast } from "react-toastify";
import { AudioPlayer } from "../player/Player";
import DownloadBtn from "../../assets/download_svg.svg";
import Share from "../../assets/share_orange_svg.svg";

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
  const [loading, setLoading] = useState(true);
  const [buttonLoadingText, setButtonLoadingText] =
    useState("Coletando dados...");
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
    if (loading) {
      let index = 0;
      buttonInterval.current = setInterval(() => {
        setButtonLoadingText(LOADING_MESSAGES[index]);
        index = (index + 1) % LOADING_MESSAGES.length;
      }, 3500);
    } else {
      clearInterval(buttonInterval.current);
      setButtonLoadingText("QUERO FAZER O DOWNLOAD");
    }

    return () => clearInterval(buttonInterval.current);
  }, [loading]);

  useEffect(() => {
    if (message?.audio_urls) {
      setAudioUrls(message.audio_urls);
      setLoading(false);
      // clearLocalStorage();
    }
  }, [message]);

  const downloadMp3File = async (url: string) => {
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

  const compartilharLink = async (music_index: number) => {
    const url = `https://seguenasaga.sagatiba.com/mensagem?task_id=${taskId}&index=${music_index}`;

    if (navigator.share) {
      try {
        await navigator.share({ url });
        console.log("Link compartilhado com sucesso!");
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      copiarParaAreaDeTransferencia(url);
    }
  };

  const copiarParaAreaDeTransferencia = (texto: string) => {
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

  return (
    <Styled.Container>
      <Styled.TopContentContainer>
        <Styled.Title>
          ma.I.A.ra e mar.A.I.sa
          <br />
          estão aquecendo a voz!
        </Styled.Title>

        <Styled.Description>
          Sua música será gerada em até 10 minutinhos
          <br />
          <br /> Fica de boa que, quando ela estiver pronta
          <br />a gente te manda uma mensagem.
        </Styled.Description>

        <Styled.Button title={buttonLoadingText} />
      </Styled.TopContentContainer>

      <Styled.BottomContentContainer>
        <Styled.CenteredContainer>
          <Styled.GifContainer>
            <Styled.Gif src={Download} />
          </Styled.GifContainer>

          <Styled.LyricContainer>
            <Styled.Lyrics>
              {lyrics
                .replace(/\[(intro|verse|outro)\]|\*|markdown/gi, "")
                .trim()}
            </Styled.Lyrics>
          </Styled.LyricContainer>
        </Styled.CenteredContainer>

        <Styled.DisclaimerText>
          Beba com moderação. Não compartilhe com menores de 18 anos.
        </Styled.DisclaimerText>
      </Styled.BottomContentContainer>
    </Styled.Container>
  );

  return (
    <Styled.Container>
      {loading ? (
        <Styled.TopContentContainer>
          <Styled.Title>
            ma.I.A.ra e mar.A.I.sa
            <br />
            estão aquecendo a voz!
          </Styled.Title>

          <Styled.Description>
            Sua música será gerada em até 10 minutinhos
          </Styled.Description>

          <Styled.Description>
            Fica de boa que, quando ela estiver pronta
            <br />a gente te manda uma mensagem.
          </Styled.Description>

          <Styled.Button title={buttonLoadingText} />
        </Styled.TopContentContainer>
      ) : (
        <>
          <h1>Bora seguir na saga? Sua música tá pronta!</h1>
          <p>
            Mas ó: a inteligência artificial ainda tá aprendendo a viver e
            aperfeiçoando suas criações. Por isso, geramos duas versões pra você
            escolher qual mais combina com seu rolê.
          </p>
          <p>
            Quanto mais músicas você criar, mais ela aprende a seguir na saga
          </p>
        </>
      )}
      {loading ? (
        <></>
      ) : (
        // <Styled.Button title={buttonLoadingText} />
        // <CustomButton className="button-phrases" disabled={loading}>
        //   {buttonLoadingText}
        // </CustomButton>

        <>
          {audioUrls.slice(0, 2).map((url, idx) => (
            <>
              <AudioPlayer
                audioUrl={url}
                isActive={activeIndex === idx}
                onPlay={() =>
                  setActiveIndex((prev) => (prev === idx ? null : idx))
                }
                onFinish={() => setActiveIndex(null)}
              />

              <img
                src={DownloadBtn}
                alt="Download"
                onClick={() => downloadMp3File(url)}
              />

              <img
                src={Share}
                alt="Compartilhar"
                onClick={() => compartilharLink(idx)}
              />
            </>
          ))}
        </>
      )}
      {/* <img src={Download} alt="Download" /> */}

      <pre>
        {lyrics.replace(/\[(intro|verse|outro)\]|\*|markdown/gi, "").trim()}
      </pre>

      <Styled.DisclaimerText>
        Beba com moderação. Não compartilhe com menores de 18 anos.
      </Styled.DisclaimerText>
    </Styled.Container>
  );
};
