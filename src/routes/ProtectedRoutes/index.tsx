import { PropsWithChildren } from "react";
import { useAuth } from "../../core/hooks/useAuth";
import { Navigate} from "react-router-dom";

function ProtectedRoutes({ children }: PropsWithChildren) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export { ProtectedRoutes };
