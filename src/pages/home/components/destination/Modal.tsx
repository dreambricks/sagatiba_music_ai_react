import { useEffect } from "react";
import ReactModal from "react-modal";
import { ModalStyles } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

ReactModal.setAppElement("#root");

export const ModalInfo = ({ isOpen, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: "#ffde2f",
        },
        content: {
          backgroundColor: "#ffde2f",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
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
        <button onClick={onClose}>
          <strong>Aceitar</strong>
        </button>
      </ModalStyles>
    </ReactModal>
  );
};
