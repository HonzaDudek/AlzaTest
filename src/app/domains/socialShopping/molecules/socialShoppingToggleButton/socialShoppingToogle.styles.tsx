import styled from 'styled-components';
import { StyledPanel } from '../../../../sharedComponents/atoms/panel/panel';
import { baseTheme, Font, FontWeight } from '../../../../../utils/theme';

export const StyledOpenSocialShoppingPanel = styled(StyledPanel)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 85px;
  min-height: 52px;
  padding: 10px;
  font-family: ${Font.primary};

  .icon {
    width: 20px;
  }

  .content {
    flex-grow: 4;
    margin: 0 12px;
    &__header {
      margin-bottom: 2px;
      font-size: 14px;
      &--first {
        color: #f30000;
        font-weight: bold;
      }
      &--second {
        font-weight: ${FontWeight.Bold};
        color: ${baseTheme.colors.bluePrimaryLight};
      }
    }
    &__body {
      font-size: 13px;
      font-weight: ${FontWeight.Regular};
      color: ${baseTheme.colors.grey6};

      &__more {
        display: inline-block;
        margin-left: 5px;
        text-decoration: underline;
        &:hover {
          color: ${baseTheme.colors.grey5};
        }
      }
    }
  }

  .price {
    font-size: 18px;
    font-weight: ${FontWeight.Bold};
    color: ${baseTheme.colors.redPrice};
    min-width: fit-content;
    margin-left: auto;
  }

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 4px;
  }
`;
