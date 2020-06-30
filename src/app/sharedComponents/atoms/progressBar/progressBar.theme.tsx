import theme from 'styled-theming';
import { baseTheme } from '../../../../utils/theme';

export const ProgressBarInnerColor = theme('colorTheme', {
  red: baseTheme.colors.redPrimary,
  blue: baseTheme.colors.blueSecondary,
  yellow: baseTheme.colors.yellow,
  green: baseTheme.colors.greenPrimary,
});

export const ProgressBarTextColor = theme('colorTheme', {
  red: baseTheme.colors.white,
  blue: baseTheme.colors.white,
  yellow: baseTheme.colors.black,
  green: baseTheme.colors.greenPrimary,
});

export enum ProgressBarColorThemeEnum {
  Red = 'red',
  Blue = 'blue',
  Yellow = 'yellow',
  Green = 'green',
}

export const ProgressBarHeight = theme('size', {
  small: '10px',
  medium: '15px',
  big: '20px',
});

export const ProgressBarFontSize = theme('size', {
  small: '10px',
  medium: '15px',
  big: '20px',
});

export enum ProgressBarSizeEnum {
  Small = 'small',
  Medium = 'medium',
  Big = 'big',
}
