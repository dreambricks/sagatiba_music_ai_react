import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/home";
import { LyricsPage } from "../pages/lyrics";
import { Tampao } from "../pages/tampao";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tampao />} />
        <Route path="/gerar-musica" element={<Home />} />
        <Route path="/letras" element={<LyricsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
