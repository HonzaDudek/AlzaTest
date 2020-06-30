import React, { FunctionComponent } from 'react';
import { baseTheme } from '../../../../utils/theme';
import cn from 'classnames';
import CSSClasses from './alzaText.module.scss';

type AlzaTextProps = {
  tag?: AlzaTextTag;
  color?: string;
  centered?: boolean;
  size?: string;
  className?: string;
  testId?: string;
  lineHeight?: string;
};

export enum AlzaTextTag {
  Paragraph = 'p',
  Span = 'span',
}

const AlzaText: FunctionComponent<AlzaTextProps> = ({
  tag = AlzaTextTag.Paragraph,
  color = baseTheme.colors.grey5,
  centered = false,
  size = '14px',
  children,
  className,
  testId,
  lineHeight,
}) => {
  const classes = [CSSClasses.p];

  if (centered) {
    classes.push(CSSClasses['centered']);
  }

  return React.createElement(
    tag,
    {
      className: cn(classes, className),
      style: {
        color: color,
        fontSize: size,
        lineHeight: lineHeight,
      },
      'data-testid': testId,
    },
    children
  );
};

export default AlzaText;
