import Lemon from "../../../../assets/sagatiba_image_components/LIMAO.png";
import YellowBk from "../../../../assets/yellow-bk.png";
import { Container } from "../../styles";

export const SendMessage = () => {
    return(
    <Container>
     <section className="send-message">
        <img src={YellowBk} alt="" className="background" />
        <img src={Lemon} alt="" className="lemon" />

        <div className="content">
          <h2>As donas da cachaça já</h2>
          <h2>estão aquecendo a voz.</h2>

          <h3>Escreva abaixo uma mensagem</h3>
          <h3>que vai fazer parte da música</h3>

          <textarea name="message" id="" placeholder="MANDE SEU RECADO AQUI"></textarea>

        </div>
      </section>
    </Container>
    );
}
