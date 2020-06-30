import React, { FC } from 'react';

type ClickableWrapperProps = {
  onClick: (ev?: React.MouseEvent<HTMLDivElement>) => void;
  clickable?: boolean;
  pointer?: boolean;
};

export const ClickableWrapper: FC<ClickableWrapperProps> = ({
  onClick,
  clickable = true,
  pointer = false,
  children,
}) => (
  <div
    style={{
      position: 'relative',
      display: 'inline-block',
      cursor: pointer ? 'pointer' : 'normal',
    }}
  >
    <div
      onClick={onClick}
      onKeyUp={(ev: React.KeyboardEvent<HTMLDivElement>): void => {
        if (ev.keyCode === 13) {
          onClick();
        }
      }}
      role={'button'}
      tabIndex={0}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: clickable ? 'block' : 'none',
      }}
    ></div>
    {children}
  </div>
);
