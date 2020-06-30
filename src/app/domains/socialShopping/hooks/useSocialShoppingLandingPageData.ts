import { useEffect, useState } from 'react';
import axios from 'axios';

import { GroupDetailResponse } from '../../../services/socialShopping/groupDetail.data';
import { getCurrentCulture } from '../../../services/applicationService';

export type LoadSocialShoppingLandingPageData = (groupApiUrl: string) => void;

export type SocialShoppingLandingPageData = {
  socialShoppingLandingPageData: GroupDetailResponse;
  loadSocialShoppingLandingPageData: LoadSocialShoppingLandingPageData;
};

const useSocialShoppingLandingPageData = (
  url: string
): SocialShoppingLandingPageData => {
  const [
    socialShoppingLandingPageData,
    setSocialShoppingLandingPageData,
  ] = useState<GroupDetailResponse>({
    isLoading: true,
    isError: false,
  });

  const loadSocialShoppingLandingPageData = (url: string | undefined): void => {
    axios
      .get(`${url}`, {
        headers: { 'Accept-Language': getCurrentCulture() },
      })
      .then(response => {
        if (!response.data) {
          throw new Error('No data received from API');
        }
        setSocialShoppingLandingPageData({
          data: response.data,
          isLoading: false,
          isError: false,
        });
      })
      .catch(() => {
        setSocialShoppingLandingPageData({
          isLoading: false,
          isError: true,
        });
      });
  };

  useEffect(() => {
    setSocialShoppingLandingPageData({
      isLoading: true,
      isError: false,
    });
    loadSocialShoppingLandingPageData(url);
  }, [url]);

  return {
    socialShoppingLandingPageData,
    loadSocialShoppingLandingPageData,
  };
};

export default useSocialShoppingLandingPageData;
