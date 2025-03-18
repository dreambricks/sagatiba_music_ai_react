import { Navigate, Outlet } from "react-router";
import { useSession } from "../../context/sessionContext";

const AuthMiddleware = () => {
  const { user, loading } = useSession();

  if (loading) {
    return <div />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthMiddleware;
