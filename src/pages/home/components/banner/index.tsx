import { forwardRef } from "react";
import Invite from "../../../../assets/invite.png";
import { Container, CreateButton, LogoutButton } from "./styles";
import { useSession } from "../../../../context/sessionContext";
import { useNavigate } from "react-router";

interface SectionProps {
  sectionId: string;
  onCreateMusic: () => void;
}

export const Banner = forwardRef<HTMLDivElement, SectionProps>(
  ({ sectionId, onCreateMusic }, ref) => {
    const navigate = useNavigate();
    const { user, updateUser } = useSession();

    const handleLogoff = () => {
      updateUser(null);
    };

    const handleCreateMusic = () => {
      if (!user) {
        navigate("/register");
        return;
      }

      onCreateMusic();
    };

    return (
      <Container ref={ref} id={sectionId}>
        <div className="content">
          <img alt="banner" className="banner" />

          <div className="texts-container">
            <h1>O rolê te chama!</h1>
            <p>
              Sagatiba e Ma<span>IA</span>ra e Mar<span>AI</span>sa convocaram a
              inteligência artificial pra você convidar seus amigos pro rolê com
              música boa e cachaça. Solte a criatividade e segue na saga
            </p>

            <CreateButton title="CRIE SUA MÚSICA" onClick={handleCreateMusic} />
          </div>

          <div className="invite">
            <img src={Invite} alt="invite" className="invite" />
          </div>

          {user && <LogoutButton title="LOGOFF" onClick={handleLogoff} />}
        </div>
      </Container>
    );
  }
);
