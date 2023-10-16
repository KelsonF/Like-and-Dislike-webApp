import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    alert("Usuario invalido tente novamente");
    throw new Error("Usuario invalido tente novamente");
  }

  return authContext;
};
