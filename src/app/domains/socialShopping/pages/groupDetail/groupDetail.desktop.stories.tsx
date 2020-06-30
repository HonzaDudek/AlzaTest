import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';

// Import Data
import { activeGroupMockData } from './__fixtures__/activeGroup';
import { expiredGroupMockData } from './__fixtures__/expiredGroup';
import { fullGroupMockData } from './__fixtures__/fullGroup';
import { withXD } from 'storybook-addon-xd-designs';
import { MainContentDesktop } from './components/mainContent.desktop';
import { CSFStory } from '../orderDetail/orderDetailMobile.stories';
import { groupUnavailableMockData } from './__fixtures__/groupUnavailable';
import { productNotAvailableGroupMockData } from './__fixtures__/productNotAvailableGroup';
import { GroupDetailDesktopSkeleton } from './groupDetail.skeletons';
import { inGroupActiveMockData } from './__fixtures__/inGroupActive';
import { DeviceProvider } from '../../../../services/deviceContext';
import { inGroupNotActiveFullMockData } from './__fixtures__/inGroupNotActiveFull';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { groupIsLoadingMockData } from './__fixtures__/groupIsLoading';
import { inGroupNotActiveExpiredMockData } from './__fixtures__/inGroupNotActiveExpired';
import { inGroupNotActiveProductUnavailableMockData } from './__fixtures__/inGroupNotActiveProductUnavailable';
import { inGroupNotActiveGroupUnavailableMockData } from './__fixtures__/inGroupNotActiveGroupUnavailable';

const channels = ['UA-2123123', 'UA-2155423'];
const analytics = Analytics.getInstance();
analytics.initChannels(channels);

export default {
  component: MainContentDesktop,
  title: 'Domains/Social Shopping/Pages/Group Detail/Desktop',
  excludeStories: /.*Data$/,
  decorators: [
    withKnobs,
    withXD,
    (storyFn: () => React.ReactNode): React.ReactNode => (
      <DeviceProvider isMobile={false}>
        <AnalyticsProvider Analytics={analytics}>{storyFn()}</AnalyticsProvider>
      </DeviceProvider>
    ),
  ],
};

export const ActiveGroup: CSFStory = () => {
  return <MainContentDesktop data={activeGroupMockData.data} />;
};

ActiveGroup.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/f1b06387-00c1-4a5a-adca-e51760fd3c32/Detail-objedn-vky-n-kdo-mi-nasd-lel-v2',
    },
  },
};

export const FullGroup: CSFStory = () => {
  return <MainContentDesktop data={fullGroupMockData.data} />;
};

FullGroup.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/ed47b455-4270-419d-9660-0c98a6bbe656/Detail-objedn-vky-pln-skupina-v2',
    },
  },
};

export const ExpiredGroup: CSFStory = () => {
  return <MainContentDesktop data={expiredGroupMockData.data} />;
};

ExpiredGroup.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/337d3172-10fb-4ddd-a1df-061e3cbdd656/Detail-objedn-vky-vypr-ela-v2',
    },
  },
};

export const ProductNotAvailableGroup: CSFStory = () => {
  return <MainContentDesktop data={productNotAvailableGroupMockData.data} />;
};

ProductNotAvailableGroup.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/3ecdd326-247f-4f24-b18b-b5157c985748/Detail-objedn-vky-prodej-skon-il-v2',
    },
  },
};

export const GroupUnavailable: CSFStory = () => {
  return <MainContentDesktop data={groupUnavailableMockData.data} />;
};

GroupUnavailable.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/91c1e09c-266e-438a-aa5c-815e2ffd9db7/Detail-objedn-vky-u-nejde-koupit-t-mov-v2',
    },
  },
};

export const GroupDetailDesktopSkeletonExample: CSFStory = () => {
  return <GroupDetailDesktopSkeleton />;
};

export const InGroupActiveExampleDesktop: CSFStory = () => {
  return <MainContentDesktop data={inGroupActiveMockData} redirectUrl='#' />;
};

InGroupActiveExampleDesktop.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/b2296682-8958-465e-894e-b79057eda547/Detail-objedn-vky-jsem-lenem-sb-r-m-lidi-v2',
    },
  },
};

export const InGroupNotActiveFullExampleDesktop: CSFStory = () => {
  return (
    <MainContentDesktop
      data={inGroupNotActiveFullMockData.data}
      redirectUrl='#'
    />
  );
};

InGroupNotActiveFullExampleDesktop.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/51ad60a4-205a-435b-be5b-45b5c80dd2c9/Detail-objedn-vky-jsem-lenem-napln-no-v2',
    },
  },
};

export const InGroupNotActiveExpiredExampleDesktop: CSFStory = () => {
  return (
    <MainContentDesktop
      data={inGroupNotActiveExpiredMockData.data}
      redirectUrl='#'
    />
  );
};

InGroupNotActiveExpiredExampleDesktop.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/51d2cc95-bdff-4835-bba8-34ecf26c8293/Detail-objedn-vky-jsem-len-a-vypr-ela-v2',
    },
  },
};

export const InGroupNotActiveProductUnavailableExampleDesktop: CSFStory = () => {
  return (
    <MainContentDesktop
      data={inGroupNotActiveProductUnavailableMockData.data}
      redirectUrl='#'
    />
  );
};

InGroupNotActiveProductUnavailableExampleDesktop.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/65b578a2-d049-44a6-9270-092b0e225390/Detail-objedn-vky-jsem-len-a-prodej-skon-il-v2',
    },
  },
};

export const InGroupNotActiveGroupUnavailableExampleDesktop: CSFStory = () => {
  return (
    <MainContentDesktop
      data={inGroupNotActiveGroupUnavailableMockData.data}
      redirectUrl='#'
    />
  );
};

InGroupNotActiveGroupUnavailableExampleDesktop.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/1bfa7e18-046c-4d40-a946-0a06ff3d7d8a/Detail-objedn-vky-jsem-len-a-nejde-t-mov-v2',
    },
  },
};

export const GroupIsLoadingExampleDesktop: CSFStory = () => {
  return (
    <MainContentDesktop data={groupIsLoadingMockData.data} redirectUrl='#' />
  );
};

GroupIsLoadingExampleDesktop.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/',
    },
  },
};
