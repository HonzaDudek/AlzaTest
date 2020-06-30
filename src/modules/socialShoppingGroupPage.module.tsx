import BaseModule from './base.module';
import GroupDetail, {
  GroupDetailProps,
} from '../app/domains/socialShopping/pages/groupDetail/groupDetail';
import '../utils/translation';
import React, { FC } from 'react';
import { Analytics } from '../utils/analytics/analytics';
import { AnalyticsProvider } from '../app/services/analyticsContext';

const ProviderBootstrap: FC = ({ children }) => {
  const analytics = Analytics.getInstance();
  analytics.initChannels(
    window?.Alza?.Shared?.PageData?.googleAnalyticsChannels ?? []
  );

  return (
    <AnalyticsProvider Analytics={analytics}>{children}</AnalyticsProvider>
  );
};

export class SocialShoppingGroupPage extends BaseModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getComponentDictionary(): any {
    const BootstrappedGroupDetail: FC<GroupDetailProps> = props => (
      <ProviderBootstrap>
        <GroupDetail {...props} />
      </ProviderBootstrap>
    );

    return {
      SocialShoppingLandingPage: BootstrappedGroupDetail,
    };
  }
}

BaseModule.render(new SocialShoppingGroupPage());
