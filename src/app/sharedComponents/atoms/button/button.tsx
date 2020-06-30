import React, { FC } from 'react';
import cn from 'classnames';
import CssClasses from './button.module.scss';

export enum ButtonColor {
  Grey = 'grey',
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  White = 'white',
}

export enum ButtonSize {
  Small = 'small',
  Normal = 'normal',
  Large = 'large',
}

export enum ButtonWidth {
  Inline = 'inline',
  FullWidth = 'fullWidth',
}

export enum ButtonTextAlign {
  Left = 'textLeft',
  Center = 'textCenter',
  Right = 'textRight',
}

type ButtonProps = {
  color?: ButtonColor;
  size?: ButtonSize;
  width?: ButtonWidth;
  text?: string;
  textAlign?: ButtonTextAlign;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  'data-testid'?: string;
};

/**
 * Button component
 * @param props Component props
 */
export const Button: FC<ButtonProps> = props => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={cn(
          CssClasses.button,
          CssClasses[props.color ?? ButtonColor.Grey],
          CssClasses[props.size ?? ButtonSize.Normal],
          CssClasses[props.width ?? ButtonWidth.Inline],
          CssClasses[props.textAlign ?? ButtonTextAlign.Left]
        )}
        disabled={props.disabled}
        data-testid={props['data-testid']}
      >
        {props.children}
      </button>
    </>
  );
};

// Set default props
Button.defaultProps = {
  color: ButtonColor.Grey,
  size: ButtonSize.Normal,
  width: ButtonWidth.Inline,
  textAlign: ButtonTextAlign.Left,
  disabled: false,
};

export default Button;
