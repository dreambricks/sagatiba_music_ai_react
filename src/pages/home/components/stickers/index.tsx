import { Container } from "./styles";
import StickersImg from "../../../../assets/stickers.png";

export const Stickers = () => {
  const array = Array.from({ length: 15 }, () => "item");
  return (
    <Container>
      <div className="content">
        <p>
          ENQUANTO ESPERA,
          <br /> QUE TAL JÁ AUMENTAR SEU ACERVO DE FIGURINHAS NO ZAP?
        </p>

        <div className="stickers">
          {array.map((_, index) => (
            <img src={StickersImg} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};
