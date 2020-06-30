import styled from 'styled-components';
import { FontWeight } from '../../../utils/theme';
import { StyledDrawerContent } from '../../sharedComponents/organisms/drawer/drawer.styles';

export const StyledConfirmDialog = styled(StyledDrawerContent)`
  padding: 0;
  width: 100%;
  button {
    margin: 5px 0;
    font-weight: ${FontWeight.Bold};
    letter-spacing: 0.75px;

    &:first-of-type {
      svg {
        margin-right: 6px;
        .a {
          .b {
            fill: white;
          }
        }
      }
    }

    &:last-of-type {
      svg {
        margin-right: 15px;
      }
      margin-bottom: 0;
    }
  }
`;
