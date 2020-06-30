import React from 'react';
import { Portal } from 'react-portal';

import '../../../utils/translation';
import GroupDialog from '../../domains/socialShopping/organisms/groupDialog/groupDialog';
import { AnalyticsProvider } from '../../services/analyticsContext';
import { Analytics } from '../../../utils/analytics/analytics';

type DetailPagePropsType = {
  commodityId: number;
  preselectedAccessories: string;
  isMobile: boolean;
  apiUrl: string;
  socialToggleHeader: string;
  socialToggleBody: string;
  socialTogglePrice: string;
  popupSpanText?: string;
  popupHeaderText?: string;
  popupBodyText?: string;
  popupButtonText?: string;
  socialToggleMore: string;
};

declare global {
  interface Window {
    Alza: {
      Shared: {
        PageData: {
          commodityDetailSelectedAccessories: number[];
          isMobile: boolean;
          CDNUrl: string;
          googleAnalyticsChannels: string[];
        };
      };
      Mobile: {
        Utils: {
          Scrollbar: {
            disable(): void;
            enable(): void;
          };
        };
      };
    };
  }
}

const urlSearchParams = new URL(window.location.href).searchParams;

export const DetailPageApp: React.FunctionComponent<DetailPagePropsType> = ({
  commodityId,
  preselectedAccessories,
  apiUrl,
  socialToggleHeader,
  socialToggleBody,
  socialTogglePrice,
  popupSpanText,
  popupBodyText,
  popupHeaderText,
  popupButtonText,
  socialToggleMore,
}: DetailPagePropsType) => {
  const toggleButtonText = {
    header: socialToggleHeader,
    body: socialToggleBody,
    price: socialTogglePrice,
    more: socialToggleMore,
  };

  const analytics = Analytics.getInstance();
  analytics.initChannels(
    window?.Alza?.Shared?.PageData?.googleAnalyticsChannels ?? []
  );

  const popupTexts = {
    spanText: popupSpanText,
    headerText: popupHeaderText,
    bodyText: popupBodyText,
    buttonText: popupButtonText,
  };

  return (
    <>
      <AnalyticsProvider Analytics={analytics}>
        <Portal node={document.getElementById('socialShopping')}>
          <>
            <GroupDialog
              isDialogOpen={
                urlSearchParams.get('createSocialShoppingGroup') !== null
              }
              isMobile={window.Alza?.Shared?.PageData?.isMobile}
              commodityId={commodityId}
              preselectedAccessories={JSON.parse(preselectedAccessories)}
              toggleButtonText={toggleButtonText}
              apiUrl={apiUrl}
              popupTexts={popupTexts}
            />
          </>
        </Portal>
      </AnalyticsProvider>
    </>
  );
};

export default DetailPageApp;
