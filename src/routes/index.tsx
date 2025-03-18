import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/home";
import { LyricsPage } from "../pages/lyrics";
import { Tampao } from "../pages/tampao";
import { Message } from "../pages/message";
import { Player } from "../pages/player";
import AgeGate from "../pages/ageGate";
import Login from "../pages/login";
import RecoverPasswordScreen from "../pages/recoverPassword";
import ResetPasswordScreen from "../pages/resetPassword";
import Register from "../pages/register";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tampao />} />
        <Route path="/gerar-musica" element={<Home />} />
        <Route path="/letras" element={<LyricsPage />} />
        <Route path="/baixar" element={<Message />} />
        <Route path="/mensagem" element={<Player />} />
        <Route path="/age-gate" element={<AgeGate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover-password" element={<RecoverPasswordScreen />} />
        <Route path="/reset-password" element={<ResetPasswordScreen />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
