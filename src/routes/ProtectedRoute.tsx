import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../stores/store";
import type { ProtectedRouteProps } from "../types/authTypes";

export const ProtectedRoute = ({
  children,
  redirectPath = "/login",
}: ProtectedRouteProps) => {
  const isAuth = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuth ? <>{children}</> : <Navigate to={redirectPath} />;
};
