import { forwardRef } from "react";
import Invite from "../../../../assets/invite.png";
import { Container } from "./styles";

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

          <div className="invite" onClick={onButtonClick}>
            <img src={Invite} alt="invite" className="invite" />
          </div>
        </div>
      </Container>
    );
  }
);
