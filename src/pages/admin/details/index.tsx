import React, { useState } from "react";
import * as Styled from "./styles";
import UserInfo, { IUserInfo } from "./components/userInfo";
import ActionButtons from "./components/actionButtons";
import UserMusicTable from "./components/userMusicTable";
import {
  blockOrUnblockUser,
  deleteUser,
  fetchUserData,
  fetchUserMusicSummary,
} from "../../../service/adminService";
import { toast } from "react-toastify";
import PemKeyInput from "./components/pemKeyInput";
import { useParams } from "react-router";

type ISongListItem = {
  id: string;
  lyrics: string;
  audioUrls: string[];
};

const AdminDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  const [isDeletingUser, setIsDeletingUser] = useState(false);
  const [isBlockingUser, setIsBlockingUser] = useState(false);
  const [userData, setUserData] = useState<IUserInfo | null>(null);
  const [userSongs, setUserSongs] = useState<ISongListItem[]>([]);
  const [loadingSong, setLoadingSongs] = useState(false);

  const handleBlock = async () => {
    if (!userId) return;

    if (!confirm("Tem certeza que deseja bloquear este usuário?")) {
      return;
    }

    try {
      setIsBlockingUser(true);
      await blockOrUnblockUser(userId, true);
      toast.success("Usuário bloqueado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Falha ao bloquear usuário. Por favor, tente novamente.");
    } finally {
      setIsBlockingUser(false);
    }
  };

  const handleDelete = async () => {
    if (!userId) return;

    if (
      !confirm("Tem certeza que deseja deletar este usuário permanentemente?")
    ) {
      return;
    }

    try {
      setIsDeletingUser(true);
      await deleteUser(userId);
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
    if (!userId || !file) return;

    Promise.all([updateUserData(userId, file), updateUserMusicSummary()]);
  };

  const updateUserData = async (userId: string, file: File) => {
    try {
      const response = await fetchUserData(userId, file);

      const [name, cpf] = response.decrypted_info.split(",");

      setUserData({
        id: response._id.$oid,
        email: response.email,
        phone: response.phone,
        name,
        cpf,
      });
    } catch (err) {
      console.error("Erro ao buscar dados do usuário:", err);
      toast.error(
        "Falha ao buscar dados do usuário. Por favor, tente novamente."
      );
    }
  };

  const updateUserMusicSummary = async () => {
    if (!userId) return;

    try {
      setLoadingSongs(true);
      const response = await fetchUserMusicSummary(userId);

      const songs: ISongListItem[] = response.map((item) => {
        return {
          id: item.lyrics_timestamp.$date,
          lyrics: item.lyrics,
          audioUrls: item.audio_urls.split(",").map((url) => url.trim()),
        };
      });

      setUserSongs(songs);
    } catch (error) {
      console.log(error);
      toast.error(
        "Falha ao buscar músicas do usuário. Por favor, tente novamente"
      );
    } finally {
      setLoadingSongs(false);
    }
  };

  return (
    <Styled.Container>
      <Styled.Title>Detalhes do Usuário</Styled.Title>

      <PemKeyInput onChange={handlePrivateKeyUpload} />

      {userData && (
        <ActionButtons
          isBlockingUser={isBlockingUser}
          isDeletingUser={isDeletingUser}
          onBlockUserClick={handleBlock}
          onDeleteUserClick={handleDelete}
        />
      )}

      <UserInfo userInfo={userData} />

      <UserMusicTable musics={userSongs} isLoading={loadingSong} />
    </Styled.Container>
  );
};

export default AdminDetails;
