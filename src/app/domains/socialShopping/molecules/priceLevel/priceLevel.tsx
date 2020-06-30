import React, { SyntheticEvent } from 'react';
import { PriceLevelType } from '../../../../../utils/apiDataTypes';
import { PriceLevelSkeleton } from '../../organisms/groupDialog/groupDialog.skeletons';
import { StyledPriceLevel } from './priceLevel.styles';

export type PriceLevelProps = {
  isLoading: boolean;
  priceLevel?: PriceLevelType;
  percentageDiscount?: string;
  onClick?: (event: SyntheticEvent) => void;
  onFocus?: (event: SyntheticEvent) => void;
  selected: boolean | false;
  highlighted?: boolean;
  testId?: string;
};

export const PriceLevel: React.FunctionComponent<PriceLevelProps> = ({
  isLoading,
  priceLevel,
  percentageDiscount,
  onClick,
  selected,
  highlighted,
  testId,
}) => {
  if (isLoading) {
    return <PriceLevelSkeleton />;
  } else {
    return (
      <StyledPriceLevel
        selected={selected}
        key={priceLevel?.name}
        onClick={onClick}
        tabIndex={0}
        highlighted={highlighted}
        data-testid={testId}
      >
        <p className='participants'>{priceLevel?.name}</p>
        <div className='discountIndicator'>{percentageDiscount}</div>
        <div className='discountInfoText'>{priceLevel?.priceLabel}</div>
        <p className='actualPrice'>{priceLevel?.priceText}</p>
      </StyledPriceLevel>
    );
  }
};
