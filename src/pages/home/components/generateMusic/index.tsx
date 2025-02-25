import { forwardRef } from "react";
import GerarMusica from "../../../../assets/gerar-musica.svg";
import { Container } from "./style";
import Loading from "../../../../assets/spinner_sem_fundo_ver2.gif";

interface GenerateMusicProps {
  generateMusic: () => void;
  loading: boolean;
  onFill: () => void;
}

export const GenerateMusic = forwardRef<HTMLDivElement, GenerateMusicProps>(
  ({ generateMusic, loading, onFill }, ref) => {
    return (
      <Container>
        <section className="generate-music">
          <img className="banner" alt="" />

          <div className="content" ref={ref}>
            <p>Tá na hora de Sagatibar!</p>

            <img className="gerar-musica" src={GerarMusica} alt="" onClick={() => {
              generateMusic();
              onFill();
            }} />

            <div className="loading">
              {loading && <img src={Loading} className="loading-gif" />}
            </div>

          </div>
        </section>
      </Container>
    );
  }
);


