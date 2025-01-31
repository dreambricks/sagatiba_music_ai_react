import { Container } from "./styles";
import Socials from "../../assets/socials.png";
import { useEffect, useState } from "react";
import { getLyrics } from "../../storage";

export const LyricsPage = () => {
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    const item = getLyrics();

    if (item) setLyrics(item);
  }, []);
  return (
    <Container>
      <div className="content">
        <h1>SUA MÚSICA ESTÁ PRONTA.</h1>

        <p className="description">
          Bora seguir na saga? Você já deve ter recebido uma mensagem no
          WhatsApp. Agora é só compartilhar com a pessoa que inspirou esse
          convite.
        </p>

        <button>QUERO FAZER O DOWNLOAD</button>

        <div className="lyrics">
          <div className="lyrics-holder">
            <pre>{lyrics}</pre>
          </div>
        </div>

        <div className="share">
          <p>compartilhe </p>
          <img src={Socials} alt="" />
        </div>

        <p className="advise">
          Mas não esquece: rolê bom, é rolê consciente. <br />
          Só compartilhe com maiores de 18 anos.
        </p>
      </div>
    </Container>
  );
};
