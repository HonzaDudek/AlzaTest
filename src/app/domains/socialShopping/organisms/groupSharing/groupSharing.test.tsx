import React from 'react';
import ReactGA from 'react-ga';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import { GroupSharingMobile } from './groupSharing-mobile';
import { GroupSharingDesktop } from './groupSharing-desktop';
import { mockApiResponse } from './__fixtures__/shareComponentMockData';
import { DeviceProvider } from '../../../../services/deviceContext';
import { UserProvider } from '../../../../services/userContext';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import axios from 'axios';
import { LoggerProvider } from '../../../../services/logger/loggerContext';
import LoggerFactory from '../../../../services/logger/loggerFactory';
jest.mock('axios');
const axiosMocked = axios as jest.Mocked<typeof axios>;

describe('Order 5 Sharing block - mobile: ', function() {
  const channels = ['UA-2123123', 'UA-2155423'];
  const analytics = Analytics.getInstance();

  beforeEach(() => {
    ReactGA.testModeAPI.resetCalls();
    analytics.initChannels(channels, true);
  });

  test('shows error message on api error', async () => {
    jest.spyOn(global.console, 'error').mockImplementation();
    axiosMocked.request.mockRejectedValue('API ERROR');

    const { getByText } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={true}>
            <UserProvider id={0} code=''>
              <GroupSharingMobile apiUrl={'/api'} />{' '}
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    await waitForElement(() => getByText('SocialShoppingShare_Error'));
  });

  test('shows order 5 share block', async () => {
    axiosMocked.request.mockResolvedValue({ data: mockApiResponse });

    const { getAllByText } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={true}>
            <UserProvider>
              <GroupSharingMobile apiUrl={'/api'} />
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    await waitForElement(() => getAllByText('Sdílet slevu'));
  });

  test('shows order 5 share button on mobile version', async () => {
    axiosMocked.request.mockResolvedValue({ data: mockApiResponse });

    const { getAllByTestId } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={true}>
            <UserProvider>
              <GroupSharingMobile apiUrl={'/api'} />
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    await waitForElement(() => getAllByTestId('shareBtnMobile'));
  });

  test('shows order 5 in mobile layout', async () => {
    axiosMocked.request.mockResolvedValue({ data: mockApiResponse });

    const { getAllByTestId } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={true}>
            <UserProvider>
              <GroupSharingMobile apiUrl={'/api'} />
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    await waitForElement(() => getAllByTestId('GroupSharingContainerMobile'));
  });

  test('should open drawer after click on share button', async () => {
    axiosMocked.request.mockResolvedValue({ data: mockApiResponse });

    const { getByText, getAllByText, queryByText } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={true}>
            <UserProvider>
              <GroupSharingMobile apiUrl={'/api'} />
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    const toggleButtons = await waitForElement(() =>
      getAllByText('Sdílet slevu')
    );

    // check for closed drawer
    const mainContent = queryByText('Zkopírovat odkaz');
    expect(mainContent).toBeNull();

    // open drawer
    fireEvent.click(toggleButtons[0]);

    // check drawer content
    await waitForElement(() => getByText('Zkopírovat odkaz'));
  });
});

describe('Order 5 Sharing block - desktop: ', function() {
  const channels = ['UA-2123123', 'UA-2155423'];
  const analytics = Analytics.getInstance();

  beforeEach(() => {
    ReactGA.testModeAPI.resetCalls();
    analytics.initChannels(channels, true);
  });

  test('shows error message on api error', async () => {
    jest.spyOn(global.console, 'error').mockImplementation();
    axiosMocked.request.mockRejectedValue('API ERROR');

    const { getByText } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={false}>
            <UserProvider id={0} code=''>
              <GroupSharingDesktop apiUrl={'/api'} />{' '}
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    await waitForElement(() => getByText('SocialShoppingShare_Error'));
  });

  test('shows order 5 share block', async () => {
    axiosMocked.request.mockResolvedValue({ data: mockApiResponse });

    const { getAllByText } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={false}>
            <UserProvider>
              <GroupSharingDesktop apiUrl={'/api'} />
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    await waitForElement(() => getAllByText('Sdílet slevu'));
  });

  test('shows order 5 share button on desktop version', async () => {
    axiosMocked.request.mockResolvedValue({ data: mockApiResponse });

    const { getAllByTestId } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={false}>
            <UserProvider>
              <GroupSharingDesktop apiUrl={'/api'} />
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    await waitForElement(() => getAllByTestId('shareBtnDesktop'));
  });

  test('shows order 5 in desktop layout', async () => {
    axiosMocked.request.mockResolvedValue({ data: mockApiResponse });

    const { getAllByTestId } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={false}>
            <UserProvider>
              <GroupSharingDesktop apiUrl={'/api'} />
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    await waitForElement(() => getAllByTestId('GroupSharingContainerDesktop'));
  });

  test('Desktop - should send GA event dialog after click on share button', async () => {
    axiosMocked.request.mockResolvedValue({ data: mockApiResponse });

    const { getByText, getAllByText, queryByText } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={false}>
            <UserProvider>
              <GroupSharingDesktop apiUrl={'/api'} />
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    const shareButtons = await waitForElement(() =>
      getAllByText('Sdílet slevu')
    );

    // check for closed dialog
    const mainContent = queryByText('Zkopírovat odkaz');
    expect(mainContent).toBeNull();

    // We dont want to test other GA events than click on add to cart button
    ReactGA.testModeAPI.resetCalls();

    // open share dialog
    fireEvent.click(shareButtons[0]);

    // check dialog content
    await waitForElement(() => getByText('Zkopírovat odkaz'));

    expect(ReactGA.testModeAPI.calls).toEqual([
      [
        'send',
        {
          eventAction: 'Share Button Clicked',
          eventCategory: 'Social Shopping',
          hitType: 'event',
        },
      ],
    ]);
  });

  test('Mobile - should send GA event dialog after click on share button', async () => {
    axiosMocked.request.mockResolvedValue({ data: mockApiResponse });

    const { getByText, getAllByText, queryByText } = render(
      <LoggerProvider Logger={LoggerFactory.getVoidLogger()}>
        <AnalyticsProvider Analytics={analytics}>
          <DeviceProvider isMobile={true}>
            <UserProvider>
              <GroupSharingMobile apiUrl={'/api'} />
            </UserProvider>
          </DeviceProvider>
        </AnalyticsProvider>
      </LoggerProvider>
    );

    const shareButtons = await waitForElement(() =>
      getAllByText('Sdílet slevu')
    );

    // check for closed dialog
    const mainContent = queryByText('Zkopírovat odkaz');
    expect(mainContent).toBeNull();

    // We dont want to test other GA events than click on add to cart button
    ReactGA.testModeAPI.resetCalls();

    // open share dialog
    fireEvent.click(shareButtons[0]);

    // check dialog content
    await waitForElement(() => getByText('Zkopírovat odkaz'));

    expect(ReactGA.testModeAPI.calls).toEqual([
      [
        'send',
        {
          eventAction: 'Share Button Clicked',
          eventCategory: 'Social Shopping',
          hitType: 'event',
        },
      ],
    ]);
  });
});
