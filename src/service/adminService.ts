import axios from "axios";

export type IMusicSearchResponse = {
  lyric_id: string;
  lyrics: string;
  timestamp: {
    $date: string;
  };
  user: {
    _id: string;
    email: string;
    phone: string;
    validated: boolean;
    blocked: boolean | null;
    created_at: {
      $date: string;
    };
  } | null;
};

const BASE_URL = "https://sagatibamusicapi.zapto.org";

export const fetchUserByCpf = async (cpf: string) => {
  const response = await axios.get(
    `${BASE_URL}/admin/users/find_by_cpf?cpf=${cpf}`
  );

  return response.data;
};

export const blockOrUnblockUser = (userId: string, block: boolean) => {
  return axios.post(`${BASE_URL}/admin/users/${userId}/block`, {
    block: block,
  });
};

export const deleteUser = (userId: string) => {
  return axios.delete(`${BASE_URL}/admin/users/${userId}`);
};

export const fetchMusicByLyrics = async (lyrics: string) => {
  const response = await axios.get<IMusicSearchResponse[]>(
    `${BASE_URL}/admin/lyrics/search?snippet=${lyrics}`
  );

  return response.data;
};
