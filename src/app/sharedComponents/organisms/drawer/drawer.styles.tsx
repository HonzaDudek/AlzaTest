import styled from 'styled-components';
import { AlzaDrawerProps } from './alzaDrawer';
import { baseTheme, Borders, Font } from '../../../../utils/theme';
import { CLOSE_BUTTON_SIZE } from '../../atoms/drawerCloseButton/drawerCloseButton';

interface StyledContentProps {
  isOpen?: boolean;
}

type StyledDrawerProps = {
  maxHeight: string;
};
export const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
  top: 0;
  bottom: 0;
  right: 0;

  &.open {
    transform: translateY(0);
  }
`;
export const StyledDrawer = styled.div<StyledDrawerProps>`
  height: ${(props): string => props.maxHeight};
  background: ${baseTheme.colors.white};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 200;
  transform: translateY(100%);
  overflow: auto;

  &.open {
    transform: translateY(0);
  }

  &.closed {
    transform: translateY(100%);
  }

  &.slow-transition {
    transition: transform 0.3s ease-in;
  }
`;

const DrawerTopHeight = 50;

export const StyledTitle = styled.div`
  box-sizing: border-box;
  z-index: 210;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // Subtracting 5px because of :after to create top rounded border for Drawer content
  height: ${DrawerTopHeight}px;
  width: 100%;
  padding: 15px 20px 20px 20px;
  font-size: 24px;
  text-align: center;
  color: ${baseTheme.colors.white};
  background: ${baseTheme.colors.grey6};
  transform: ${(props: StyledContentProps): string =>
    props.isOpen ? 'none' : 'translate(0, 50px)'};

  .alzaDrawer__touchButton {
    display: inline-flex;
    height: 7px;
    width: 60px;
    margin-left: ${CLOSE_BUTTON_SIZE};
    border-radius: ${Borders.defaultBorderRadius};
    background-color: ${baseTheme.colors.grey0};
  }

  &:after {
    position: absolute;
    top: 43px;
    left: 0;
    display: ${(props: StyledContentProps): string =>
      props.isOpen ? 'inline-block' : 'none'};
    width: 100%;
    height: 15px;
    border-radius: 10px 10px 0 0;
    background-color: ${baseTheme.colors.white};
    vertical-align: middle;
    content: '';
    z-index: 220;
  }
`;
export const StyledDrawerContent = styled.div<AlzaDrawerProps>`
  max-height: calc(100% - 50px);
  font-family: ${Font.primary};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 0 20px;
  border-radius: 10px 10px 0 0;
  background-color: ${baseTheme.colors.white};
  
  /* Share dialog has padding internally set for desktop and mobile, 
  which is not good for drawer as it uses its own internal padding */
  div[class^="shareDialog_container"] {
    padding: 0;
  }
 }
`;
