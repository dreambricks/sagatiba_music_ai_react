import { Navigate, Outlet } from "react-router";

const OverBookMiddleware = () => {

    const maintenanceMode = false;

    if (maintenanceMode) {

        return <Navigate to='/overbook' replace />

    }
    return <Outlet />;
}

export default OverBookMiddleware;