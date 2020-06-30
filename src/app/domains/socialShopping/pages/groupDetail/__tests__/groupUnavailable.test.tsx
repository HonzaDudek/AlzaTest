import { groupUnavailableMockData } from '../__fixtures__/groupUnavailable';
import { fireEvent, render, wait } from '@testing-library/react';
import GroupDetail from '../groupDetail';

import axios from 'axios';
import React from 'react';
import ReactGA from 'react-ga';
import { Analytics } from '../../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../../services/analyticsContext';
import { withMarkup } from '../../../../../../utils/customMatchers/customMatchers';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const { location } = window;

Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
});

describe('Group Detail Status 4 tests ', function() {
  const channels = ['UA-2123123', 'UA-2155423'];
  const analytics = Analytics.getInstance();

  beforeEach(() => {
    ReactGA.testModeAPI.resetCalls();
    analytics.initChannels(channels, true);
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

  test('Desktop - Correct buttons and texts are displayed', async () => {
    mockedAxios.get.mockResolvedValueOnce(groupUnavailableMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText, getByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={groupUnavailableMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    const productInfoButton = await findByText('Podrobnosti o zboží');
    // Test if correct button is displayed
    expect(productInfoButton).toBeTruthy();

    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    // Test if correct text is displayed
    expect(pageHeading).toBeTruthy();

    const buyButton = getByText('Koupit za 15 983,-');
    expect(buyButton).toBeTruthy();
  });

  test('Desktop - Buy button fires correct action ', async () => {
    mockedAxios.get.mockResolvedValueOnce(groupUnavailableMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={groupUnavailableMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    const buyButton = await findByText('Koupit za 15 983,-');

    fireEvent.click(buyButton);
    await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith(
      'https://malfa.alza.cz/api/basket/v1/items',
      {
        items: [
          {
            commodityId: 5458864,
            count: 1.0,
            services: [],
            hooks: [],
          },
        ],
      },

      { headers: { 'Accept-Language': 'cs-CZ' } }
    );
  });

  test('Desktop - Button to show product detail works', async () => {
    mockedAxios.get.mockResolvedValueOnce(groupUnavailableMockData);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={groupUnavailableMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    const productInfoButton = await findByText('Podrobnosti o zboží');

    // Test that user is redirected to correct url after button is clicked
    fireEvent.click(productInfoButton);
    const target = groupUnavailableMockData.data.commodity.url;
    await wait(() => expect(window.location.href).toBe(target));
  });

  test('Mobile - Correct buttons and texts are displayed', async () => {
    mockedAxios.get.mockResolvedValueOnce(groupUnavailableMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText, getByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={groupUnavailableMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    const productInfoButton = await findByText('Podrobnosti o zboží');
    // Test if correct button is displayed
    expect(productInfoButton).toBeTruthy();

    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    // Test if correct text is displayed
    expect(pageHeading).toBeTruthy();

    const buyButton = getByText('Koupit za 15 983,-');
    expect(buyButton).toBeTruthy();
  });

  test('Mobile - Buy button fires correct action ', async () => {
    mockedAxios.get.mockResolvedValueOnce(groupUnavailableMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={groupUnavailableMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    const buyButton = await findByText('Koupit za 15 983,-');

    fireEvent.click(buyButton);
    await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith(
      'https://malfa.alza.cz/api/basket/v1/items',
      {
        items: [
          {
            commodityId: 5458864,
            count: 1.0,
            services: [],
            hooks: [],
          },
        ],
      },

      { headers: { 'Accept-Language': 'cs-CZ' } }
    );
  });

  test('Mobile - Button to show product detail works', async () => {
    mockedAxios.get.mockResolvedValueOnce(groupUnavailableMockData);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={groupUnavailableMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    const productInfoButton = await findByText('Podrobnosti o zboží');

    // Test that user is redirected to correct url after button is clicked
    fireEvent.click(productInfoButton);
    const target = groupUnavailableMockData.data.commodity.url;
    await wait(() => expect(window.location.href).toBe(target));
  });
});
