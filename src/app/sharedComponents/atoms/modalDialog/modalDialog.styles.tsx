import styled from 'styled-components';
import { baseTheme } from '../../../../utils/theme';

type StyledModalDialogProps = {
  isOpen?: boolean;
};

type StyledContentProps = {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
};

type StyledModalDialogCloseIconProps = {
  onClick?: (event: React.MouseEvent) => void;
};

export const StyledModalDialog = styled.div<StyledModalDialogProps>`
  display: ${(props): string => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20000;
`;

export const StyledModalDialogCloseIcon = styled.span<
  StyledModalDialogCloseIconProps
>`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  opacity: 0.3;
  line-height: 0;

  &:hover {
    opacity: 1;
  }
`;

export const StyledModalDialogContent = styled.div<StyledContentProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${baseTheme.colors.white};
  height: ${(props): string => props.height || 'auto'};
  width: ${(props): string => props.width || 'auto'};
  max-height: ${(props): string => props.maxHeight || 'auto'};
  max-width: ${(props): string => props.maxWidth || 'auto'};
  border-radius: 5px;
  box-shadow: 0 0 10px 1px $color-gray-60;
`;
