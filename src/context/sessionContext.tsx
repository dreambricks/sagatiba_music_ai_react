import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { clearAccessToken, getAccessTokenFromCookie } from "../storage";
import { jwtDecode } from "jwt-decode";

export type IUser = {
  email: string;
  userOid: string;
};

interface SessionContextType {
  user: IUser | null;
  ageVerified: boolean;
  loading: boolean;
  updateUser: (newUser: IUser | null) => void;
  setAgeVerified: (verified: boolean) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [ageVerified, setAgeVerified] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const updateUser = (newUser: IUser | null) => {
    if (!newUser) {
      clearAccessToken();
    }

    setUser(newUser);
  };

  const checkForUserSession = () => {
    const accessToken = getAccessTokenFromCookie();

    if (!accessToken) {
      setLoading(false);
      return;
    }

    const decodedToken = jwtDecode<{
      email: string;
      user_oid: string;
      exp: number;
    }>(accessToken);

    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      clearAccessToken();
      setLoading(false);
      setUser(null);
      return;
    }

    setUser({
      email: decodedToken.email,
      userOid: decodedToken.user_oid,
    });

    setLoading(false);
  };

  useEffect(() => {
    checkForUserSession();
  }, []);

  return (
    <SessionContext.Provider
      value={{ user, loading, ageVerified, updateUser, setAgeVerified }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
