import { forwardRef } from "react";
import MusicIcon from "../../../../assets/music-icon.png";
import { Container } from "./style";

interface GenerateMusicProps {
  generateMusic: () => void;
  onFill: () => void;
}

export const GenerateMusic = forwardRef<HTMLDivElement, GenerateMusicProps>(
  ({ generateMusic, onFill  }, ref) => {
    return (
      <Container>
      <section className="generate-music">
        <img className="banner" alt=""  />

        <div className="content" ref={ref}>
          <p>Tá na hora de Sagatibar!</p>
          <button
            onClick={() => {
              generateMusic();
              onFill();
            }}
          >
            GERAR MÚSICA
            <img src={MusicIcon} alt="" />
          </button>
        </div>
      </section>
    </Container>
    );
  }
);


