import { useState, useEffect, forwardRef } from "react";
import Sagalover from "../../../../assets/nome_do_sagalover.png";
import { Container } from "./styles";
import Mountains from "../../../../assets/mountains.png";
import NextButton from "../../../components/nextButton";

interface SagaloverProps {
  changeIg: (val: string) => void;
  onFill: () => void;
}

export const Sagalovers = forwardRef<HTMLDivElement, SagaloverProps>(
  ({ changeIg, onFill }, ref) => {
    const [username, setUsername] = useState("");
    const [hasFilled, setHasFilled] = useState(false);


    useEffect(() => {
      if (!hasFilled && username.trim() !== "") {
        setHasFilled(true);
      }
    }, [username, hasFilled]);

    return (
      <Container>
        <div className="top">
          <img src={Mountains} alt="" />
        </div>

        <div className="content" ref={ref}>
          <div className="body">
            <p className="sagalover-name">Primeiro, o nome do</p>
            <img src={Sagalover} alt="" />

            <p className="type">
              Digite abaixo o nome da pessoa que você quer convidar
            </p>

            <input
              type="text"
              name="username"
              placeholder="Nome do convidado"
              maxLength={40}
              onChange={(e) => {
                setUsername(e.target.value);
                changeIg(e.target.value);
              }}
            />


            <p className="move">
              Mas, pra Seguir na Saga, tem que ter responsa, hein? Só
              compartilhe o convite com maiores de 18 anos.
            </p>

            {/* <div className="terms">
              <input
                type="checkbox"
                onChange={(e) => {
                  setTermsAccepted(e.target.checked);
                  onAacceptTerm(e.target.checked);
                }}
              />
              <p onClick={openModal}>
                EU ACEITO OS TERMOS DE USO E RESPONSABILIDADE DE COMPARTILHAMENTO
              </p>
            </div> */}

            <NextButton title="PRÓXIMO" onClick={onFill} />

          </div>
        </div>
      </Container>
    );
  }
);
