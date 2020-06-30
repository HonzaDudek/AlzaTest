import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import CssClasses from './buttonIcon.module.scss';
import { ButtonSize } from './button';

export enum ButtonIconPosition {
  Left = 'left',
  Right = 'right',
}

export type ButtonIconProps = {
  src: string;
  alt?: string;
  position?: ButtonIconPosition;
  width?: string;
  height?: string;
  size?: ButtonSize;
};

/**
 * Button icon component
 * @param props Component props
 */
export const ButtonIcon: FunctionComponent<ButtonIconProps> = props => {
  // default icon style
  const imgStyle = {
    width: 'auto',
    height: 'auto',
  };

  if (typeof props.width !== 'undefined') {
    imgStyle.width = props.width;
  }

  if (typeof props.height !== 'undefined') {
    imgStyle.height = props.height;
  }

  return (
    <img
      src={props.src}
      alt={props.alt}
      style={imgStyle}
      className={cn(
        CssClasses.icon,
        CssClasses[props.position ?? ButtonIconPosition.Left],
        CssClasses[props.size ?? ButtonSize.Normal]
      )}
    />
  );
};

// Set default props
ButtonIcon.defaultProps = {
  alt: '',
  position: ButtonIconPosition.Left,
  size: ButtonSize.Normal,
};

export default ButtonIcon;
