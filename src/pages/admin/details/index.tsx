import React from "react";
import * as Styled from "./styles";
import UserInfo from "./components/userInfo";
import ActionButtons from "./components/actionButtons";
import UserMusicTable from "./components/userMusicTable";
import { blockOrUnblockUser, deleteUser } from "../../../service/adminService";

const dummyUser = {
  name: "João Silva",
  email: "joao@email.com",
  cpf: "123.456.789-00",
  phone: "(11) 99999-9999",
};

const dummyMusics = [
  {
    id: "1",
    lyrics:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies augue sit amet enim mattis pharetra. Etiam tempor arcu urna, nec fermentum purus tempor nec. Nulla dapibus id urna sed efficitur",
    audioUrl: "/audios/audio1.mp3",
  },
  {
    id: "2",
    lyrics:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies augue sit amet enim mattis pharetra. Etiam tempor arcu urna, nec fermentum purus tempor nec. Nulla dapibus id urna sed efficitur",
    audioUrl: "/audios/audio2.mp3",
  },
];

const AdminDetails: React.FC = () => {
  const handleBlock = async () => {
    if (!confirm("Tem certeza que deseja bloquear este usuário?")) {
      return;
    }

    try {
      await blockOrUnblockUser("userId", true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    if (
      !confirm("Tem certeza que deseja deletar este usuário permanentemente?")
    ) {
      return;
    }

    try {
      await deleteUser("userId");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styled.Container>
      <Styled.Title>Detalhes do Usuário</Styled.Title>

      <UserInfo userInfo={dummyUser} />

      <UserMusicTable musics={dummyMusics} />

      <ActionButtons
        onBlockUserClick={handleBlock}
        onDeleteUserClick={handleDelete}
      />
    </Styled.Container>
  );
};

export default AdminDetails;
