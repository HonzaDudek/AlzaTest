import useSocialShoppingData, {
  SocialShoppingData,
} from './useSocialShoppingData';
import useSelectPriceLevelValue, {
  UseSelectPriceLevelValue,
} from './useSelectPriceLevelValue';
import { useEffect } from 'react';

export type socialShoppingCommodityRequestType = {
  CommodityId: number;
  Count: number;
  PricePerItem: number;
  Services: number[];
  Hooks: number[];
  GroupId?: number;
};

const useSocialShoppingPage = (
  url: string,
  commodityAccessories?: socialShoppingCommodityRequestType
): SocialShoppingData & UseSelectPriceLevelValue => {
  const {
    selectedPriceLevelValue,
    selectPriceLevelValue,
  } = useSelectPriceLevelValue();
  const { loadSocialShoppingData, socialShoppingData } = useSocialShoppingData(
    url,
    commodityAccessories
  );

  useEffect(() => {
    selectPriceLevelValue(undefined);
  }, [url, commodityAccessories]);

  return {
    selectedPriceLevelValue,
    selectPriceLevelValue,
    socialShoppingData,
    loadSocialShoppingData,
  };
};

export default useSocialShoppingPage;
