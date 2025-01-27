import MusicBackground from "../../../../assets/gerar_musica_background.png";
import MusicIcon from "../../../../assets/music-icon.png";
import { Container } from "../../styles";

export const GenerateMusic = () => {
    return(
        <Container>
        <section className="generate-music">
        <img src={MusicBackground} alt="" />

        <div className="content">
            <p>Tá na hora de Sagatibar!</p>
          <button>
            GERAR MÚSICA
            <img src={MusicIcon} alt="" />
          </button>
        </div>
      </section>
      </Container>
    );
}
