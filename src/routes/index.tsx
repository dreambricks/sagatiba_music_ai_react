import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/home";
import { LyricsPage } from "../pages/lyrics";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letras" element={<LyricsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
