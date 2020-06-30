import React, { CSSProperties } from 'react';
import { baseTheme, Borders } from '../../../../utils/theme';

type DrawerCloseButtonProps = {
  onClick(): void;
};

export const CLOSE_BUTTON_SIZE = '25px';

export const DrawerCloseButton: React.FC<DrawerCloseButtonProps> = (
  props: DrawerCloseButtonProps
) => {
  const closeButtonOuterStyles: CSSProperties = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: CLOSE_BUTTON_SIZE,
    width: CLOSE_BUTTON_SIZE,
    borderRadius: `${Borders.circleRadius}`,
    backgroundColor: `${baseTheme.colors.grey0}`,
    position: 'relative',
    border: 'none',
  };

  const closeButtonInnerStyles: CSSProperties = {
    position: 'absolute',
    height: '2px',
    width: '12px',
    borderRadius: `${Borders.defaultBorderRadius}`,
    backgroundColor: `${baseTheme.colors.grey6}`,
  };

  return (
    <button onClick={props.onClick} style={{ ...closeButtonOuterStyles }}>
      <span style={{ ...closeButtonInnerStyles, transform: 'rotate(45deg)' }} />
      <span
        style={{ ...closeButtonInnerStyles, transform: 'rotate(-45deg)' }}
      />
    </button>
  );
};
