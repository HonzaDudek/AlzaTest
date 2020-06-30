import React from 'react';
import { StyledDrawerFooter } from './drawerFooter.styles';

export const DrawerFooter: React.FunctionComponent = ({ children }) => {
  return <StyledDrawerFooter>{children}</StyledDrawerFooter>;
};
