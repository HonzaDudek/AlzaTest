import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import CSSClasses from './alzaHeading.module.scss';

type AlzaHeadingProps = {
  level: number;
  color?: AlzaHeadingColor;
  centered?: boolean;
  testId?: string;
};

export enum AlzaHeadingColor {
  BluePrimary = 'bluePrimary',
  White = 'white',
  Black = 'black',
  Grey = 'grey',
}

const AlzaHeading: FunctionComponent<AlzaHeadingProps> = ({
  level,
  color = AlzaHeadingColor.BluePrimary,
  children,
  centered = false,
  testId,
}) => {
  const headingLevel = `h${level}`;
  const classes = [CSSClasses.title, CSSClasses[color]];

  if (centered) {
    classes.push(CSSClasses['centered']);
  }

  return React.createElement(
    headingLevel,
    {
      className: cn(classes),
      'data-testid': testId,
    },
    children
  );
};

export default AlzaHeading;
