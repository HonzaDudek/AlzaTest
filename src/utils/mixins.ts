import { css } from 'styled-components';
import { baseTheme } from './theme';

export const strikethrough = css`
  content: '';
  width: 100%;
  position: absolute;
  right: 0;
  top: 50%;
  border-bottom: 1px solid ${baseTheme.colors.grey5};
  transform: skewY(-10deg);
`;

export const buttonIcon = css`
  margin-right: 10px;
  .a,
  .b {
    stroke: none;
  }
`;

export const customOrderListIndex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${baseTheme.colors.blueSecondary};
  color: white;
  top: -15px;
`;

export const CenteredFlexboxColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenteredFlexboxRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
