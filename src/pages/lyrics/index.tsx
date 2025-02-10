/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "./styles";
// import Insta from "../../assets/icone_insta.png";
// import Whats from "../../assets/icone_whats.png";
import Download from "../../assets/download-music.png";

import { useEffect, useRef, useState } from "react";
import { getLyrics, getPhoneFromCookie } from "../../storage";
import { generate, getTaskId } from "../../service";
import { useWebSocket } from "./useSocket";
import { CustomButton } from "./components/custom-button";

export const LyricsPage = () => {
  const [lyrics, setLyrics] = useState("");
  const [status, setStatus] = useState("");
  const [taskId, setTaskId] = useState();
  const [buttonText, setButtonText] = useState("GERANDO MÚSICA");
  const [audioUrls, setAudioUrls] = useState<string[]>([]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const interval = useRef<undefined | number>();

  const { message } = useWebSocket(taskId);

  const generateId = async () => {
    try {
      const response = await generate();

      setStatus(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  async function pollForTaskCompletion() {
    try {
      const result = await getTaskId();

      if (result) {
        clearInterval(interval.current);
      }

      setTaskId(result.task_id);
    } catch (error) {
      console.error("Erro ao aguardar a conclusão da tarefa:", error);
      return null;
    }
  }

  useEffect(() => {
    const item = getLyrics();
    if (item) setLyrics(item);
    generateId();
  }, []);

  useEffect(() => {
    const phone = getPhoneFromCookie();

    if (status && phone) {
      interval.current = setInterval(pollForTaskCompletion, 5000);

      return () => clearInterval(interval.current);
    }
  }, [status]);

  // Função para baixar o MP3 via fetch
  const downloadMp3Files = async (urls: string[]) => {
    try {
      setButtonText("FAZENDO DOWNLOAD");
      setIsBtnDisabled(true);

      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro ao baixar arquivo ${i + 1}`);

        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const filename = `sagatiba_${Date.now()}_${i + 1}.mp3`;

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setButtonText("QUERO FAZER O DOWNLOAD");
      setIsBtnDisabled(false);
    } catch (error) {
      console.error("Erro ao baixar os arquivos:", error);
      alert("Erro ao baixar os arquivos: " + (error as any).message);
      setButtonText("QUERO FAZER O DOWNLOAD");
      setIsBtnDisabled(false);
    }
  };

  useEffect(() => {
    if ((message as any)?.audio_urls) {
      setAudioUrls((message as any).audio_urls);
      downloadMp3Files((message as any).audio_urls);
    }
  }, [message]);

  return (
    <Container>
      <div className="content">
        <h1>SUA MÚSICA ESTÁ PRONTA.</h1>

        <p className="description">
          Bora seguir na saga? Você já deve ter recebido uma mensagem no
          WhatsApp. Agora é só compartilhar com a pessoa que inspirou esse
          convite.
        </p>

        <CustomButton
          disabled={isBtnDisabled}
          onClick={() => audioUrls.length > 0 && downloadMp3Files(audioUrls)}
        >
          {buttonText}
        </CustomButton>

        <div className="container-info">
          <div className="download-img">
            <img src={Download} alt="" />
          </div>

          <div className="lyrics">
            <div className="lyrics-holder">
              <pre>{lyrics}</pre>
            </div>
          </div>
        </div>

        <div className="share">
          <p>compartilhe </p>

          {/* <div className="socials">
            <img src={Whats} alt="" />
            <img src={Insta} alt="" />
          </div> */}
        </div>

        <p className="advise">
          Mas não esquece: rolê bom, é rolê consciente. <br />
          Só compartilhe com maiores de 18 anos.
        </p>
      </div>
    </Container>
  );
};
