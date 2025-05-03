import React, { useMemo, useState } from "react";
import * as Styled from "./styles";
import UserInfo from "./components/userInfo";
import ActionButtons from "./components/actionButtons";
import UserMusicTable from "./components/userMusicTable";
import { blockOrUnblockUser, deleteUser } from "../../../service/adminService";
import { toast } from "react-toastify";
import { decryptText } from "../../../utils/CryptUtils";
import PemKeyInput from "./components/pemKeyInput";

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
  const [isDeletingUser, setIsDeletingUser] = useState(false);
  const [isBlockingUser, setIsBlockingUser] = useState(false);
  const [privateKey, setPrivateKey] = useState<string | null>(null);
  const [userData, setUserData] = useState(dummyUser);

  const handleBlock = async () => {
    if (!confirm("Tem certeza que deseja bloquear este usuário?")) {
      return;
    }

    try {
      setIsBlockingUser(true);
      await blockOrUnblockUser("userId", true);
      toast.success("Usuário bloqueado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Falha ao bloquear usuário. Por favor, tente novamente.");
    } finally {
      setIsBlockingUser(false);
    }
  };

  const handleDelete = async () => {
    if (
      !confirm("Tem certeza que deseja deletar este usuário permanentemente?")
    ) {
      return;
    }

    try {
      setIsDeletingUser(true);
      await deleteUser("userId");
      toast.success("Usuário deletado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Falha ao deletar usuário. Por favor, tente novamente.");
    } finally {
      setIsDeletingUser(false);
    }
  };

  const handlePrivateKeyUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    setPrivateKey(text);
  };

  const decryptedUser = useMemo(() => {
    if (!privateKey || !userData) return null;

    return {
      name: decryptText(userData.name, privateKey),
      email: decryptText(userData.email, privateKey),
      cpf: decryptText(userData.cpf, privateKey),
      phone: decryptText(userData.phone, privateKey),
    };
  }, [userData, privateKey]);

  return (
    <Styled.Container>
      <Styled.Title>Detalhes do Usuário</Styled.Title>

      <PemKeyInput onChange={handlePrivateKeyUpload} />

      <UserInfo userInfo={decryptedUser || userData} />

      <UserMusicTable musics={dummyMusics} />

      <ActionButtons
        isBlockingUser={isBlockingUser}
        isDeletingUser={isDeletingUser}
        onBlockUserClick={handleBlock}
        onDeleteUserClick={handleDelete}
      />
    </Styled.Container>
  );
};

export default AdminDetails;
