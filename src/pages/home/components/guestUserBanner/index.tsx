import Invite from "../../../../assets/invite.png";
import { Container, CreateButton, LogoutButton } from "./styles";
import { useSession } from "../../../../context/sessionContext";
import { useNavigate } from "react-router";
import Mountains from "../../../../assets/MONTANHA2.png";


export const GuestUserBanner = () => {
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
  };

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#f05a30" }}>
      <Container>
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

          {user ? (
            <LogoutButton title="LOGOFF" onClick={handleLogoff} />
          ) : (
            <LogoutButton title="LOGIN" onClick={handleCreateMusic} />
          )}
        </div>
        <div className="top">
          <img src={Mountains} alt="" />
        </div>

      </Container>
    </div>
  );
}
