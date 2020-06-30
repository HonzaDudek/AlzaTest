import React, { FC } from 'react';
import Logger from './logger';

type LoggerContextType = {
  Logger: Logger;
};

export const LoggerContext = React.createContext<LoggerContextType | undefined>(
  undefined
);

const useLoggerContext = (): LoggerContextType => {
  const context = React.useContext(LoggerContext);

  if (context === undefined) {
    throw new Error('useLoggerContext must be used within a LoggerProvider');
  }
  return context;
};

type AnalyticsProviderType = {
  Logger: Logger;
};

const LoggerProvider: FC<AnalyticsProviderType> = ({ Logger, children }) => {
  return (
    <LoggerContext.Provider value={{ Logger }}>
      {children}
    </LoggerContext.Provider>
  );
};

export { useLoggerContext, LoggerProvider };
