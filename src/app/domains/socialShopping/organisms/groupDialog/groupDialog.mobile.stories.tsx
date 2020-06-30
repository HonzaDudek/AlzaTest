import React, { CSSProperties, ReactNode } from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import GroupDialog from './groupDialog';
import { CSFStory } from '../../pages/orderDetail/orderDetailMobile.stories';
import { withXD } from 'storybook-addon-xd-designs';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockApiResponse from './__fixtures__/commodity.json';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import { Analytics } from '../../../../../utils/analytics/analytics';

const styles: CSSProperties = {
  height: '500px',
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  boxShadow: '3px 3px 8px 6px rgba(20, 20, 20, 0.5)',
  margin: 'auto',
  paddingTop: '300px',
};

const channels = ['UA-2123123', 'UA-2155423'];
const analytics = Analytics.getInstance();
analytics.initChannels(channels, true);

export default {
  component: GroupDialog,
  title: 'Domains/Social Shopping/Organisms/Group Dialog/Group Dialog Mobile',
  parameters: {
    viewport: { defaultViewport: 'iphone5' },
  },
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <AnalyticsProvider Analytics={analytics}>
        <div style={styles}>{story()}</div>
      </AnalyticsProvider>
    ),
    withKnobs,
  ],
};

// This comes as a prop from detailPageApp.tsx
const socialShoppingLowestPrice = '500,-';

const buttonTextGroupDialogStories = {
  header: 'Novinka! Sílej a ušetři',
  body: 'Sežeňte další kupce a všichni dostanete slevu',
  price: `od ${socialShoppingLowestPrice}`,
  more: 'Vice',
};

const GroupDialogMobileExample: CSFStory = () => {
  const drawerState = boolean('drawer state', false);
  const mockAxios = new MockAdapter(axios, { delayResponse: 1000 });
  mockAxios.onPost('/getGroupDialogExample').reply(200, mockApiResponse);
  return (
    <AnalyticsProvider Analytics={analytics}>
      <GroupDialog
        toggleButtonText={buttonTextGroupDialogStories}
        isDialogOpen={drawerState}
        commodityId={5443532}
        isMobile={true}
        apiUrl='/getGroupDialogExample'
        preselectedAccessories={[123]}
        popupTexts={{
          spanText: '',
          headerText: 'Chcete tento produkt ještě levněji?',
          bodyText:
            'Při nákupu přes Sdílej a ušetři si o slevách rozhodujete sami.',
          buttonText: '',
        }}
      />
    </AnalyticsProvider>
  );
};

GroupDialogMobileExample.story = {
  decorators: [withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/ddc472f0-baaa-419d-661a-7c94ee009de9-abf5/screen/d79c4ebf-44f8-43df-a856-6aac486dbbcb/Mobile-Dialog-s-popisem-vybr-no-',
    },
  },
};

export { GroupDialogMobileExample };
