import { useState, useEffect, forwardRef } from "react";
import Sagalover from "../../../../assets/nome_do_sagalover.png";
import { Container } from "./styles";
import Mountains from "../../../../assets/mountains.png";
import { ModalInfo } from "./Modal";
import Siga from "../../../../assets/SIGA_PASSO.svg";

interface SagaloverProps {
  changeIg: (val: string) => void;
  onAacceptTerm: (val: boolean) => void;
  onFill: () => void;
}

export const Sagalovers = forwardRef<HTMLDivElement, SagaloverProps>(
  ({ changeIg, onAacceptTerm,  onFill }, ref) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [hasFilled, setHasFilled] = useState(false); // Novo estado para controle

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
      if (!hasFilled && username.trim() !== "" && termsAccepted) {
        setHasFilled(true); // Evita chamadas repetidas
      }
    }, [username, termsAccepted, hasFilled]);

    return (
      <Container>
        {modalOpen && <ModalInfo isOpen={modalOpen} onClose={closeModal} />}
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
              placeholder="@Ricardo Sampaio"
              onChange={(e) => {
                setUsername(e.target.value);
                changeIg(e.target.value);
              }}
            />

            <img className="SigaBtn" src={Siga} alt="Siga para o próximo passo" onClick={onFill}/>  

            <p className="move">
              Mas, pra Seguir na Saga, tem que ter responsa, hein? Só
              compartilhe o convite com maiores de 18 anos.
            </p>

            <div className="terms">
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
            </div>


          </div>
        </div>
      </Container>
    );
  }
);
