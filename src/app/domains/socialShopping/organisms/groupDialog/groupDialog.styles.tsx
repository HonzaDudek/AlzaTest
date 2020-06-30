import { baseTheme } from '../../../../../utils/theme';
import styled from 'styled-components';
import { StyledPanel } from '../../../../sharedComponents/atoms/panel/panel';

export const StyledProductInfoBlock = styled(StyledPanel)`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  align-items: center;
  box-shadow: none;
`;

export const StyledContent = styled.div`
  padding: 0 20px;
  font-weight: 400;
  line-height: 22px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 25px 0;
  color: ${baseTheme.colors.blueSecondary};
`;

export const StyledH3 = styled.h3`
  color: ${baseTheme.colors.dark1};
  font-size: 21px;
  font-weight: 400;
  margin: 0 auto 30px auto;
  text-align: center;
`;

export const AlzaLinkWrapper = styled.div`
  a {
    color: ${baseTheme.colors.bluePrimary};
  }

  svg .b {
    fill: ${baseTheme.colors.bluePrimary};
  }
`;
