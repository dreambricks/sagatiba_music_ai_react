import { forwardRef } from "react";
import * as Styled from "./styles";
import { useNavigate } from "react-router";
import { useSession } from "../../../../context/sessionContext";

type Props = {
  onGenerateMusic?: () => void;
};

const MainSection = forwardRef<HTMLDivElement, Props>(
  ({ onGenerateMusic }, ref) => {
    const navigate = useNavigate();
    const { user, updateUser } = useSession();

    const handleCreateMusic = () => {
      if (!user) {
        navigate("/register");
        return;
      }

      if (onGenerateMusic) {
        onGenerateMusic();
      }
    };

    const handleUserSession = () => {
      if (user) {
        updateUser(null);
        return;
      }

      navigate("/login");
    };

    return (
      <Styled.Container ref={ref}>
        <Styled.LogOffButton
          title={user ? "LOGOFF" : "LOGIN"}
          onClick={handleUserSession}
        />

        <Styled.BgImage />

        <Styled.CreateButton
          title="CRIE SUA MÚSICA"
          onClick={handleCreateMusic}
        />
      </Styled.Container>
    );
  }
);

export default MainSection;
