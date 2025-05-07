import { Navigate, Outlet } from "react-router";
import { useSession } from "../../context/sessionContext";

const AdminMiddleware = () => {
  const { isAdmin, loading } = useSession();

  if (loading) {
    return <div />;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default AdminMiddleware;
