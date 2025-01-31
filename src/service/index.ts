import axios from "axios";

const UR_BASE = "http://54.232.87.120";

export const generateMusicLyric = async (obj: FormData) => {
  const response = await axios.post(`${UR_BASE}/lyrics`, obj);

  return response.data;
};
