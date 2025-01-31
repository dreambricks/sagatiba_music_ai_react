import { Container } from "./styles";
import Socials from "../../../../assets/socials.png";

export const Lyrics = () => {
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
            <p>
              Lorem ipsum dolor sit amet, (Primeira Estrofe) consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat. (Refrão) Duis autem vel
              eum iriure dolor Lorem ipsum dolor sit amet, (Primeira Estrofe)
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              (Refrão) Duis autem vel eum iriure dolor Lorem ipsum dolor sit
              amet, (Primeira Estrofe) consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. (Refrão) Duis autem vel eum iriure dolor Lorem ipsum
              dolor sit amet, (Primeira Estrofe) consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. (Refrão) Duis autem vel eum iriure dolor
            </p>
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
