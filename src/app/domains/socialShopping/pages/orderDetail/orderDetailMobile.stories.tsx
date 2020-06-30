import React, { ReactNode } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import OrderDetail from './orderDetail';
import {
  activeOrderDetailMockData,
  activeOrderDetailNoBoActionsMockData,
  activeOrderDetailNoPaymentActionMockData,
  activeOrderDetailNoRefundActionMockData,
} from './__fixtures__/activeGroupOrderMockData';
import { fullOrderDetailMockData } from './__fixtures__/fullGroupOrderMockData';
import { expiredOrderDetailMockData } from './__fixtures__/expiredGroupOrderMockData';
import { withXD } from 'storybook-addon-xd-designs';
import { DecoratorFunction } from '@storybook/addons';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import { Analytics } from '../../../../../utils/analytics/analytics';

export interface CSFStory<StoryFnReturnType = unknown> {
  (): StoryFnReturnType;
  story?: {
    title?: string;
    name?: string;
    decorators?: DecoratorFunction<StoryFnReturnType>[];
    parameters?: { [name: string]: unknown };
  };
}

const channels = ['UA-2123123', 'UA-2155423'];
const analytics = Analytics.getInstance();
analytics.initChannels(channels, true);

export default {
  component: OrderDetail,
  title: 'Domains/Social Shopping/Pages/Order Detail/Mobile',
  parameters: {
    viewport: { defaultViewport: 'iphonex' },
  },
  excludeStories: /.*Data$/,
  decorators: [
    withKnobs,
    withXD,
    (story: () => React.ReactNode): ReactNode => (
      <div style={{ padding: '20px', backgroundColor: '#F8F8F8' }}>
        <AnalyticsProvider Analytics={analytics}>{story()}</AnalyticsProvider>
      </div>
    ),
  ],
};

export const MobileActiveOrderExample: CSFStory = () => {
  return (
    <OrderDetail orderItemInfo={activeOrderDetailMockData} isMobile={true} />
  );
};

MobileActiveOrderExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/ddc472f0-baaa-419d-661a-7c94ee009de9-abf5/screen/247142d8-fae6-4f63-9a33-e6e3b29c3dfe/Mobile-Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const MobileActiveOrderExampleNoRefundAction: CSFStory = () => {
  return (
    <OrderDetail
      orderItemInfo={activeOrderDetailNoRefundActionMockData}
      isMobile={true}
    />
  );
};

MobileActiveOrderExampleNoRefundAction.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/ddc472f0-baaa-419d-661a-7c94ee009de9-abf5/screen/247142d8-fae6-4f63-9a33-e6e3b29c3dfe/Mobile-Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const MobileActiveOrderExampleNoPaymentAction: CSFStory = () => {
  return (
    <OrderDetail
      orderItemInfo={activeOrderDetailNoPaymentActionMockData}
      isMobile={true}
    />
  );
};

MobileActiveOrderExampleNoPaymentAction.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/ddc472f0-baaa-419d-661a-7c94ee009de9-abf5/screen/247142d8-fae6-4f63-9a33-e6e3b29c3dfe/Mobile-Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const MobileActiveOrderExampleNoBoAction: CSFStory = () => {
  return (
    <OrderDetail
      orderItemInfo={activeOrderDetailNoBoActionsMockData}
      isMobile={true}
    />
  );
};

MobileActiveOrderExampleNoBoAction.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/ddc472f0-baaa-419d-661a-7c94ee009de9-abf5/screen/247142d8-fae6-4f63-9a33-e6e3b29c3dfe/Mobile-Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const MobileExpiredOrderExample: CSFStory = () => {
  return (
    <OrderDetail orderItemInfo={expiredOrderDetailMockData} isMobile={true} />
  );
};

MobileExpiredOrderExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/ddc472f0-baaa-419d-661a-7c94ee009de9-abf5/screen/b4825841-1165-4a2a-b33e-320c4814fdf4/Mobile-Detail-objedn-vky-nab-dka-vypr-ela-',
    },
  },
};

export const MobileFullOrderExample: CSFStory = () => {
  return (
    <OrderDetail orderItemInfo={fullOrderDetailMockData} isMobile={true} />
  );
};

MobileFullOrderExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/ddc472f0-baaa-419d-661a-7c94ee009de9-abf5/screen/877ebb7c-1049-4a7a-bade-0a9bb8c954ea/Mobile-Detail-objedn-vky-hotovo-',
    },
  },
};
