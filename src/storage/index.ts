export const saveLyrics = (lyrics: string) => {
  localStorage.setItem("lyrics", lyrics);
};

export const getLyrics = () => {
  return localStorage.getItem("lyrics");
};

export const clearLyrics = () => {
  return localStorage.removeItemg("lyrics");
};
