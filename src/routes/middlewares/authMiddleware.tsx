import { Navigate, Outlet } from "react-router";
import { getAccessTokenFromCookie } from "../../storage";

const AuthMiddleware = () => {
  const accessToken = getAccessTokenFromCookie();

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthMiddleware;
