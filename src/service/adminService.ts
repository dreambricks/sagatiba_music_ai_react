import axios from "axios";

const BASE_URL = "sagatibamusicai.ddns.net";

export const fetchUserByCpf = (cpf: string) => {
  return axios.post(`${BASE_URL}/admin/users/find_by_cpf`, {
    cpf,
  });
};

export const blockOrUnblockUser = (userId: string, block: boolean) => {
  return axios.post(`${BASE_URL}/admin/users/${userId}/block`, {
    block: block,
  });
};

export const deleteUser = (userId: string) => {
  return axios.delete(`${BASE_URL}/admin/users/${userId}`);
};

export const fetchMusicByLyrics = (lyrics: string) => {
  return axios.post(`${BASE_URL}/admin/lyrics/search`, {
    snippet: lyrics,
  });
};
