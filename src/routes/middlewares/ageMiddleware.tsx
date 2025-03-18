import { Navigate, Outlet } from "react-router";
import { useSession } from "../../context/sessionContext";
import { getRememberMeFromCookie } from "../../storage";

const AgeMiddleware = () => {
  const { ageVerified } = useSession();

  const rememberUser = getRememberMeFromCookie();

  if (ageVerified || rememberUser) {
    return <Outlet />;
  }

  return <Navigate to="/age-gate" replace />;
};

export default AgeMiddleware;
