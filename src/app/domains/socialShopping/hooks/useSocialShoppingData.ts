import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SocialShoppingCommodityAccessories,
  socialShoppingDataType,
} from '../../../../utils/apiDataTypes';
import { socialShoppingCommodityRequestType } from './useSocialShoppingPage';
import { formatApiResponse } from '../../../../utils/formFormatter';
import { getCurrentCulture } from '../../../services/applicationService';

export type UseSocialShoppingState = {
  data?: socialShoppingDataType;
  isLoading?: boolean;
  isError?: boolean;
};

export type LoadSocialShoppingDataType = (
  url: string,
  commodityAccessories: SocialShoppingCommodityAccessories
) => void;

export type SocialShoppingData = {
  loadSocialShoppingData: LoadSocialShoppingDataType;
  socialShoppingData: UseSocialShoppingState;
};

const useSocialShoppingData = (
  url: string,
  commodityAccessories?: socialShoppingCommodityRequestType
): SocialShoppingData => {
  const [socialShoppingData, setSocialShoppingData] = useState<
    UseSocialShoppingState
  >({
    isLoading: true,
    isError: false,
  });

  const loadSocialShoppingData = (
    url: string | undefined,
    commodityAccessories: SocialShoppingCommodityAccessories
  ): void => {
    if (typeof url === 'string') {
      axios
        .post(url, commodityAccessories, {
          headers: { 'Accept-Language': getCurrentCulture() },
        })
        .then(response => {
          setSocialShoppingData({
            data: formatApiResponse(response.data),
            isLoading: false,
            isError: false,
          });
        })
        .catch(() =>
          setSocialShoppingData({ isLoading: false, isError: true })
        );
    }
  };

  useEffect(() => {
    setSocialShoppingData({ isLoading: true, isError: false });
    if (!commodityAccessories) {
      return;
    }
    loadSocialShoppingData(url, commodityAccessories);
  }, [url, commodityAccessories]);

  return {
    socialShoppingData,
    loadSocialShoppingData,
  };
};

export default useSocialShoppingData;
