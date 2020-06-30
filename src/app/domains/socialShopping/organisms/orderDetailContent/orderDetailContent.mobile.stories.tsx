import React, { ReactNode } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withXD } from 'storybook-addon-xd-designs';

import { action, HandlerFunction } from '@storybook/addon-actions';
import { CSFStory } from '../../pages/orderDetail/orderDetailMobile.stories';
import {
  activeOrderDetailMockData,
  activeOrderDetailMockDataLargeGroup,
} from '../../pages/orderDetail/__fixtures__/activeGroupOrderMockData';
import { expiredOrderDetailMockData } from '../../pages/orderDetail/__fixtures__/expiredGroupOrderMockData';
import {
  fullOrderDetailMockData,
  fullOrderDetailMockDataLargeGroup,
} from '../../pages/orderDetail/__fixtures__/fullGroupOrderMockData';
import { OrderDetailContent } from './orderDetailContent';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import AlzaHeading, {
  AlzaHeadingColor,
} from '../../../../sharedComponents/atoms/alzaHeading/alzaHeading';

const channels = ['UA-2123123', 'UA-2155423'];
const analytics = Analytics.getInstance();
analytics.initChannels(channels);

export default {
  component: OrderDetailContent,
  title: 'Domains/Social Shopping/Organisms/Order Detail Content/Mobile',
  excludeStories: /.*Data$/,
  decorators: [
    withKnobs,
    withXD,
    (story: () => React.ReactNode): ReactNode => (
      <div style={{ padding: '40px' }}>
        <AnalyticsProvider Analytics={analytics}>{story()}</AnalyticsProvider>
      </div>
    ),
  ],
};

export const MobileActiveOrderExample: CSFStory = () => {
  return (
    <>
      <AlzaHeading level={2} color={AlzaHeadingColor.BluePrimary}>
        Small group
      </AlzaHeading>
      <OrderDetailContent
        orderItemInfo={activeOrderDetailMockData}
        removeProduct={action('product removed')}
        buyProduct={action('product bought')}
        share={action('open share dialog removed')}
        isMobile={true}
        className='orderDetailContent'
      />
      <AlzaHeading level={2} color={AlzaHeadingColor.BluePrimary}>
        Large group
      </AlzaHeading>

      <OrderDetailContent
        orderItemInfo={activeOrderDetailMockDataLargeGroup}
        removeProduct={action('product removed')}
        buyProduct={action('product bought')}
        share={action('open share dialog removed')}
        isMobile={true}
        className='orderDetailContent'
      />
    </>
  );
};

MobileActiveOrderExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/e7322d8b-9772-46d6-ab24-19a999b19db7/Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const MobileActiveOrderExampleWithoutRefundAction: CSFStory = () => {
  return (
    <OrderDetailContent
      orderItemInfo={activeOrderDetailMockData}
      removeProduct={(): HandlerFunction => action('product removed')}
      share={(): HandlerFunction => action('open share dialog removed')}
      isMobile={true}
      className='orderDetailContent'
    />
  );
};

MobileActiveOrderExampleWithoutRefundAction.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/e7322d8b-9772-46d6-ab24-19a999b19db7/Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const MobileActiveOrderExampleWithoutPaymentAction: CSFStory = () => {
  return (
    <OrderDetailContent
      orderItemInfo={activeOrderDetailMockData}
      buyProduct={(): HandlerFunction => action('product bought')}
      share={(): HandlerFunction => action('open share dialog removed')}
      isMobile={true}
      className='orderDetailContent'
    />
  );
};

MobileActiveOrderExampleWithoutPaymentAction.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/e7322d8b-9772-46d6-ab24-19a999b19db7/Detail-objedn-vky-jsem-vlastn-k-',
    },
  },
};

export const MobileExpiredOrderExample: CSFStory = () => {
  return (
    <OrderDetailContent
      orderItemInfo={expiredOrderDetailMockData}
      removeProduct={action('product removed')}
      buyProduct={action('product bought')}
      share={(): HandlerFunction => action('open share dialog removed')}
      isMobile={true}
      className='orderDetailContent'
    />
  );
};

MobileExpiredOrderExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/a2aafaf6-154b-49be-827c-ee3074ea49b6/Detail-objedn-vky-nab-dka-vypr-ela-',
    },
  },
};

export const MobileFullOrderExample: CSFStory = () => {
  return (
    <>
      <AlzaHeading level={2} color={AlzaHeadingColor.BluePrimary}>
        Small group
      </AlzaHeading>
      <OrderDetailContent
        orderItemInfo={fullOrderDetailMockData}
        removeProduct={(): HandlerFunction => action('product removed')}
        buyProduct={(): HandlerFunction => action('product bought')}
        share={(): HandlerFunction => action('open share dialog removed')}
        isMobile={true}
        className='orderDetailContent'
      />
      <AlzaHeading level={2} color={AlzaHeadingColor.BluePrimary}>
        Large group
      </AlzaHeading>

      <OrderDetailContent
        orderItemInfo={fullOrderDetailMockDataLargeGroup}
        removeProduct={(): HandlerFunction => action('product removed')}
        buyProduct={(): HandlerFunction => action('product bought')}
        share={(): HandlerFunction => action('open share dialog removed')}
        isMobile={true}
        className='orderDetailContent'
      />
    </>
  );
};

MobileFullOrderExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/e9fb4337-2435-4ccf-9f42-d7e942d6c5af/Detail-objedn-vky-hotovo-',
    },
  },
};
