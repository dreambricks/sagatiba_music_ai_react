import React from "react";
import Card from "../../../components/card";
import Button from "../../../components/button";

type Props = {
  isBlockingUser: boolean;
  isDeletingUser: boolean;
  isBlocked: boolean;
  onBlockUserClick: () => void;
  onDeleteUserClick: () => void;
};

const ActionButtons: React.FC<Props> = ({
  isBlockingUser,
  isDeletingUser,
  isBlocked,
  onBlockUserClick,
  onDeleteUserClick,
}) => {
  return (
    <Card
      style={{ flexDirection: "row", gap: "16px", justifyContent: "flex-end" }}
    >
      <Button
        color="orange"
        isLoading={isBlockingUser}
        disabled={isDeletingUser}
        onClick={onBlockUserClick}
      >
        {`${isBlocked ? "Desbloquear" : "Bloquear"} Usuário`}
      </Button>

      <Button
        color="red"
        isLoading={isDeletingUser}
        disabled={isBlockingUser}
        onClick={onDeleteUserClick}
      >
        Deletar Usuário
      </Button>
    </Card>
  );
};

export default ActionButtons;
