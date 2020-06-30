import styled from 'styled-components';
import { StyledPanel } from '../../../../sharedComponents/atoms/panel/panel';
import { baseTheme, Borders, Font, Margins } from '../../../../../utils/theme';

type StyledPriceLevelProps = {
  selected?: boolean | false;
  highlighted?: boolean;
};

export const StyledPriceLevel = styled(StyledPanel)<StyledPriceLevelProps>`
  box-sizing: content-box;
  width: calc(100% - 20px);
  height: 60px;
  // iPhone Safari fix for collapsing flexbox div
  min-height: 60px;
  max-width: 100%;
  padding: 10px;
  margin: ${Margins.defaultMarginBottom};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${Font.primary};
  border: 1px solid;
  border-color: ${(props): string =>
    props.selected ? baseTheme.colors.blueSecondary : 'transparent'};
  outline: 1px solid;
  outline-color: ${(props): string =>
    props.highlighted ? baseTheme.colors.redPrice : 'transparent'};
  transition: outline-color 0.2s linear;
  border-radius: 4px;
  background-color: ${baseTheme.colors.white};
  cursor: pointer;

  .participants {
    flex-basis: 25%;
    max-width: 100px;
    margin: auto;
    font-weight: bold;
    color: ${baseTheme.colors.grey6};
  }

  .discountIndicator {
    height: 30px;
    flex-basis: 20%;
    max-width: 50px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${baseTheme.colors.greenLight};
    color: ${baseTheme.colors.greenPrimary};
    font-weight: bold;
    border-radius: ${Borders.defaultBorderRadius};
  }

  .discountInfoText {
    flex-basis: 40%;
    // Max width that accommodates hundreds to tens of thousands on two lines
    max-width: 89px;
    margin: auto;
    padding-left: 5px;
    color: ${baseTheme.colors.greenSecondary};
  }

  .actualPrice {
    flex-basis: 25%;
    max-width: 55px;
    margin: auto;
    text-align: right;
    color: ${baseTheme.colors.redPrice};
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${baseTheme.colors.blueSecondary};
    }
  }
`;
