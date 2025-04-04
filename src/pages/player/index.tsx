import DownloadBtn from "../../assets/download_svg.svg";
import Share from "../../assets/share_orange_svg.svg";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { getLyricsToMessage } from "../../service";
import { useLocation } from "react-router";
import Download from "../../assets/download_lyric.gif";
import { AudioPlayer } from "./Player";
import { toast } from "react-toastify";
import Loading from "../../assets/spinner_sem_fundo_ver2.gif";

export const Player = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("task_id");
  const index = params.get("index");
  const [lyrics, setLyrics] = useState("");
  const [audioUrls, setAudioUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    console.log("Executando busca de letras...");

    const fetchLyrics = async () => {
      try {
        if (id) {
          const response = await getLyricsToMessage(id);

          if (response) {
            setLyrics(response.lyrics);
            setAudioUrls(response.audio_urls);
            setLoading(false);
          } else {
            console.error("Resposta nula recebida");
          }
        } else {
          console.error("ID não fornecido");
        }
      } catch (error) {
        console.error("Erro ao buscar letras:", error);
      }
    };
    if (id) {
      fetchLyrics();
    }
  }, [id]);

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
    const url = `https://seguenasaga.sagatiba.com/mensagem?task_id=${id}&index=${music_index}`;

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
        <h1>BORA ESCUTAR UMA MÚSICA?</h1>

        <p className="description">
          Seu amigo Sagalover te mandou uma música feita especialmente pra você,
          pra que você consiga sentir o ritmo da Sagatiba com Maiara e Maraisa!
        </p>

        {index !== null ? (
          <div className="players">
            <div className="container-player">
              {audioUrls.length >= 1 && (
                <AudioPlayer
                  audioUrl={audioUrls[Number(index)]}
                  isActive={activeIndex === Number(index)}
                  onPlay={() => setActiveIndex(prev => (prev === Number(index) ? null : Number(index)))}
                  onFinish={() => setActiveIndex(null)}
                />
              )}
              <div className="socials">
                <img src={DownloadBtn} alt="Download" onClick={() => audioUrls.length > 0 && downloadMp3File(audioUrls[Number(index)])} />
                <img src={Share} alt="Compartilhar" onClick={() => compartilharLink(Number(index))} />
              </div>
            </div>
          </div>
        ) : (
          <div className="players">
            {audioUrls.slice(0, 2).map((url, idx) => (
              <div key={idx} className="container-player">
                <AudioPlayer
                  audioUrl={url}
                  isActive={activeIndex === idx}
                  onPlay={() => setActiveIndex(prev => (prev === idx ? null : idx))}
                  onFinish={() => setActiveIndex(null)}
                />
                <div className="socials">
                  <img src={DownloadBtn} alt="Download" onClick={() => downloadMp3File(url)} />
                  <img src={Share} alt="Compartilhar" onClick={() => compartilharLink(idx)} />
                </div>
              </div>
            ))}
          </div>
        )}

        {loading === false ? (
          <div className="container-info">
            <div className="download-img">
              <img src={Download} alt="Download" />
            </div>
            <div className="lyrics">
              <div className="lyrics-holder">
                <pre>{lyrics.replace(/\[(intro|verse|outro)\]|\*|markdown/gi, "").trim()}</pre>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading">
            <img src={Loading} alt="Carregando..." />
          </div>
        )}

        <p className="advise">
          Beba com moderação. <br />
          Não compartilhe com menores de 18 anos.
        </p>
      </div>
    </Container>
  );
};
