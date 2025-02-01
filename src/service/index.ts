import axios from "axios";
import { getLyrics, getPhone } from "../storage";

const UR_BASE = "http://sagatibamusic.zapto.org:5001";

export const generateMusicLyric = async (obj: FormData) => {
  const response = await axios.post(`${UR_BASE}/lyrics`, obj);
  return response.data;
};

export const generate = async () => {
  const lyrics = getLyrics();
  const phone = getPhone();

  const response = await axios.post(
    `${UR_BASE}/lyrics/generate`,
    { lyrics, phone },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  return response.data;
};

export const getTaskId = async () => {
  try {
    const phone = getPhone();

    const response = await axios.post(`${UR_BASE}/lyrics/process`, { phone });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
