import Invite from "../../../../assets/invite.png";
import { Container } from "./styles";

export const Banner = () => {
  return (
    <Container>
      <div className="content">
        <img alt="banner" className="banner" />
        <img src={Invite} alt="invite" className="invite" />
      </div>
    </Container>
  );
};
