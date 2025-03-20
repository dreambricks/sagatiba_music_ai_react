import axios from "axios";
import { getLyricsId, getPhone } from "../storage";
import { IRegisterUserBody, IUserJson } from "./types";
import { IRegisterFormField } from "../pages/register";
import { applyNumberOnly } from "../utils/MaskUtils";
import { encryptText } from "../utils/CryptUtils";

const UR_BASE = "https://sagatibamusicapi.zapto.org";
// const UR_BASE = "http://localhost:5001";
// URL para Testes = http://18.229.132.107:5001

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

export const signIn = async (email: string, password: string) => {
  const response = await axios.post<IUserJson>(`${UR_BASE}/api/users/login`, {
    email,
    password,
  });

  return response.data;
};

export const registerUser = async (data: IRegisterFormField) => {
  const { email, password, fullName, cpf, birthDate, whatsapp } = data;

  const digitsOnlyCpf = applyNumberOnly(cpf);
  const digitsOnlyPhone = applyNumberOnly(whatsapp);

  const userInfoHash = `${fullName},${digitsOnlyCpf},${birthDate},${email},${digitsOnlyPhone}`;

  const encryptedUserInfo = encryptText(userInfoHash);

  const body: IRegisterUserBody = {
    email: email,
    password_hash: password,
    user_info_hash: encryptedUserInfo,
  };

  const response = await axios.post<void>(
    `${UR_BASE}/api/users/register`,
    body
  );

  return response.data;
};

export const forgotPassword = async (email: string) => {
  const response = await axios.post<void>(
    `${UR_BASE}/api/users/forgot_password`,
    {
      email,
    }
  );

  return response.data;
};

export const resetPassword = async (newPassword: string, token: string) => {
  const response = await axios.post<void>(
    `${UR_BASE}/api/users/reset_password/${token}`,
    {
      new_password: newPassword,
    }
  );

  return response.data;
};
