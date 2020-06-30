import styled from 'styled-components';
import { baseTheme, FontWeight } from '../../../../utils/theme';
import {
  ProgressBarFontSize,
  ProgressBarHeight,
  ProgressBarInnerColor,
  ProgressBarTextColor,
} from './progressBar.theme';

export const StyledProgressBar = styled.div`
  height: ${ProgressBarHeight};
  border-radius: ${ProgressBarHeight};
  background: ${baseTheme.colors.grey1};
  margin: 0 0 10px;
  width: 100%;
`;

type StyledProgressBarInnerProps = {
  now: number;
};

export const StyledProgressBarInner = styled.div<StyledProgressBarInnerProps>`
  height: ${ProgressBarHeight};
  border-radius: ${ProgressBarHeight};
  background: ${ProgressBarInnerColor};
  width: ${(props): string => props.now + '%'};
  color: ${ProgressBarTextColor};
  font-size: ${ProgressBarFontSize};
  font-weight: ${FontWeight.Medium};
  text-align: center;
  line-height: ${ProgressBarHeight};
`;
