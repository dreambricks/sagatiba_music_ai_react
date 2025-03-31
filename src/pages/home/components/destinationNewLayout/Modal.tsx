import { useEffect } from "react";
import ReactModal from "react-modal";
import { ModalStyles } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

ReactModal.setAppElement("#root");

export const ModalInfo = ({ isOpen, onClose, onAccept }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "#00000020",
          zIndex: 1000,
        },
        content: {
          backgroundColor: "white",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          zIndex: 1001,
        },
      }}
    >
      <ModalStyles>
        <div className="info">
          <div className="info-holder">
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda excepturi vero rem accusantium aliquid quibusdam eaque.
              Possimus, necessitatibus eius cupiditate perferendis amet harum
              placeat veniam error hic, voluptatibus excepturi corrupti? Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
              excepturi vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Assumenda excepturi
              vero rem accusantium aliquid quibusdam eaque. Possimus,
              necessitatibus eius cupiditate perferendis amet harum placeat
              veniam error hic, voluptatibus excepturi corrupti?
            </p>
          </div>
        </div>
        <button onClick={onAccept}>
          <strong>Aceitar</strong>
        </button>
      </ModalStyles>
    </ReactModal>
  );
};
