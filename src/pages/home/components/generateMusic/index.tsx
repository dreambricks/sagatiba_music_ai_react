import { forwardRef, useEffect } from "react";
import GerarMusica from "../../../../assets/gerar-musica.svg";
import { Container } from "./style";
import Loading from "../../../../assets/spinner_sem_fundo_ver2.gif";
import Cristalina from "../../../../assets/CRISTALINA.png";

interface GenerateMusicProps {
  generateMusic: () => void;
  loading: boolean;
  onFill: () => void;
}

export const GenerateMusic = forwardRef<HTMLDivElement, GenerateMusicProps>(
  ({ generateMusic, loading, onFill }, ref) => {

    const preloadImages = (images: string[]) => {
      images.forEach((image: string) => {
        const img = new Image();
        img.src = image;
      });
    };

    useEffect(() => {
      preloadImages([Cristalina, GerarMusica]);
    }, []);

    return (
      <Container>
        <section className="generate-music">
          <img className="banner" alt="" />

          <div className="content" ref={ref}>
            <p>Tá na hora de Sagatibar!</p>

            <img className={loading ? "cristalina" : "gerar-musica"} src={loading ? Cristalina : GerarMusica} alt="" onClick={() => {
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


