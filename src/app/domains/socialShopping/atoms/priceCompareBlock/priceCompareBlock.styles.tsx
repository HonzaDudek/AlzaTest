import styled, { css } from 'styled-components';
import { baseTheme, Font } from '../../../../../utils/theme';
import { PriceCompareBlockDirection } from './priceCompareBlock';

const strikethrough = css`
  content: '';
  width: 100%;
  position: absolute;
  right: 0;
  top: 50%;
  border-bottom: 1px solid ${baseTheme.colors.grey5};
  transform: skewY(-10deg);
`;

type StyledPriceCompareBlockProps = {
  direction: PriceCompareBlockDirection;
};

export const StyledComparePriceBlock = styled.div<StyledPriceCompareBlockProps>`
  font-weight: bold;
  display: flex;
  flex-direction: ${(props): string => props.direction.toString()};
  align-items: flex-end;
  width: fit-content;
  min-width: 74px;
  font-family: ${Font.primary};

  * {
    font-size: 14px;
  }

  div {
    padding: 0 0 0 5px;
  }

  .actualPrice {
    color: ${baseTheme.colors.redPrice};
    text-align: right;
    margin-right: ${(props): string | number =>
      props.direction === PriceCompareBlockDirection.Horizontal ? '15px' : 0};
  }

  .originalPrice {
    color: ${baseTheme.colors.grey5};
    display: inline-block;
    position: relative;
    &::after {
      ${strikethrough}
    }
    margin-right: ${(props): string | number =>
      props.direction === PriceCompareBlockDirection.Horizontal ? '5px' : 0};
  }
`;
