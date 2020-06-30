import React, { Suspense } from 'react';

import SocialShoppingShare from '../../domains/socialShopping/organisms/groupSharing/groupSharing-mobile';
import SocialShoppingShareDesktop from '../../domains/socialShopping/organisms/groupSharing/groupSharing-desktop';
import { PortalWithState } from 'react-portal';
import '../../../utils/translation';
import { DeviceProvider } from '../../services/deviceContext';
import { UserProvider } from '../../services/userContext';
import { Analytics } from '../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../services/analyticsContext';
import { LoggerProvider } from '../../services/logger/loggerContext';
import LoggerFactory from '../../services/logger/loggerFactory';

type Order5SharePropsType = {
  apiUrl: string;
  isMobile: string;
};

declare const Alza: {
  Shared: { PageData: { userId: number; userCode: string } };
};

export const Order5ShareApp: React.FunctionComponent<Order5SharePropsType> = props => {
  const shareComponent =
    props.isMobile === 'true' ? (
      <SocialShoppingShare apiUrl={props.apiUrl} />
    ) : (
      <SocialShoppingShareDesktop apiUrl={props.apiUrl} />
    );

  const analytics = Analytics.getInstance();
  analytics.initChannels(
    window?.Alza?.Shared?.PageData?.googleAnalyticsChannels ?? []
  );

  return (
    <>
      <AnalyticsProvider Analytics={analytics}>
        <PortalWithState
          defaultOpen={true}
          node={document.getElementById('socialShoppingShareBlock')}
        >
          {({ portal }): React.ReactElement => (
            <>
              {portal(
                <>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LoggerProvider Logger={LoggerFactory.getApiLogger()}>
                      <DeviceProvider isMobile={props.isMobile === 'true'}>
                        <UserProvider
                          id={Alza.Shared.PageData.userId}
                          code={Alza.Shared.PageData.userCode}
                        >
                          {shareComponent}
                        </UserProvider>
                      </DeviceProvider>
                    </LoggerProvider>
                  </Suspense>
                </>
              )}
            </>
          )}
        </PortalWithState>
      </AnalyticsProvider>
    </>
  );
};

export default Order5ShareApp;
