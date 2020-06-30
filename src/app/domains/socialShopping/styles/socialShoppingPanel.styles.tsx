import styled from 'styled-components';
import { baseTheme } from '../../../../utils/theme';
import { StyledPanel } from '../../../sharedComponents/atoms/panel/panel';

type StyledSocialPanel = {
  selected?: boolean | false;
};

export const StyledSocialPanel = styled(StyledPanel)<StyledSocialPanel>`
  background: transparent;
  border: solid 2px;
  border-color: ${(props): string =>
    props.selected ? `${baseTheme.colors.blueSecondary}` : 'transparent'};
  width: 100%;
  min-height: 52px;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .participants {
    font-weight: bold;
    color: ${baseTheme.colors.grey6};
    flex-basis: 20%;
    flex-grow: 1;
  }

  .discountIndicator {
    height: 100%;
    background-color: ${baseTheme.colors.greenLight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${baseTheme.colors.greenPrimary};
    font-weight: bold;
    padding: 0 7px;
    margin-left: auto;
    margin-right: 20px;
    border-radius: 10px;
  }

  .discountInfoText {
    color: ${baseTheme.colors.greenSecondary};
    flex-wrap: wrap;
    margin-right: auto;
    flex-basis: 20%;
    flex-grow: 1;

    &--title {
      font-size: 14px;
    }

    &--subtitle {
      font-weight: 400;
      font-size: 12px;
    }
  }

  .actualPrice {
    font-weight: bold;
    color: ${baseTheme.colors.redPrice};
    text-align: right;
  }

  &:hover {
    cursor: pointer;
    border-color: ${baseTheme.colors.blueSecondary};
  }

  &:focus {
    border-color: ${baseTheme.colors.blueSecondary};
    border-radius: 4px;
  }
`;
