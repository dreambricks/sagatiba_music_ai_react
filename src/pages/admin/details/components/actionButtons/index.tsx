import React from "react";
import Card from "../../../components/card";
import Button from "../../../components/button";

type Props = {
  onBlockUserClick: () => void;
  onDeleteUserClick: () => void;
};

const ActionButtons: React.FC<Props> = ({
  onBlockUserClick,
  onDeleteUserClick,
}) => {
  return (
    <Card
      style={{ flexDirection: "row", gap: "16px", justifyContent: "flex-end" }}
    >
      <Button color="orange" onClick={onBlockUserClick}>
        Bloquear Usuário
      </Button>

      <Button color="red" onClick={onDeleteUserClick}>
        Deletar Usuário
      </Button>
    </Card>
  );
};

export default ActionButtons;
