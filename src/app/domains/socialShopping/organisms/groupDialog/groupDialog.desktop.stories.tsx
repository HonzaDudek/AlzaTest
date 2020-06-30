import React, { CSSProperties, ReactNode } from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import GroupDialog from './groupDialog';
import { CSFStory } from '../../pages/orderDetail/orderDetailMobile.stories';
import { withXD } from 'storybook-addon-xd-designs';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockApiResponse from './__fixtures__/commodity.json';
import { GroupDialogDesktopSkeleton } from './groupDialog.skeletons';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import { baseTheme } from '../../../../../utils/theme';

const styles: CSSProperties = {
  height: '1200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  boxShadow: '3px 3px 8px 6px rgba(20, 20, 20, 0.5)',
  margin: 'auto',
  padding: '200px 0 0 300px',
};

const channels = ['UA-2123123', 'UA-2155423'];
const analytics = Analytics.getInstance();
analytics.initChannels(channels, true);

export default {
  component: GroupDialog,
  title: 'Domains/Social Shopping/Organisms/Group Dialog/Group Dialog Desktop',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <AnalyticsProvider Analytics={analytics}>{story()}</AnalyticsProvider>
    ),
  ],
};

// This comes as a prop from detailPageApp.tsx
const socialShoppingLowestPrice = '500,-';

const buttonTextGroupDialogStories = {
  header: 'Novinka! Sílej a ušetři',
  body: 'Sežeňte další kupce a všichni dostanete slevu',
  price: `od ${socialShoppingLowestPrice}`,
  more: 'Více',
};

export const GroupDialogDesktopExample: CSFStory = () => {
  const drawerState = boolean('drawer state', false);
  const mockAxios = new MockAdapter(axios, { delayResponse: 1000 });
  mockAxios.onPost('/getGroupDialogExample').reply(200, mockApiResponse);
  return (
    <AnalyticsProvider Analytics={analytics}>
      <GroupDialog
        toggleButtonText={buttonTextGroupDialogStories}
        isDialogOpen={drawerState}
        commodityId={5443532}
        isMobile={false}
        apiUrl='/getGroupDialogExample'
        preselectedAccessories={[123]}
      />
    </AnalyticsProvider>
  );
};

GroupDialogDesktopExample.story = {
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={styles}>
        {' '}
        <div
          style={{
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: `${baseTheme.colors.grey5}`,
          }}
        >
          {story()}{' '}
        </div>
      </div>
    ),
    withKnobs,
    withXD,
  ],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/729d47b3-3c59-41c7-7874-c58c971f9ac6-04ac/screen/799ea74b-5a86-4d53-a4ce-549c1f2a5c83/Dialog-s-popisem',
    },
  },
};

export const GroupDialogDesktopSkeletonExample: CSFStory = () => {
  return (
    <div style={{ width: '1000px', margin: '20px auto', position: 'relative' }}>
      <GroupDialogDesktopSkeleton />
    </div>
  );
};
