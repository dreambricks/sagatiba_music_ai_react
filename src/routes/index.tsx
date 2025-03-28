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
import AgeMiddleware from "./middlewares/ageMiddleware";
import AuthMiddleware from "./middlewares/authMiddleware";
import { Erro } from "../pages/erro";
import OverBookMiddleware from "./middlewares/overBookMiddleware";
import { Overbook } from "../pages/overBook";
import { EmailSent } from "../pages/emailSent";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/overbook" element={<Overbook />} />
        <Route element={<OverBookMiddleware />}>
          <Route path="/" element={<Tampao />} />
          <Route path="/recover-password" element={<RecoverPasswordScreen />} />
          <Route
            path="/reset_password/:token"
            element={<ResetPasswordScreen />}
          />
          <Route path="/age-gate" element={<AgeGate />} />
          <Route path="/gerar-musica" element={<Home />} />
          <Route
            path="/erro/:message"
            element={<Erro />}
          />

          <Route
            path="/erro"
            element={<Erro />}
          />

          <Route element={<AgeMiddleware />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mensagem" element={<Player />} />
            <Route path="/email" element={<EmailSent />} />
          </Route>

          <Route element={<AuthMiddleware />}>
            <Route path="/letras" element={<LyricsPage />} />
            <Route path="/baixar" element={<Message />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
