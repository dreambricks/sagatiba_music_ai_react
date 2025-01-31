import Sagalover from "../../../../assets/nome_do_sagalover.png";
import { Container } from "./styles";
import Mountains from "../../../../assets/mountains.png";
import { useState } from "react";
import { Modal, ModalInfo } from "./Modal";

export const Sagalovers = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (e: any) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      {modalOpen && <ModalInfo isOpen={modalOpen} onClose={closeModal} />}
      <div className="top">
        <img src={Mountains} alt="" />
      </div>

      <div className="content">
        <div className="body">
          <p className="sagalover-name">Primeiro, o nome do</p>
          <img src={Sagalover} alt="" />

          <p className="type">
            Digite abaixo o nome da pessoa que você quer convidar
          </p>

          <input type="text" name="username" placeholder="sagatiba" />

          <p className="move">
            Mas, pra Seguir na Saga, tem que ter responsa, hein? Só compartilhe
            o convite com maiores de 18 anos.
          </p>

          <div className="terms">
            <input type="checkbox" name="" id="" />
            <p onClick={openModal}>
              EU ACEITO OS TERMOS DE USO E RESPONSABILIDADE DE COMPARTILHAMENTO
            </p>
          </div>

          <div className="terms-policy">
            <input type="checkbox" name="" id="" />
            <p onClick={openModal}>EU ACEITO A POLITICA DE PRIVACIDADE</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
