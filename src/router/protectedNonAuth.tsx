import { TOKEN_STORAGE_KEY } from "constants/common";
import { PATH } from "constants/path";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedNonAuth = ({ children }: { children?: React.ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem(TOKEN_STORAGE_KEY);

  if (isAuthenticated) return <Navigate to={PATH.home} />;

  return <>{children || <Outlet />}</>;
};

export default ProtectedNonAuth;
