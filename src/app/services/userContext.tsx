import React, { FC } from 'react';

export type UserContextType = {
  id: number;
  code: string;
};

/**
 * Context for logged user
 */
const UserContext = React.createContext<UserContextType | null | undefined>(
  undefined
);

const useUserContext = (): UserContextType | null => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

type UserProviderProps = {
  id?: number;
  code?: string;
};

const UserProvider: FC<UserProviderProps> = ({ id, code, children }) => {
  const getUser = (id?: number, code?: string): UserContextType | null => {
    // TODO:? get additional user info from API based on id ?
    if (!id || !code) return null;

    return {
      id: id,
      code: code,
    };
  };

  return (
    <UserContext.Provider value={getUser(id, code)}>
      {children}
    </UserContext.Provider>
  );
};

export { useUserContext, UserProvider };
