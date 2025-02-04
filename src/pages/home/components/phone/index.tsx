import { Container } from "./styles";
import LoadingBottle from "../../../../assets/CRISTALINA.png";
import Whatsapp from "../../../../assets/whatsapp1.png";
import { forwardRef, useState } from "react";
import Loading from "../../../../assets/spinner_sem_fundo_ver2.gif";
import { toast } from "react-toastify";

interface PhoneProps {
  addPhone: (phone: string) => void;
  loading: boolean;
  onFill: () => void;
}

export const Phone = forwardRef<HTMLDivElement, PhoneProps>(
  ({ addPhone, loading, onFill }, ref) => {
    const [number, setNumber] = useState("");

    function phoneMask(val: string) {
      const numeros = val.replace(/\D/g, "");

      if (numeros.length === 0) {
        setNumber("");
        return;
      }

      if (numeros.length >= 3) {
        const regex = /^\d{2}9/;
        if (!regex.test(numeros)) {
          toast.error("Seu número de celular deve começar com DDD + 9");
          return;
        }
      }

      let mascara = numeros
        .replace(/^(\d{2})(\d{1})(\d{4})(\d{0,4})$/, "$1 $2 $3-$4")
        .trim();

      if (val.endsWith(" ") || val.endsWith("-")) {
        mascara = mascara.slice(0, -1);
      }

      setNumber(mascara);

      if (validatePhone(mascara)) {
        addPhone(mascara);
      }
    }

    function validatePhone(telefone: string) {
      const regex = /^\d{2} 9 \d{4}-\d{4}$/;
      return regex.test(telefone);
    }

    return (
      <Container>
        <div className="content" ref={ref}>
          <div className="phone">
            <p>Antes da música ser gerada, precisamos do seu WhatsApp.</p>

            <div className="button-container">
              <div className="button">
                <img src={Whatsapp} alt="" />
                <input
                  placeholder="xx x xxxx-xxxx"
                  type="text"
                  name="phone"
                  value={number}
                  maxLength={14}
                  onChange={(e) => phoneMask(e.target.value)}
                />
              </div>
              <div onClick={onFill} className="send">
                {" "}
                &gt;{" "}
              </div>
            </div>

            <p>
              Fica de boa que não vamos ser aquele contatinho que fica te
              enchendo de mensagem.
            </p>
          </div>

          <div className="loading">
            {loading && <img src={Loading} className="loading-gif" />}
            <img src={LoadingBottle} alt="" />
          </div>

          <div className="music-message">
            <p>
              Assim que a música tiver pronta, a gente manda um zap pra você.
            </p>
            <span>Isso pode demorar alguns minutos.</span>
          </div>
        </div>
      </Container>
    );
  }
);
