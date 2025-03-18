import { Container } from "./style";
import Lemon from "../../../../assets/sagatiba_image_components/LIMAO.png";
import { forwardRef } from "react";
import Send from "../../../../assets/enviar.svg";


interface SendMessageProps {
  onAddMessage: (val: string) => void;
  onFill: () => void;
}

export const SendMessage = forwardRef<HTMLDivElement, SendMessageProps>(
  ({ onAddMessage, onFill }, ref) => {
  return (
    <Container>
      <div className="top" ref={ref}>
        <img src={Lemon} alt="" className="lemon" />
      </div>
      <img alt="" className="banner" />
      <div className="content">
        <div className="text-content">
          <h2>As donas da cachaça já</h2>
          <h2>estão aquecendo a voz.</h2>

          <h3>Escreva abaixo uma mensagem</h3>
          <h3>que vai fazer parte da música</h3>

          <textarea
            name="message"
            id=""
            placeholder="MANDE SEU RECADO AQUI"
            onChange={(e) => onAddMessage(e.target.value)}
            maxLength={150}
          ></textarea>
          <img className="send" src={Send} alt="Siga para o próximo passo" onClick={onFill}/>  
          
        </div>
      </div>
    </Container>
    );
  }
);
