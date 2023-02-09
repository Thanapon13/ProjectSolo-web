import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import * as authApi from "../apis/auth-api";
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticateUser, setAuthenticateUser] = useState(
    getAccessToken() ? true : null
  );

  useEffect(() => {
    const fetcAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        setAuthenticateUser(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    fetcAuthUser();
  }, []);

  const login = async (emailOrMobile, password) => {
    const res = await authApi.login({ emailOrMobile, password });
    setAccessToken(res.data.accessToken);
    setAuthenticateUser(jwtDecode(res.data.accessToken));
  };

  const logout = () => { 
    removeAccessToken();
    setAuthenticateUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticateUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
