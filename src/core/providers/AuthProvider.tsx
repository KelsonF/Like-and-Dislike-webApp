import { PropsWithChildren, useState, useMemo } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { User } from "../interfaces/User";

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);
  
    const signin = (user: User) => {
      setUser(user);
    };
  
    const signout = () => {
      setUser(null);
    };
  
    const value = useMemo(
      () => ({
        user,
        signin,
        signout,
        isAuthenticated: user !== null,
      }),
      [user]
    );
  
    return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider>
    )
  };