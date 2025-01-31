import MusicIcon from "../../../../assets/music-icon.png";
import { Container } from "./style";

interface GenerateMusicProps {
  generateMusic: () => void;
}

export const GenerateMusic = ({ generateMusic }: GenerateMusicProps) => {
  return (
    <Container>
      <section className="generate-music">
        <img className="banner" alt="" />

        <div className="content">
          <p>Tá na hora de Sagatibar!</p>
          <button onClick={generateMusic}>
            GERAR MÚSICA
            <img src={MusicIcon} alt="" />
          </button>
        </div>
      </section>
    </Container>
  );
};
