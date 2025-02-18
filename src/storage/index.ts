import Cookies from "js-cookie";

export const saveLyrics = (lyrics: string) => {
  localStorage.setItem("lyrics", lyrics);
};

export const savePhone = (phone: string) => {
  localStorage.setItem("phone", phone);
};

export const getLyrics = () => {
  return localStorage.getItem("lyrics");
};

export const getPhone = () => {
  return localStorage.getItem("phone");
};

export const clearLyrics = () => {
  return localStorage.removeItemg("lyrics");
};

export const saveTaskId = (id: string) => {
  localStorage.setItem("task_id", id);
};

export const getTaskId = () => {
  return localStorage.getItem("task_id");
};

const COOKIE_NAME = "phone";
const EXPIRATION_DAYS = 1;

export const savePhoneToCookie = (phone: string) => {
  Cookies.set(COOKIE_NAME, phone, { expires: EXPIRATION_DAYS });
};

export const getPhoneFromCookie = () => {
  return Cookies.get(COOKIE_NAME) || null;
};
