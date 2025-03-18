import { forwardRef } from "react";
import Invite from "../../../../assets/invite.png";
import { Container, CreateButton, LogoutButton } from "./styles";

interface SectionProps {
  sectionId: string;
  onButtonClick: () => void;
}

export const Banner = forwardRef<HTMLDivElement, SectionProps>(
  ({ sectionId, onButtonClick }, ref) => {
    return (
      <Container ref={ref} id={sectionId}>
        <div className="content">
          <img alt="banner" className="banner" />

          <div className="texts-container">
            <h1>O rolê te chama!</h1>
            <p>
              Sagatiba e Ma<span>IA</span>ra e Mar<span>AI</span>sa
              convocaram a inteligência
              artificial pra você convidar
              seus amigos pro rolê
              com música boa e cachaça.
              Solte  a criatividade
              e segue na saga
            </p>

            <CreateButton title="CRIE SUA MÚSICA" onClick={onButtonClick} />
          </div>

          <div className="invite" onClick={onButtonClick}>
            <img src={Invite} alt="invite" className="invite" />
          </div>

          <LogoutButton title="LOGOFF" onClick={onButtonClick} />

        </div>
      </Container>
    );
  }
);
