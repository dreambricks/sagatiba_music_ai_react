/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "./styles";
import Download from "../../assets/download_lyric.gif";
import { useEffect, useRef, useState } from "react";
import { getLyrics, getTaskId } from "../../storage";
import { useWebSocket } from "./useSocket";
import { CustomButton } from "./components/custom-button";
import { toast } from "react-toastify";
import { AudioPlayer } from "../player/Player";
import DownloadBtn from "../../assets/download_svg.svg";
import Share from "../../assets/share_orange_svg.svg";


export const LyricsPage = () => {
  const [lyrics, setLyrics] = useState("");
  const [taskId, setTaskId] = useState();
  const [audioUrls, setAudioUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [buttonLoadingText, setButtonLoadingText] = useState("Coletando dados...");

  const buttonInterval = useRef<undefined | number>();

  const { message } = useWebSocket(taskId);

  const loadingMessages = [
    "Aprendendo estilo musical...",
    "Refinando os acordes...",
    "Carregando inspiração...",
    "Pausa para uma Sagatiba...",
    "Ajustando o tom perfeito...",
    "Criando harmonia mágica...",
    "Coletando dados...",
  ];

  // const generateId = async () => {
  //   try {
  //     const response = await generate();

  //     if (response.status === "Sua tarefa foi enfileirada") {
  //       setTaskId(response.task_id);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getTask = () => {
    const taskId = getTaskId();
    console.log(taskId);
    if (taskId != null) {
      setTaskId(taskId as any);
    }
  }

  useEffect(() => {
    getTask();
    const item = getLyrics();
    if (item) setLyrics(item);
  }, []);


  useEffect(() => {
    if (loading) {
      let index = 0;
      buttonInterval.current = setInterval(() => {
        setButtonLoadingText(loadingMessages[index]);
        index = (index + 1) % loadingMessages.length;
      }, 3500);
    } else {
      clearInterval(buttonInterval.current);
      setButtonLoadingText("QUERO FAZER O DOWNLOAD");
    }

    return () => clearInterval(buttonInterval.current);
  }, [loading]);


  useEffect(() => {
    if ((message as any)?.audio_urls) {
      setAudioUrls((message as any).audio_urls);
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
        await navigator.share({
          url,
        });
        console.log("Link compartilhado com sucesso!");
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
      }
    } else {
      copiarParaAreaDeTransferencia(url);
    }
  };

  const copiarParaAreaDeTransferencia = (texto: string) => {
    navigator.clipboard.writeText(texto)
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
    <Container>
      <div className="content">
        {loading &&
          <h1>ESTAMOS COMPONDO SUA MÚSICA. AGUARDE, VAI LEVAR POUCOS MINUTOS.</h1>
        }
        {loading ?
          < p className="description">
            Bora seguir na saga? Aguarde enquanto geramos a sua música.
          </p>
          :
          <div className="content">
            <h1>Sua música está pronta!</h1>
          </div>
        }

        {loading
          ?
          <CustomButton className="button-phrases"
            disabled={loading}
          >
            {buttonLoadingText}
          </CustomButton>
          :
          <div className="players">
            <div className="container-player">
              {audioUrls.length >= 1 && <AudioPlayer audioUrl={audioUrls[0]} />}
              <div className="socials">
                <img src={DownloadBtn} alt="" onClick={() => audioUrls.length > 0 && downloadMp3File(audioUrls[0])} />
                <img src={Share} alt="" onClick={() => compartilharLink(0)} />
              </div>
            </div>

            <div className="container-player">
              {audioUrls.length >= 1 && <AudioPlayer audioUrl={audioUrls[1]} />}
              <div className="socials">
                <img src={DownloadBtn} alt="" onClick={() => audioUrls.length > 0 && downloadMp3File(audioUrls[1])} />
                <img src={Share} alt="" onClick={() => compartilharLink(1)} />
              </div>
            </div>
          </div>
        }

        <div className="container-info">
          <div className="download-img">
            <img src={Download} alt="" />
          </div>

          <div className="lyrics">
            <div className="lyrics-holder">
              <pre>{lyrics.replace(/\[(intro|verse|outro)\]|\*|markdown/gi, "").trim()}</pre>
            </div>
          </div>
        </div>

        <p className="advise">
          Beba com moderação. <br />
          Não compartilhe com menores de 18 anos.
        </p>
      </div>
    </Container >
  );
};
