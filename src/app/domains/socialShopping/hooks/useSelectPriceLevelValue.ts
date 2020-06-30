import { useState } from 'react';

export type UseSelectPriceLevelValue = {
  selectedPriceLevelValue?: number;
  selectPriceLevelValue: (priceLevel?: number) => void;
};

const useSelectPriceLevelValue = (): UseSelectPriceLevelValue => {
  const [selectedPriceLevelValue, setSelectedDiscountType] = useState<number>();
  const selectPriceLevelValue = (discountId?: number): void => {
    setSelectedDiscountType(discountId);
  };
  return {
    selectedPriceLevelValue,
    selectPriceLevelValue,
  };
};

export default useSelectPriceLevelValue;
