import { Container } from "./style";
import Lemon from "../../../../assets/sagatiba_image_components/LIMAO.png";

export const SendMessage = () => {
    return(
    <Container>
      <div className="top">
      <img src={Lemon} alt="" className="lemon" />
      </div>
      <img alt="" className="banner" />
      <div className="content">

        <div className="text-content">
          <h2>As donas da cachaça já</h2>
          <h2>estão aquecendo a voz.</h2>

          <h3>Escreva abaixo uma mensagem</h3>
          <h3>que vai fazer parte da música</h3>

          <textarea name="message" id="" placeholder="MANDE SEU RECADO AQUI"></textarea>

        </div>
      </div>
    </Container>
    );
}
