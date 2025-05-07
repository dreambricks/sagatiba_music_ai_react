import axios from "axios";
import { applyNumberOnly } from "../utils/MaskUtils";
import { jwtDecode } from "jwt-decode";

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

export type IGetUserDataResponse = {
  _id: {
    $oid: string;
  };
  email: string;
  password_hash: string;
  phone: string;
  validated: boolean;
  created_at: {
    $date: string;
  };
  decrypted_info: string;
  blocked?: boolean;
};

export type IUserSummaryResponse = {
  email: string;
  phone: string;
  validated: boolean;
  user_created_at: {
    $date: string;
  };
  lyrics: string;
  lyrics_timestamp: {
    $date: string;
  };
  audio_urls: string; // 'url1, url2'
  audio_timestamp: {
    $date: string;
  };
};

export type ISearchUserResponse = {
  _id: string;
  email: string;
  cpf_hash: string;
  cpf_hash_sha256: string;
  phone: string;
  user_info_hash: string;
  validated: boolean;
  blocked: boolean;
  created_at: {
    $date: string;
  };
  lyrics: string[];
};

export const BASE_URL = "https://sagatibamusicapi.zapto.org";

export const fetchUserByCpf = async (cpf: string) => {
  const response = await axios.get<ISearchUserResponse>(
    `${BASE_URL}/admin/users/find_by_cpf?cpf=${applyNumberOnly(cpf)}`
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

export const fetchUserData = async (
  userId: string,
  privateKeyFile: File
): Promise<IGetUserDataResponse> => {
  const formData = new FormData();
  formData.append("user_id", userId);
  formData.append("private_key", privateKeyFile);

  const response = await axios.post<IGetUserDataResponse>(
    `${BASE_URL}/admin/get_user_data`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const fetchUserMusicSummary = async (userId: string) => {
  const response = await axios.get<IUserSummaryResponse[]>(
    `${BASE_URL}/admin/user_music_summary?user_oid=${userId}`
  );

  return response.data;
};

export const loginAdmin = async (email: string, password: string) => {
  const response = await axios.post<{ message: string; token: string }>(
    `${BASE_URL}/api/users/worker/login`,
    {
      email,
      password,
    }
  );

  const { data } = response;

  const userResponse: {
    user_oid: string;
    exp: number;
    email: string;
  } = jwtDecode(data.token);

  return {
    id: userResponse.user_oid,
    email: userResponse.email,
  };
};
