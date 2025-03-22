import { Container } from "./style";
import Lemon from "../../../../assets/sagatiba_image_components/LIMAO.png";
import { forwardRef } from "react";
import NextButton from "../../../components/nextButton";


interface SendMessageProps {
  onAddMessage: (val: string) => void;
  onFill: () => void;
}

export const SendMessage = forwardRef<HTMLDivElement, SendMessageProps>(
  ({ onAddMessage, onFill }, ref) => {
    return (
      <Container  ref={ref}>
        <div className="top">
          <img src={Lemon} alt="" className="lemon" />
        </div>
        <img alt="" className="banner" />
        <div className="content">

          <div className="text-content">

            <h2>Preparado para criar o convite</h2>
            <h2>mais afinado do rolê?</h2>

            <h3>Escreva a mensagem do convite</h3>
            <h3>e deixe a inteligência artificial transformar</h3>

            <h3>sua ideia em uma música inspirada</h3>
            <h3>na voz das donas da cachaça.</h3>

            <textarea
              name="message"
              id=""
              placeholder="MANDE SEU RECADO AQUI"
              onChange={(e) => onAddMessage(e.target.value)}
              maxLength={150}
            ></textarea>
            {/* <img className="send" src={Send} alt="Siga para o próximo passo" onClick={onFill}/>  */}
          </div>
          
          <NextButton style={{alignSelf: 'center'}} title="PRÓXIMO" onClick={onFill} />

        </div>
      </Container>
    );
  }
);
