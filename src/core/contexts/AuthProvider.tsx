import { PropsWithChildren, createContext, useMemo, useState } from "react";
import { User } from "../interfaces/User";

export interface AuthContextType {
  user: User | null;
  signin: (user: User) => void;
  signout: () => void;
  isAuthenticated: boolean;
}

const defaultValue = {} as AuthContextType;

export const AuthContext = createContext(defaultValue);
