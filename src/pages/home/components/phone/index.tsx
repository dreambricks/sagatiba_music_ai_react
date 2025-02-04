import { Container } from "./styles";
import LoadingBottle from "../../../../assets/CRISTALINA.png";
import Whatsapp from "../../../../assets/whatsapp1.png";
import { forwardRef, useState } from "react";
import Loading from "../../../../assets/spinner_sem_fundo_ver2.gif";

interface PhoneProps {
  addPhone: (phone: string) => void;
  loading: boolean;
  onFill: () => void;
}

export const Phone = forwardRef<HTMLDivElement, PhoneProps>(({ addPhone, loading, onFill }, ref) => {
  const [number, setNumber] = useState("");

  function aplicarMascaraTelefone(val: string) {
    const numeros = val.replace(/\D/g, "");

    const mascara = numeros
      .replace(/^(\d{2})(\d{1})(\d{4})(\d{0,4})$/, "$1 $2 $3-$4")
      .trim();

    setNumber(mascara);

    if (validarFormatoTelefone(mascara)) {
      addPhone(mascara);
    }
  }

  function validarFormatoTelefone(telefone: string) {
    const regex = /^\d{2} 9 \d{4}-\d{4}$/;
    return regex.test(telefone);
  }

  return (
    <Container>
      <div className="content"  ref={ref}>
        <div className="phone" >
          <p>Antes da música ser gerada, precisamos do seu WhatsApp.</p>

          <div className="button">
            <img src={Whatsapp} alt="" />
            <input
              placeholder="xx x xxxx-xxxx"
              type="text"
              name="phone"
              value={number}
              maxLength={14}
              onChange={(e) => aplicarMascaraTelefone(e.target.value)}
              onBlur={onFill}
            />
          </div>

          <p>
            Fica de boa que não vamos ser aquele contatinho que fica te enchendo
            de mensagem.
          </p>
        </div>

        <div className="loading">
          {loading && <img src={Loading} className="loading-gif" />}
          <img src={LoadingBottle} alt="" />
        </div>

        <div className="music-message">
          <p>Assim que a música tiver pronta, a gente manda um zap pra você.</p>
          <span>Isso pode demorar alguns minutos.</span>
        </div>
      </div>
    </Container>
  );
});




