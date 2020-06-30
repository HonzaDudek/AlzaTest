import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { baseTheme } from '../../../../../utils/theme';
import { useDeviceContext } from '../../../../services/deviceContext';

type StyledGroupSharingTitleProps = {
  isMobile: boolean;
};

export const StyledGroupSharingTitle = styled.h2<StyledGroupSharingTitleProps>`
  font-size: ${(props): string => (props.isMobile ? '1.1rem' : '20px')};
  margin: 0 0 15px;
  padding: 0;
  color: ${baseTheme.colors.blueSecondary};
`;

export const GroupSharingTitle: FunctionComponent = props => {
  const isMobile = useDeviceContext();
  return (
    <StyledGroupSharingTitle isMobile={isMobile}>
      {props.children}
    </StyledGroupSharingTitle>
  );
};
