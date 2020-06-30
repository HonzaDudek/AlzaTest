import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { baseTheme, Borders, Paddings } from '../../../../utils/theme';

type PanelProps = {
  onClick?: (event: SyntheticEvent) => void;
  onFocus?: (event: SyntheticEvent) => void;
};

export const StyledPanel = styled('div')<PanelProps>`
  box-sizing: border-box;
  padding: ${Paddings.defaultPadding};
  background: ${baseTheme.colors.white};
  border-radius: ${Borders.defaultBorderRadius};
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 4px;
`;

export const Panel: React.FC<PanelProps> = ({ onClick, onFocus, children }) => {
  return (
    <StyledPanel onClick={onClick} onFocus={onFocus}>
      {children}
    </StyledPanel>
  );
};

export default Panel;
