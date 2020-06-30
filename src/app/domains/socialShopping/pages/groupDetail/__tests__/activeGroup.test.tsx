import { groupUnavailableMockData } from '../__fixtures__/groupUnavailable';
import { fireEvent, render, wait } from '@testing-library/react';
import GroupDetail from '../groupDetail';
import { activeGroupMockData } from '../__fixtures__/activeGroup';
import axios from 'axios';
import React from 'react';
import ReactGA from 'react-ga';
import { Analytics } from '../../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../../services/analyticsContext';
import { MainContentDesktop } from '../components/mainContent.desktop';
import { MainContentMobile } from '../components/mainContent.mobile';
import { withMarkup } from '../../../../../../utils/customMatchers/customMatchers';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const { location } = window;

Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
});

describe('Group Detail Status 1 tests ', function() {
  const channels = ['UA-2123123', 'UA-2155423'];
  const analytics = Analytics.getInstance();

  beforeEach(() => {
    analytics.initChannels(channels, true);
    ReactGA.testModeAPI.resetCalls();
  });

  beforeAll((): void => {
    delete window.location;
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.location = {
      href: '',
    };
  });

  afterAll((): void => {
    window.location = location;
  });

  test('Desktop - Testing pageEvent in ReactGA', async () => {
    mockedAxios.get.mockResolvedValueOnce(activeGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    window.location.href = '/group-sharing';

    render(
      <AnalyticsProvider Analytics={analytics}>
        <MainContentDesktop
          data={activeGroupMockData.data}
          redirectUrl='/group-sharing'
        />
      </AnalyticsProvider>
    );

    expect(ReactGA.testModeAPI.calls).toEqual([
      [
        'send',
        {
          page: '/group-sharing',
          hitType: 'pageview',
          title: 'Social Shopping LP',
        },
      ],
    ]);
  });

  test('Mobile - Testing pageEvent in ReactGA', async () => {
    mockedAxios.get.mockResolvedValueOnce(activeGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    window.location.href = '/group-sharing';

    render(
      <AnalyticsProvider Analytics={analytics}>
        <MainContentMobile
          data={activeGroupMockData.data}
          share={(): void | {} => {
            return;
          }}
          redirectUrl='/group-sharing'
        />
      </AnalyticsProvider>
    );

    expect(ReactGA.testModeAPI.calls).toEqual([
      [
        'send',
        {
          page: '/group-sharing',
          hitType: 'pageview',
          title: 'Social Shopping LP',
        },
      ],
    ]);
  });

  test('Desktop - Correct buttons and texts are displayed', async () => {
    mockedAxios.get.mockResolvedValueOnce(activeGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { getByText, findAllByText, getByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={activeGroupMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    // There should be 3 links with text 'Připojit se'
    const joinTeamLinks = await findAllByText('Připojit se');
    expect(joinTeamLinks).toHaveLength(18);

    // Test that header has right text
    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    // Test if correct text is displayed
    expect(pageHeading).toBeTruthy();

    // Test, that there is 1 button for joining group
    const joinTeamButton = getByTestId('test-btn-joinTeam');
    expect(joinTeamButton.textContent).toContain(
      'Připojit se a získat slevu 150 Kč'
    );

    // Test if Counter displays correct expiration date
    const counterText = getByText('Sleva vyprší 14. 5. 12:48');
    expect(counterText).toBeTruthy();

    // Test if Availability is displayed
    const availability = getByText('Skladem');
    expect(availability).toBeTruthy();

    // Test that more info button is displayed
    const moreInfoButton = getByTestId('test-btn-moreInfo');
    expect(moreInfoButton.textContent).toContain('Více o Sdílej a ušetři');
  });

  test('Desktop - Join team button fires correct action and redirects user to Order 1 ', async () => {
    mockedAxios.get.mockResolvedValueOnce(activeGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={groupUnavailableMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 button for joining group
    const joinTeamButton = await findByTestId('test-btn-joinTeam');

    // Test if correct endpoint with proper request body was called
    fireEvent.click(joinTeamButton);
    await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith(
      'https://www.alza.cz/api/basket/v1/socialShoppingItems',
      {
        commodityId: 5683612,
        count: 1.0,
        services: [],
        hooks: [],
        groupId: 187,
      },

      { headers: { 'Accept-Language': 'cs-CZ' } }
    );

    // User should be redirected to Order1
    expect(window.location.href).toBe('/Order1.htm');
  });

  test('Desktop - Join team button fires correct GA event', async () => {
    mockedAxios.get.mockResolvedValueOnce(activeGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={groupUnavailableMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 button for joining group
    const joinTeamButton = await findByTestId('test-btn-joinTeam');

    ReactGA.testModeAPI.resetCalls();

    // Test if correct endpoint with proper request body was called
    fireEvent.click(joinTeamButton);

    expect(ReactGA.testModeAPI.calls).toEqual([
      [
        'send',
        {
          hitType: 'event',
          eventCategory: 'Social Shopping',
          eventAction: 'Landing Page Join Group Clicked',
        },
      ],
    ]);
  });

  test('Mobile - Join team button fires correct GA event', async () => {
    mockedAxios.get.mockResolvedValueOnce(activeGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={groupUnavailableMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 button for joining group
    const joinTeamButton = await findByTestId('test-btn-joinTeam');

    ReactGA.testModeAPI.resetCalls();

    // Test if correct endpoint with proper request body was called
    fireEvent.click(joinTeamButton);

    expect(ReactGA.testModeAPI.calls).toEqual([
      [
        'send',
        {
          hitType: 'event',
          eventCategory: 'Social Shopping',
          eventAction: 'Landing Page Join Group Clicked',
        },
      ],
    ]);
  });

  test('Desktop - Links under empty slots sends correct action and redirects user to Order 1', async () => {
    mockedAxios.get.mockResolvedValueOnce(activeGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findAllByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={activeGroupMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    // There should be 3 links with text 'Připojit se'
    const joinTeamLinks = await findAllByText('Připojit se');

    fireEvent.click(joinTeamLinks[1]);
    await wait(() =>
      expect(axios.post).toHaveBeenCalledWith(
        'https://www.alza.cz/api/basket/v1/socialShoppingItems',
        {
          commodityId: 5683612,
          count: 1.0,
          services: [],
          hooks: [],
          groupId: 187,
        },

        { headers: { 'Accept-Language': 'cs-CZ' } }
      )
    );

    // User should be redirected to Order1
    expect(window.location.href).toBe('/Order1.htm');
  });

  test('Mobile - Correct buttons and texts are displayed', async () => {
    mockedAxios.get.mockResolvedValueOnce(activeGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findAllByText, getByText, getByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={activeGroupMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    // There should be 18 links with text 'Připojit se'
    const joinTeamLinks = await findAllByText('Připojit se');
    expect(joinTeamLinks).toHaveLength(18);

    // Test that header has right text
    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    // Test if correct text is displayed
    expect(pageHeading).toBeTruthy();

    // Test, that there is 1 button for joining group
    const joinTeamButton = getByTestId('test-btn-joinTeam');
    expect(joinTeamButton.textContent).toContain(
      'Připojit se a získat slevu 150 Kč'
    );

    // Test if Availability is displayed
    const availability = getByText('Skladem');
    expect(availability).toBeTruthy();

    // Test if Counter displays correct expiration date
    const counterText = getByText('Sleva vyprší 14. 5. 12:48');
    expect(counterText).toBeTruthy();

    // Test that more info button is displayed
    const moreInfoButton = getByTestId('test-btn-moreInfo');
    expect(moreInfoButton.textContent).toContain('Více o Sdílej a ušetři');
  });

  test('Mobile - Join team button fires correct action and redirects user to Order 1 ', async () => {
    mockedAxios.get.mockResolvedValueOnce(activeGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={groupUnavailableMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 button for joining group
    const joinTeamButton = await findByTestId('test-btn-joinTeam');

    // Test if correct endpoint with proper request body was called
    fireEvent.click(joinTeamButton);
    await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith(
      'https://www.alza.cz/api/basket/v1/socialShoppingItems',
      {
        commodityId: 5683612,
        count: 1.0,
        services: [],
        hooks: [],
        groupId: 187,
      },

      { headers: { 'Accept-Language': 'cs-CZ' } }
    );

    // User should be redirected to Order1
    expect(window.location.href).toBe('/Order1.htm');
  });

  test('Mobile - Links under empty slots sends correct action and redirects user to Order 1', async () => {
    mockedAxios.get.mockResolvedValueOnce(activeGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findAllByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={activeGroupMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    // There should be 3 links with text 'Připojit se'
    const joinTeamLinks = await findAllByText('Připojit se');

    fireEvent.click(joinTeamLinks[1]);
    await wait(() =>
      expect(axios.post).toHaveBeenCalledWith(
        'https://www.alza.cz/api/basket/v1/socialShoppingItems',
        {
          commodityId: 5683612,
          count: 1.0,
          services: [],
          hooks: [],
          groupId: 187,
        },

        { headers: { 'Accept-Language': 'cs-CZ' } }
      )
    );

    // User should be redirected to Order1
    expect(window.location.href).toBe('/Order1.htm');
  });
});
