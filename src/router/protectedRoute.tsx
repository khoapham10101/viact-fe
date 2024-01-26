import { PATH } from "constants/path";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Navigate to={PATH.login} />;

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
