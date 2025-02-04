import { useState, useEffect, forwardRef } from "react";
import Sagalover from "../../../../assets/nome_do_sagalover.png";
import { Container } from "./styles";
import Mountains from "../../../../assets/mountains.png";
import { ModalInfo } from "./Modal";

interface SagaloverProps {
  changeIg: (val: string) => void;
  onAacceptTerm: (val: boolean) => void;
  onAcceptPolicy: (val: boolean) => void;
  onFill: () => void;
}

export const Sagalovers = forwardRef<HTMLDivElement, SagaloverProps>(
  ({ changeIg, onAacceptTerm, onAcceptPolicy, onFill }, ref) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [policyAccepted, setPolicyAccepted] = useState(false);
    const [hasFilled, setHasFilled] = useState(false); // Novo estado para controle

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
      if (!hasFilled && username.trim() !== "" && termsAccepted && policyAccepted) {
        onFill();
        setHasFilled(true); // Evita chamadas repetidas
      }
    }, [username, termsAccepted, policyAccepted, onFill, hasFilled]);

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
              placeholder="sagatiba"
              onChange={(e) => {
                setUsername(e.target.value);
                changeIg(e.target.value);
              }}
            />

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

            <div className="terms-policy">
              <input
                type="checkbox"
                onChange={(e) => {
                  setPolicyAccepted(e.target.checked);
                  onAcceptPolicy(e.target.checked);
                }}
              />
              <p onClick={openModal}>EU ACEITO A POLITICA DE PRIVACIDADE</p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
);
