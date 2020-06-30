import React, { ReactNode } from 'react';
import ProgressBar from './progressBar';
import {
  ProgressBarColorThemeEnum,
  ProgressBarSizeEnum,
} from './progressBar.theme';

export default {
  component: ProgressBar,
  title: 'Shared Components/Atoms/Progress bar',
};

export const progressbar: ReactNode = () => {
  return (
    <div>
      <ProgressBar showProgress={true} size={ProgressBarSizeEnum.Small} />
    </div>
  );
};

export const progressbarSizes: ReactNode = () => {
  return (
    <div>
      <h3>Small</h3>
      <ProgressBar showProgress={true} size={ProgressBarSizeEnum.Small} />
      <h3>Medium</h3>
      <ProgressBar showProgress={true} size={ProgressBarSizeEnum.Medium} />
      <h3>Big</h3>
      <ProgressBar showProgress={true} size={ProgressBarSizeEnum.Big} />
    </div>
  );
};

export const progressbarColors: ReactNode = () => {
  return (
    <div>
      <h3>Red</h3>
      <ProgressBar
        showProgress={true}
        colorTheme={ProgressBarColorThemeEnum.Red}
      />
      <h3>Blue</h3>
      <ProgressBar
        showProgress={true}
        colorTheme={ProgressBarColorThemeEnum.Blue}
      />
      <h3>Yellow</h3>
      <ProgressBar
        showProgress={true}
        colorTheme={ProgressBarColorThemeEnum.Yellow}
      />
    </div>
  );
};
