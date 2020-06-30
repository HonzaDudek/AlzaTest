import React from 'react';

import {
  StyledModalDialog,
  StyledModalDialogContent,
  StyledModalDialogCloseIcon,
} from './modalDialog.styles';
import IconSVG from '../iconSVG/iconSVG';

interface ModalDialogProps {
  isOpen?: boolean;
  onChange?: () => void;
  height?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  testId?: string;
}

const ModalDialog: React.FunctionComponent<ModalDialogProps> = (
  { isOpen = false, onChange, height, width, maxWidth, maxHeight, children },
  otherProps
) => {
  const handleModalBackdropClick: (event: React.MouseEvent) => void = (
    event: React.MouseEvent
  ) => {
    if (event?.target === event?.currentTarget) {
      onChange && onChange();
    }
  };

  const handleCloseIconClick: () => void = () => {
    onChange && onChange();
  };

  return (
    <>
      <StyledModalDialog
        onClick={handleModalBackdropClick}
        isOpen={isOpen}
        data-testid='modalDialog'
        className={isOpen ? 'open' : 'closed'}
      >
        <StyledModalDialogContent
          height={height}
          width={width}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          {...otherProps}
        >
          <StyledModalDialogCloseIcon onClick={handleCloseIconClick}>
            <IconSVG
              src='Styles/images/svg/f-cross.svg'
              height={22}
              width={22}
            />
          </StyledModalDialogCloseIcon>
          {children}
        </StyledModalDialogContent>
      </StyledModalDialog>
    </>
  );
};

export default ModalDialog;
