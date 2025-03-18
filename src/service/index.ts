import axios from "axios";
import { getLyricsId, getPhone } from "../storage";

const UR_BASE = "http://18.229.132.107:5001/";
// const UR_BASE = "http://localhost:5001";

export const generateMusicLyric = async (obj: FormData) => {
  const response = await axios.post(`${UR_BASE}/lyrics`, obj);
  return response.data;
};

export const generate = async () => {
  try {
    const lyrics_oid = getLyricsId();
    const phone = getPhone();

    const response = await axios.post(
      `${UR_BASE}/lyrics/generate`,
      { lyrics_oid, phone },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
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

export const getLyricsToMessage = async (id: string) => {
  try {
    const response = await axios.get(`${UR_BASE}/lyrics/get?task_id=${id}`);

    if (response.data) {
      const { audio_urls, lyrics } = response.data;
      console.log("Response data:", { audio_urls, lyrics });
      return { audio_urls, lyrics };
    }

    return null;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return null;
  }
};
