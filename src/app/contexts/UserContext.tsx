"use client";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

type UserContext = {
  user: string;
  setUser: (newUser: string) => void;
};

export const userContext = createContext<UserContext | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");
  const values = useMemo(() => ({ user, setUser }), [user, setUser]);
  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};

export const useUser = () => useContext(userContext);
