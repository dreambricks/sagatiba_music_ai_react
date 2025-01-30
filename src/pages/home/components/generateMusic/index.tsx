import MusicIcon from "../../../../assets/music-icon.png";
import { Container } from "./style";


export const GenerateMusic = () => {
    return(
        <Container>
        <section className="generate-music">
        <img className="banner" alt="" />

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
