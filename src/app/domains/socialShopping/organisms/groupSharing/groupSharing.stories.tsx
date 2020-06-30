/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, Suspense } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { GroupSharingMobile } from './groupSharing-mobile';
import { GroupSharingDesktop } from './groupSharing-desktop';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockApiResponse } from './__fixtures__/shareComponentMockData';
import { DeviceProvider } from '../../../../services/deviceContext';
import { UserProvider } from '../../../../services/userContext';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import { LoggerProvider } from '../../../../services/logger/loggerContext';
import LoggerFactory from '../../../../services/logger/loggerFactory';

const mockAxios = new MockAdapter(axios, { delayResponse: 1500 });

const channels = ['UA-2123123', 'UA-2155423'];
const analytics = Analytics.getInstance();
analytics.initChannels(channels);

export default {
  // component: SocialShoppingShare,
  title: 'Domains/Social Shopping/Organisms/Group Sharing',
  excludeStories: /.*Data$/,
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div>
        <AnalyticsProvider Analytics={analytics}>{story()}</AnalyticsProvider>
      </div>
    ),
    withKnobs,
  ],
};

export const Order5Mobile: React.FunctionComponent = () => {
  mockAxios
    .onGet('/getSocialShoppingShare')
    .reply(200, mockApiResponse)
    .onGet('/getSocialShoppingShareError')
    .reply(404);

  return (
    // <SocialShoppingShare apiUrl='https://legolas.alza.cz/api/socialShopping/v1/orders/198579307/01E3DE93DE5FB4T34A5JM24D531' />
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LoggerProvider Logger={LoggerFactory.getConsoleLogger()}>
          <DeviceProvider isMobile={true}>
            <UserProvider>
              <GroupSharingMobile apiUrl='/getSocialShoppingShare' />

              <div style={{ margin: '15px 0' }}>
                <GroupSharingMobile apiUrl='/getSocialShoppingShareError' />
              </div>
            </UserProvider>
          </DeviceProvider>
        </LoggerProvider>
      </Suspense>
    </>
  );
};

(Order5Mobile as any).story = {
  parameters: { viewport: { defaultViewport: 'iphonex' } },
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={{ margin: '15px' }}>{story()}</div>
    ),
    withKnobs,
  ],
};

export const Order5Desktop: React.FunctionComponent = () => {
  mockAxios
    .onGet('/getSocialShoppingShare')
    .reply(200, mockApiResponse)
    .onGet('/getSocialShoppingShareError')
    .reply(404);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LoggerProvider Logger={LoggerFactory.getConsoleLogger()}>
          <DeviceProvider isMobile={false}>
            <UserProvider>
              <GroupSharingDesktop apiUrl='/getSocialShoppingShare' />

              <div style={{ margin: '15px 0' }}>
                <GroupSharingDesktop apiUrl='/getSocialShoppingShareError' />
              </div>
            </UserProvider>
          </DeviceProvider>
        </LoggerProvider>
      </Suspense>
    </>
  );
};

(Order5Desktop as any).story = {
  decorators: [
    (story: () => React.ReactNode): ReactNode => (
      <div style={{ maxWidth: '1000px', margin: '15px auto' }}>{story()}</div>
    ),
    withKnobs,
  ],
};
