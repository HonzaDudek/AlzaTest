import React, { FunctionComponent } from 'react';
import {
  StyledProgressBar,
  StyledProgressBarInner,
} from './progressBar.styles';
import { ThemeProvider } from 'styled-components';
import {
  ProgressBarColorThemeEnum,
  ProgressBarSizeEnum,
} from './progressBar.theme';
import { getPercentage } from './progressBar.helper';

export type ProgressBarProps = {
  maxValue?: number;
  minValue?: number;
  now?: number;
  showProgress?: boolean;
  colorTheme?: ProgressBarColorThemeEnum;
  size?: ProgressBarSizeEnum;
};

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  maxValue = 100,
  minValue = 0,
  now = 75,
  showProgress = false,
  colorTheme = ProgressBarColorThemeEnum.Red,
  size = ProgressBarSizeEnum.Medium,
}) => {
  let progressText = '';

  if (showProgress) {
    progressText = now + ' %';
  }

  return (
    <ThemeProvider theme={{ colorTheme: colorTheme, size: size }}>
      <StyledProgressBar>
        <StyledProgressBarInner
          className='progress-bar__inner'
          role='progressbar'
          aria-valuenow={now}
          aria-valuemin={minValue}
          aria-valuemax={maxValue}
          now={now}
          style={{
            width: `${getPercentage(now, minValue, maxValue)}%`,
          }}
        >
          {progressText}
        </StyledProgressBarInner>
      </StyledProgressBar>
    </ThemeProvider>
  );
};

export default ProgressBar;
