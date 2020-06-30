import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { PriceLevelType } from '../../../../../utils/apiDataTypes';
import { PriceLevel } from '../../molecules/priceLevel/priceLevel';

export type PriceLevelsProps = {
  priceLevels: PriceLevelType[] | null | undefined;
  selectedPriceLevelValue?: number | undefined;
  selectPriceLevel: (index: number) => void;
  testId?: string;
};

export type PriceLevelsRefType = {
  highlightItems(): () => void;
};

export const PriceLevels: React.ForwardRefExoticComponent<PriceLevelsProps &
  // eslint-disable-next-line react/display-name
  React.RefAttributes<unknown>> = forwardRef(
  ({ priceLevels, selectedPriceLevelValue, selectPriceLevel, testId }, ref) => {
    const HIGHLIGHT_DURATION = 750;
    const [pricesHighlihted, setPricesHighlihted] = useState(false);

    useEffect(() => {
      if (priceLevels?.length === 1) {
        selectPriceLevel(0);
      }
    }, [priceLevels]);

    useImperativeHandle(ref, () => ({
      highlightItems(): void {
        setPricesHighlihted(true);
        setTimeout(() => {
          setPricesHighlihted(false);
        }, HIGHLIGHT_DURATION);
      },
    }));

    return (
      <>
        {priceLevels?.map((priceLevel: PriceLevelType, index: number) => (
          <PriceLevel
            isLoading={false}
            key={priceLevel.name}
            priceLevel={priceLevel}
            percentageDiscount={priceLevel.discountRate}
            onClick={(): void => selectPriceLevel(index)}
            selected={selectedPriceLevelValue === index}
            highlighted={pricesHighlihted}
            testId={testId}
          />
        ))}
      </>
    );
  }
);
