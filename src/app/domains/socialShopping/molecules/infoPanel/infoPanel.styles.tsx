import styled from 'styled-components';
import {
  CenteredFlexboxColumn,
  customOrderListIndex,
} from '../../../../../utils/mixins';
import { baseTheme } from '../../../../../utils/theme';

export const StyledInfoPanel = styled.div`
  ${CenteredFlexboxColumn};
  box-sizing: border-box;
`;

export const StyledInfoPanelWrapper = styled(StyledInfoPanel)`
  padding: 0 0 25px 0;
  margin-top: 40px;
  width: 100%;

  p {
    margin: 15px auto 0 auto;
    text-align: center;
    max-width: 75%;
    flex-grow: 1;
  }

  strong {
    color: ${baseTheme.colors.dark1};
  }

  .index {
    ${customOrderListIndex}
  }
`;
