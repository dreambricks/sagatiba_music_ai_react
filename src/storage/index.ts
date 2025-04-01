import Cookies from "js-cookie";

const EXPIRATION_DAYS = 1;

export const saveLyrics = (lyrics: string) => {
  localStorage.setItem("lyrics", lyrics);
};

export const saveLyricsId = (lyricsId: string) => {
  localStorage.setItem("lyricsId", lyricsId);
};

export const getLyrics = () => {
  return localStorage.getItem("lyrics");
};

export const getLyricsId = () => {
  return localStorage.getItem("lyricsId");
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

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const saveRememberMeToCookie = (remember: boolean) => {
  Cookies.set("remember", JSON.stringify(remember), {
    expires: EXPIRATION_DAYS,
  });
};

export const getRememberMeFromCookie = () => {
  const cookieValue = Cookies.get("remember") || null;
  return cookieValue === "true";
};

export const saveAccessTokenToCookie = (token: string) => {
  Cookies.set("accessToken", token, {
    expires: EXPIRATION_DAYS,
  });
};

export const getAccessTokenFromCookie = () => {
  return Cookies.get("accessToken") || null;
};

export const clearAccessToken = () => {
  return Cookies.remove("accessToken");
};
