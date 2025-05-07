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
import { Terms } from "../pages/terms";
import { Policy } from "../pages/policy";
import LoginAdmin from "../pages/admin/login";
import Admin from "../pages/admin";
import AdminDetails from "../pages/admin/details";
import AdminMiddleware from "./middlewares/adminMiddleware";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/termosdeuso" element={<Terms />} />
        <Route path="/politicadeprivacidade" element={<Policy />} />
        <Route path="/overbook" element={<Overbook />} />
        <Route element={<OverBookMiddleware />}>
          <Route path="/age-gate" element={<AgeGate />} />
          <Route element={<AgeMiddleware />}>
            <Route path="/" element={<Tampao />} />
            <Route
              path="/recover-password"
              element={<RecoverPasswordScreen />}
            />
            <Route
              path="/reset_password/:token"
              element={<ResetPasswordScreen />}
            />
            <Route path="/gerar-musica" element={<Home />} />
            <Route path="/erro/:message" element={<Erro />} />

            <Route path="/erro" element={<Erro />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mensagem" element={<Player />} />
            <Route path="/email" element={<EmailSent />} />
            <Route path="/admin/login" element={<LoginAdmin />} />

            <Route element={<AdminMiddleware />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/details/:userId" element={<AdminDetails />} />
            </Route>

            <Route element={<AuthMiddleware />}>
              <Route path="/letras" element={<LyricsPage />} />
              <Route path="/baixar" element={<Message />} />
            </Route>

            <Route path="*" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
