import { BgImage, Container, CreateButton } from "./styles";
import { useNavigate } from "react-router";

export const GuestUserBanner = () => {
  const navigate = useNavigate();

  const handleCreateMusic = () => {
    navigate("/register");
  };

  return (
    <Container>
      <BgImage />

      <CreateButton title="CRIE SUA MÚSICA" onClick={handleCreateMusic} />
    </Container>
  );
};
