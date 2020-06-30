import React, { CSSProperties, ReactNode } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import DetailPageApp from './detailPageApp';
import { baseTheme } from '../../../utils/theme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockApiResponse from '../../domains/socialShopping/organisms/groupDialog/__fixtures__/commodity.json';
import { AnalyticsProvider } from '../../services/analyticsContext';
import { Analytics } from '../../../utils/analytics/analytics';

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
};

export default {
  component: DetailPageApp,
  title: 'Pages/Detail page',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={styles}>
        <div
          style={{
            height: '345px',
            width: '375px',
            backgroundColor: baseTheme.colors.grey1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div id='socialShopping' style={{ width: '100%' }}>
            {story()}
          </div>
        </div>
      </div>
    ),
    withKnobs,
  ],
};

export const drawerStateData = {
  open: true,
  closed: false,
};

export const SocialShoppingAppExample: ReactNode = () => {
  const mockAxios = new MockAdapter(axios, { delayResponse: 1000 });
  mockAxios.onPost('/getGroupDialogExample').reply(200, mockApiResponse);
  const analytics = Analytics.getInstance();
  analytics.initChannels(['UA-0202020']);
  return (
    <div>
      <AnalyticsProvider Analytics={analytics}>
        <DetailPageApp
          isMobile={true}
          commodityId={5443532}
          apiUrl='/getGroupDialogExample'
          preselectedAccessories={'[123]'}
          socialToggleHeader={'Novinka! Sdílej a ušetři'}
          socialToggleBody={'Sežeňte další kupce a všichni dostanete slevu'}
          socialTogglePrice={'od 2 199,-'}
          socialToggleMore={'Vice'}
        />
      </AnalyticsProvider>
    </div>
  );
};
