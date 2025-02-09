import { forwardRef } from "react";
import GerarMusica from "../../../../assets/gerar-musica.svg";
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
     
            <img className="gerar-musica" src={GerarMusica} alt=""  onClick={() => {
              generateMusic();
              onFill();
            }}/>
         
        </div>
      </section>
    </Container>
    );
  }
);


