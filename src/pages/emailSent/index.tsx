import { Container } from "./styles";
import Mountains from "../../../src/assets/mountains.png";

export const EmailSent = () => {

  return (
    <Container>
      <div className="top">
        <img src={Mountains} alt="Montanhas" />
      </div>

      <div className="content">
        <div className="card">
          <div className="body">
            <h1 className="type">Um link de validação foi enviado para sua caixa de mensagens </h1>
            <span>Verifique sua caixa de spam</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
