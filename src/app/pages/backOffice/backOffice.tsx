import React, { Suspense } from 'react';
import OrderDetail from '../../domains/socialShopping/pages/orderDetail/orderDetail';
import { SocialShoppingOrderDetailProps } from '../../domains/socialShopping/pages/orderDetail/orderDetail.data';
import '../../../utils/translation';
import { Analytics } from '../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../services/analyticsContext';

type BackOfficePageProps = {
  orderItemInfo: string;
  commodityId: string;
};

const mobileBreakpoint = 980;

export const BackOfficePage: React.FunctionComponent<BackOfficePageProps> = ({
  orderItemInfo,
}: BackOfficePageProps) => {
  const analytics = Analytics.getInstance();
  analytics.initChannels(
    window?.Alza?.Shared?.PageData?.googleAnalyticsChannels ?? []
  );

  if (orderItemInfo) {
    const orderInfo: SocialShoppingOrderDetailProps = JSON.parse(orderItemInfo);

    let isMobile = true;

    // TODO: get isMobile method from PageData.Shared into Angular component in project
    if (window.innerWidth > mobileBreakpoint) {
      isMobile = false;
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <AnalyticsProvider Analytics={analytics}>
          <OrderDetail orderItemInfo={orderInfo} isMobile={isMobile} />
        </AnalyticsProvider>
      </Suspense>
    );
  } else {
    return null;
  }
};

export default BackOfficePage;
