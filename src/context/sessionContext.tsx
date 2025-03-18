import React, { createContext, useState, useContext, ReactNode } from "react";

interface SessionContextType {
  ageVerified: boolean;
  setAgeVerified: (verified: boolean) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
}) => {
  const [ageVerified, setAgeVerified] = useState<boolean>(false);

  return (
    <SessionContext.Provider value={{ ageVerified, setAgeVerified }}>
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
