import { TOKEN_STORAGE_KEY } from "constants/common";
import { PATH } from "constants/path";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem(TOKEN_STORAGE_KEY);

  if (!isAuthenticated) return <Navigate to={PATH.login} />;

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
