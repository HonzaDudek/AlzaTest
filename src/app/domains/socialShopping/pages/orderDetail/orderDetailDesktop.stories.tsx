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
import { CSFStory } from './orderDetailMobile.stories';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import { Analytics } from '../../../../../utils/analytics/analytics';

const channels = ['UA-2123123', 'UA-2155423'];
const analytics = Analytics.getInstance();
analytics.initChannels(channels);

export default {
  component: OrderDetail,
  title: 'Domains/Social Shopping/Pages/Order Detail/Desktop',
  excludeStories: /.*Data$/,
  decorators: [
    withKnobs,
    withXD,
    (story: () => React.ReactNode): ReactNode => (
      <div
        style={{
          padding: '40px',
          backgroundColor: '#F8F8F8',
          height: '2000px',
        }}
      >
        <AnalyticsProvider Analytics={analytics}>{story()}</AnalyticsProvider>
      </div>
    ),
  ],
};

export const DesktopActiveOrderExample: CSFStory = () => {
  return (
    <OrderDetail orderItemInfo={activeOrderDetailMockData} isMobile={false} />
  );
};

DesktopActiveOrderExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/e7322d8b-9772-46d6-ab24-19a999b19db7/Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const DesktopActiveOrderExampleNoRefundAction: CSFStory = () => {
  return (
    <OrderDetail
      orderItemInfo={activeOrderDetailNoRefundActionMockData}
      isMobile={false}
    />
  );
};

DesktopActiveOrderExampleNoRefundAction.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/e7322d8b-9772-46d6-ab24-19a999b19db7/Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const DesktopActiveOrderExampleNoPaymentAction: CSFStory = () => {
  return (
    <OrderDetail
      orderItemInfo={activeOrderDetailNoPaymentActionMockData}
      isMobile={false}
    />
  );
};

DesktopActiveOrderExampleNoPaymentAction.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/e7322d8b-9772-46d6-ab24-19a999b19db7/Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const DesktopActiveOrderExampleNoBoActions: CSFStory = () => {
  return (
    <OrderDetail
      orderItemInfo={activeOrderDetailNoBoActionsMockData}
      isMobile={false}
    />
  );
};

DesktopActiveOrderExampleNoPaymentAction.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/e7322d8b-9772-46d6-ab24-19a999b19db7/Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const DesktopExpiredOrderExample: CSFStory = () => {
  return (
    <OrderDetail orderItemInfo={expiredOrderDetailMockData} isMobile={false} />
  );
};

DesktopExpiredOrderExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/a2aafaf6-154b-49be-827c-ee3074ea49b6/Detail-objedn-vky-nab-dka-vypr-ela-',
    },
  },
};

export const DesktopFullOrderExample: CSFStory = () => {
  return (
    <OrderDetail orderItemInfo={fullOrderDetailMockData} isMobile={false} />
  );
};

DesktopFullOrderExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/e9fb4337-2435-4ccf-9f42-d7e942d6c5af/Detail-objedn-vky-hotovo-',
    },
  },
};
