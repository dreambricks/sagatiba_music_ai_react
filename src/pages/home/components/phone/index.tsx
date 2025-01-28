import { Container } from "./styles";
import LoadingBottle from "../../../../assets/loading-bottle.png";
import Whatsapp from "../../../../assets/whatsapp1.png";
import { useState } from "react";

export const Phone = () => {
  const [number, setNumber] = useState("");

  function aplicarMascaraTelefone(val: string) {
    // Remove qualquer caractere que não seja número
    console.log(val);
    const numeros = val.replace(/\D/g, "");

    // Aplica a máscara no formato "11 9 8888-8888"
    const mascara = numeros
      .replace(/^(\d{2})(\d{1})(\d{4})(\d{0,4})$/, "$1 $2 $3-$4")
      .trim();

    setNumber(mascara);
  }

  function validarFormatoTelefone(telefone) {
    // Regex para verificar o formato "XX 9 XXXX-XXXX", onde o "9" é obrigatório
    const regex = /^\d{2} 9 \d{4}-\d{4}$/;
    return regex.test(telefone);
  }

  return (
    <Container>
      <div className="content">
        <div className="phone">
          <p>Antes da música ser gerada, precisamos do seu WhatsApp.</p>

          <div className="button">
            <img src={Whatsapp} alt="" />
            <input
              type="text"
              name="phone"
              value={number}
              maxLength={14}
              onChange={(e) => aplicarMascaraTelefone(e.target.value)}
            />
          </div>

          <p>
            Fica de boa que não vamos ser aquele contatinho que fica te enchendo
            de mensagem.
          </p>
        </div>

        <div className="loading">
          <img src={LoadingBottle} alt="" />
        </div>

        <div className="music-message">
          <p>Assim que a música tiver pronta, a gente manda um zap pra você.</p>
          <span>Isso pode demorar alguns minutos.</span>
        </div>
      </div>
    </Container>
  );
};
