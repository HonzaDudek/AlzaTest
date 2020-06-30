import styled from 'styled-components';
import {
  baseTheme,
  defaultPaddingValue,
  Margins,
} from '../../../../utils/theme';
import { StyledPanel } from '../../atoms/panel/panel';

export const StyledDrawerFooter = styled(StyledPanel)`
  box-sizing: border-box;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  width: calc(100% + 40px);
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: ${Margins.defaultMarginTop};
  box-shadow: #0000001a 0px -5px 6px;
  padding: ${defaultPaddingValue / 2}px;
  background: ${baseTheme.colors.white};
`;
