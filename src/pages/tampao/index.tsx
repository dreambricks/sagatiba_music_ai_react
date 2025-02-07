import Sagalover from "../../../src/assets/nome_do_sagalover.png";
import { Container } from "./styles";
import Mountains from "../../../src/assets/mountains.png";

export const Tampao = () => {
    return (
        <Container>
    
        <div className="top">
          <img src={Mountains} alt="" />
        </div>

        <div className="content">
          <div className="body">
            <img src={Sagalover} alt="" />

            <p className="type">
            Em breve teremos novidades
            </p>

          </div>
        </div>
      </Container>
    );
};
