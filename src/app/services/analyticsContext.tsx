import React, { FC } from 'react';
import { Analytics } from '../../utils/analytics/analytics';

export type AnalyticsContextType = {
  Analytics: Analytics;
};

const AnalyticsContext = React.createContext<AnalyticsContextType | undefined>(
  undefined
);

const useAnalyticsContext = (): AnalyticsContextType => {
  const context = React.useContext(AnalyticsContext);

  if (context === undefined) {
    throw new Error(
      'useAnalyticsContext must be used within a AnalyticsProvider'
    );
  }
  return context;
};

type AnalyticsProviderType = {
  Analytics: Analytics;
};

const AnalyticsProvider: FC<AnalyticsProviderType> = ({
  Analytics,
  children,
}) => {
  return (
    <AnalyticsContext.Provider value={{ Analytics }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { useAnalyticsContext, AnalyticsProvider };
