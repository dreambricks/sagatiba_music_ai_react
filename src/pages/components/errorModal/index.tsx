// src/components/ErrorModal.tsx
import React from "react";
import Modal from "react-modal";

interface ErrorModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    message: string;
    onActionClick?: () => void;
    actionLabel?: string;
}

const customStyles: Modal.Styles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1300, // MUI padrão para dialogs
    },
    content: {
        maxWidth: "400px",
        margin: "auto",
        padding: "24px",
        inset: "50% auto auto 50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        border: "none",
        boxShadow:
            "0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)",
        zIndex: 1350,
        fontFamily: "'Gopher-Medium', sans-serif",
    },
};

const ErrorModal: React.FC<ErrorModalProps> = ({
    isOpen,
    onRequestClose,
    message,
    onActionClick,
    actionLabel = "Tentar novamente",
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Erro"
            style={customStyles}
            ariaHideApp={false}
        >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "16px", fontWeight: 500 }}>
                Ocorreu um erro
            </h2>
            <p style={{ fontSize: "1rem", color: "#333", marginBottom: "24px" }}>
                {message}
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                {onActionClick && (
                    <button
                        onClick={() => onActionClick?.()}
                        style={{
                            padding: "6px 16px",
                            backgroundColor: "#1976d2",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontWeight: 500,
                        }}
                    >
                        {actionLabel}
                    </button>
                )}
                <button
                    onClick={onRequestClose}
                    style={{
                        padding: "6px 16px",
                        backgroundColor: "#ff3e3e",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: 500,
                    }}
                >
                    Fechar
                </button>
            </div>
        </Modal>
    );
};

export default ErrorModal;
