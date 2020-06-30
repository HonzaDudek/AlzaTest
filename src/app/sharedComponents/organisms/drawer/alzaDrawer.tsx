import React, { ReactNode, useEffect, useState } from 'react';
import { Drawer } from './drawerHandler';

export interface AlzaDrawerProps {
  /**
   * Sets default state of drawer
   */
  isOpen?: boolean | false;

  /**
   * Function, taht is called when drawer opens or closes
   */
  onChange?: () => void;

  /**
   * If False, drawer only rolls up to its content height
   */
  fullScreen?: boolean;

  /**
   * For sticky footer insert its content here
   */
  footerContent?: ReactNode;
}

/**
 * Alza drawer acts as dialog on mobile web. It has scrollable content area and can be closed with swipe.
 */
const AlzaDrawer: React.FunctionComponent<AlzaDrawerProps> = ({
  isOpen = false,
  onChange,
  fullScreen = false,
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen);

  useEffect(() => setIsDrawerOpen(isOpen), [isOpen]);

  const handleOnChange = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
    if (onChange) {
      onChange();
    }
  };

  return (
    <Drawer
      isOpen={isDrawerOpen}
      onChange={handleOnChange}
      fullScreen={fullScreen}
    >
      {children}
    </Drawer>
  );
};

export default AlzaDrawer;
