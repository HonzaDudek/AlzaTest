import React, { FC } from 'react';

const DeviceContext = React.createContext<boolean | undefined>(undefined);

const useDeviceContext = (): boolean => {
  const context = React.useContext(DeviceContext);
  if (context === undefined) {
    throw new Error('useDeviceContext must be used within a DeviceProvider');
  }
  return context;
};

type DeviceProviderProps = {
  isMobile: boolean;
};

const DeviceProvider: FC<DeviceProviderProps> = ({ isMobile, children }) => {
  return (
    <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>
  );
};

export { useDeviceContext, DeviceProvider };
