import { Navigate, Outlet, useLocation } from "react-router";
import { useSession } from "../../context/sessionContext";
import { getRememberMeFromCookie } from "../../storage";

const AgeMiddleware = () => {
  const { ageVerified } = useSession();
  const location = useLocation();

  const rememberUser = getRememberMeFromCookie();

  if (ageVerified || rememberUser) {
    return <Outlet />;
  }

  return (
    <Navigate
      to={`/age-gate${location.search}`}
      state={{ from: location.pathname + location.search }}
      replace
    />
  );
};

export default AgeMiddleware;
