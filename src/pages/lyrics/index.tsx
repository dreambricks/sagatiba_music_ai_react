import { Container } from "./styles";
import Insta from "../../assets/icone_insta.png";
import Whats from "../../assets/icone_whats.png";

import { useEffect, useRef, useState } from "react";
import { getLyrics, getPhoneFromCookie } from "../../storage";
import { generate, getTaskId } from "../../service";
import { useWebSocket } from "./useSocket";

export const LyricsPage = () => {
  const [lyrics, setLyrics] = useState("");
  const [status, setStatus] = useState("");
  const [taskId, setTaskId] = useState();
  const [buttonText, setButtonText] = useState("GERANDO MÚSICA");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
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

      console.log({ result });
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

  // useEffect(() => {
  //   const phone = getPhoneFromCookie();
  //   if (phone) {
  //     interval.current = setInterval(pollForTaskCompletion, 5000);

  //     return () => clearInterval(interval.current);
  //   }
  // }, []);

  useEffect(() => {
    const phone = getPhoneFromCookie();

    if (status && phone) {
      interval.current = setInterval(pollForTaskCompletion, 5000);

      return () => clearInterval(interval.current);
    }
  }, [status]);

   // Função para baixar o MP3 via fetch
   const downloadMp3 = async (url: string) => {
    try {
        const maxSize = 1177 * 1024;

        setButtonText("FAZENDO DOWNLOAD");
        setIsBtnDisabled(true);

        const response = await fetch(url);
        if (!response.ok) throw new Error("Erro na resposta da rede");

        const reader = response.body?.getReader();
        if (!reader) throw new Error("Falha ao obter o leitor do stream");

        let receivedLength = 0;
        let chunks: Uint8Array[] = [];

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            if (receivedLength + value.length > maxSize) {
                chunks.push(value.slice(0, maxSize - receivedLength));
                break;
            }

            chunks.push(value);
            receivedLength += value.length;
        }

        const blob = new Blob(chunks, { type: "audio/mp3" });
        const blobUrl = window.URL.createObjectURL(blob);

        const filename = `sagatiba_${Date.now()}.mp3`;

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setButtonText("QUERO FAZER O DOWNLOAD");
        setIsBtnDisabled(false);
    } catch (error) {
        console.error("Erro ao baixar o arquivo:", error);
        alert("Erro ao baixar o arquivo: " + error.message);
        setButtonText("QUERO FAZER O DOWNLOAD");
        setIsBtnDisabled(false);
    }
  };

  useEffect(() => {
    if (message?.audio_url) {
      setAudioUrl(message.audio_url);
      downloadMp3(message.audio_url);
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

        <button disabled={isBtnDisabled} onClick={() => audioUrl && downloadMp3(audioUrl)}>{buttonText}</button>

        <div className="lyrics">
          <div className="lyrics-holder">
            <pre>{lyrics}</pre>
          </div>
        </div>

        <div className="share">
          <p>compartilhe </p>

          <div className="socials">
            <img src={Whats} alt="" />
            <img src={Insta} alt="" />
          </div>
        </div>

        <p className="advise">
          Mas não esquece: rolê bom, é rolê consciente. <br />
          Só compartilhe com maiores de 18 anos.
        </p>
      </div>
    </Container>
  );
};
