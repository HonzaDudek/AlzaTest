import React, { useState } from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { MainContentMobile } from './components/mainContent.mobile';

// Import Data
import { activeGroupMockData } from './__fixtures__/activeGroup';
import { expiredGroupMockData } from './__fixtures__/expiredGroup';
import { fullGroupMockData } from './__fixtures__/fullGroup';
import { productNotAvailableGroupMockData } from './__fixtures__/productNotAvailableGroup';
import { action, HandlerFunction } from '@storybook/addon-actions';
import { withXD } from 'storybook-addon-xd-designs';
import { CSFStory } from '../orderDetail/orderDetailMobile.stories';
import { groupUnavailableMockData } from './__fixtures__/groupUnavailable';
import { GroupDetailMobileSkeleton } from './groupDetail.skeletons';
import { inGroupActiveMockData } from './__fixtures__/inGroupActive';
import { DeviceProvider } from '../../../../services/deviceContext';
import { Portal } from 'react-portal';
import AlzaDrawer from '../../../../sharedComponents/organisms/drawer/alzaDrawer';
import { ShareDialogContent } from './components/shareDialog';
import { generateShareGroupInfo } from './groupDetail';
import { inGroupNotActiveFullMockData } from './__fixtures__/inGroupNotActiveFull';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { inGroupNotActiveExpiredMockData } from './__fixtures__/inGroupNotActiveExpired';
import { inGroupNotActiveProductUnavailableMockData } from './__fixtures__/inGroupNotActiveProductUnavailable';
import { inGroupNotActiveGroupUnavailableMockData } from './__fixtures__/inGroupNotActiveGroupUnavailable';

const channels = ['UA-2123123', 'UA-2155423'];
const analytics = Analytics.getInstance();
analytics.initChannels(channels, true);

export default {
  component: MainContentMobile,
  title: 'Domains/Social Shopping/Pages/Group Detail/Mobile',
  parameters: {
    viewport: { defaultViewport: 'iphonex' },
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/ddc472f0-baaa-419d-661a-7c94ee009de9-abf5/screen/bd8650d9-eadf-4a4f-921a-56b430aa21a8/Mobile-Detail-objedn-vky-n-kdo-mi-nasd-lel-',
    },
  },
  excludeStories: /.*Data$/,
  decorators: [
    withKnobs,
    withXD,
    (storyFn: () => React.ReactNode): React.ReactNode => (
      <DeviceProvider isMobile={true}>
        <AnalyticsProvider Analytics={analytics}>{storyFn()}</AnalyticsProvider>
      </DeviceProvider>
    ),
  ],
};

export const ActiveGroup: CSFStory = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const groupInfo = generateShareGroupInfo(activeGroupMockData);
  return (
    <>
      <MainContentMobile
        data={activeGroupMockData.data}
        share={(): void | {} => setIsDialogOpen(true)}
        redirectUrl={'#'}
      />
      <Portal>
        <AlzaDrawer
          isOpen={isDialogOpen}
          onChange={(): void => setIsDialogOpen(false)}
          fullScreen={false}
        >
          <ShareDialogContent groupInfo={groupInfo} />
        </AlzaDrawer>
      </Portal>
    </>
  );
};

ActiveGroup.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/2a0bb568-e269-4e2f-8f89-ebb04915569e/Mobile-Detail-t-mu-n-kdo-mi-nasd-lel-V2',
    },
  },
};

export const FullGroup: CSFStory = () => {
  return (
    <MainContentMobile
      data={fullGroupMockData.data}
      share={(): HandlerFunction | {} => action('triggered share dialog')}
    />
  );
};

FullGroup.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/11875505-31d9-4d06-a3b8-d0bb5f400008/Mobile-Detail-t-mu-plno-V2',
    },
  },
};

export const ExpiredGroup: CSFStory = () => {
  return (
    <MainContentMobile
      data={expiredGroupMockData.data}
      share={(): HandlerFunction | {} => action('triggered share dialog')}
    />
  );
};

ExpiredGroup.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/dce1e97e-eef5-49cb-bd9d-b2f1a9eb8ec2/Mobile-Detail-t-mu-vypr-elo-V2',
    },
  },
};

export const GroupUnavailableExample: CSFStory = () => {
  return (
    <MainContentMobile
      data={groupUnavailableMockData.data}
      share={(): HandlerFunction | {} => action('triggered share dialog')}
    />
  );
};

GroupUnavailableExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/ce76c496-ddd0-4bdb-923b-5a8bce524fb4/Mobile-Detail-t-mu-u-nejde-koupit-t-mov-V2',
    },
  },
};

export const ProductNotAvailableGroup: CSFStory = () => {
  return (
    <MainContentMobile
      data={productNotAvailableGroupMockData.data}
      share={(): HandlerFunction | {} => action('triggered share dialog')}
    />
  );
};

ProductNotAvailableGroup.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/4501fc0e-543b-4e7f-b0e2-94dd8006eb1f/Mobile-Detail-t-mu-prodej-skon-il-V2',
    },
  },
};

export const GroupDetailMobileSkeletonExample: CSFStory = () => {
  return <GroupDetailMobileSkeleton />;
};

export const InGroupActiveExampleMobile: CSFStory = () => {
  return (
    <MainContentMobile
      data={inGroupActiveMockData}
      share={(): HandlerFunction | {} => action('triggered share dialog')}
      redirectUrl='#'
    />
  );
};

InGroupActiveExampleMobile.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/d7f56952-3f75-4939-8e27-e8a308948b3a/Mobile-Detail-t-mu-jsem-len-a-sb-r-m-lidi-V2',
    },
  },
};

export const InGroupNotActiveFullExampleMobile: CSFStory = () => {
  return (
    <MainContentMobile
      data={inGroupNotActiveFullMockData.data}
      share={(): HandlerFunction | {} => action('triggered share dialog')}
      redirectUrl='#'
    />
  );
};

InGroupNotActiveFullExampleMobile.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/d0a28a71-839c-495b-b0c8-15786a4c1b97/Mobile-Detail-t-mu-jsem-len-a-spln-no-V2',
    },
  },
};

export const InGroupNotActiveExpiredExampleMobile: CSFStory = () => {
  return (
    <MainContentMobile
      data={inGroupNotActiveExpiredMockData.data}
      share={(): HandlerFunction | {} => action('triggered share dialog')}
      redirectUrl='#'
    />
  );
};

InGroupNotActiveExpiredExampleMobile.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/4919be4f-04cc-40cc-987a-14617556eb32/Mobile-Detail-t-mu-jsem-len-a-vypr-elo-V2',
    },
  },
};

export const InGroupNotActiveProductUnavailableExampleMobile: CSFStory = () => {
  return (
    <MainContentMobile
      data={inGroupNotActiveProductUnavailableMockData.data}
      share={(): HandlerFunction | {} => action('triggered share dialog')}
      redirectUrl='#'
    />
  );
};

InGroupNotActiveProductUnavailableExampleMobile.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/6d11dc94-5947-4c17-a7a2-080d5ed46aa3/Mobile-Detail-t-mu-jsem-len-a-nen-v-nab-dce-V2',
    },
  },
};

export const InGroupNotActiveGroupUnavailableExampleMobile: CSFStory = () => {
  return (
    <MainContentMobile
      data={inGroupNotActiveGroupUnavailableMockData.data}
      share={(): HandlerFunction | {} => action('triggered share dialog')}
      redirectUrl='#'
    />
  );
};

InGroupNotActiveGroupUnavailableExampleMobile.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/1e6ee530-1197-4f08-7122-4aeacc442c2e-685f/screen/3e37ae94-491f-4ab1-b677-403fd64ea2ce/Mobile-Detail-t-mu-jsem-len-a-vypr-elo-V2-1',
    },
  },
};
