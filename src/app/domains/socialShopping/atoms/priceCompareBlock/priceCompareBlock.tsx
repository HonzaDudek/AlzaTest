import React from 'react';
import { StyledComparePriceBlock } from './priceCompareBlock.styles';

export type PriceCompareBlockProps = {
  originalPrice?: string | null;
  actualPrice?: string | null;
  direction?: PriceCompareBlockDirection;
};

export enum PriceCompareBlockDirection {
  Vertical = 'column',
  Horizontal = 'row',
}

export const PriceCompareBlock: React.FC<PriceCompareBlockProps> = ({
  originalPrice,
  actualPrice,
  direction = PriceCompareBlockDirection.Vertical,
}: PriceCompareBlockProps) => {
  return (
    <StyledComparePriceBlock direction={direction}>
      <div
        className='originalPrice'
        data-testid='priceCompareBlock__originalPrice'
      >
        {originalPrice}
      </div>
      <div className='actualPrice' data-testid='priceCompareBlock__actualPrice'>
        {actualPrice}
      </div>
    </StyledComparePriceBlock>
  );
};
