import { Container } from "./styles";
import LoadingBottle from "../../../../assets/loading-bottle.png";
import Whatsapp from "../../../../assets/whatsapp1.png";

export const Phone = () => {
  return (
    <Container>
      <div className="content">
        <div className="phone">
          <p>Antes da música ser gerada, precisamos do seu WhatsApp.</p>
          <button>
            <img src={Whatsapp} alt="" />
            011 9 8888-7777
          </button>
          <p>
            Fica de boa que não vamos ser aquele contatinho que fica te enchendo
            de mensagem.
          </p>
        </div>

        <div className="loading">
          <img src={LoadingBottle} alt="" />
        </div>

        <div className="music-message">
          <p>Assim que a música tiver pronta, a gente manda um zap pra você.</p>
          <span>Isso pode demorar alguns minutos.</span>
        </div>
      </div>
    </Container>
  );
};
