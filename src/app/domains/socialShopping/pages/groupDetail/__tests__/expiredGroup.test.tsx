import { fireEvent, render, wait } from '@testing-library/react';
import GroupDetail from '../groupDetail';
import axios from 'axios';
import React from 'react';
import { expiredGroupMockData } from '../__fixtures__/expiredGroup';
import { Analytics } from '../../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../../services/analyticsContext';
import { withMarkup } from '../../../../../../utils/customMatchers/customMatchers';
import { mock, mockClear } from 'jest-mock-extended';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const { location } = window;

Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
});

describe('Group Detail Status 2 tests ', function() {
  const analytics = mock<Analytics>();

  beforeEach(() => {
    mockClear(analytics);
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
    mockedAxios.get.mockResolvedValueOnce(expiredGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText, getByText, getByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={expiredGroupMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 creating new team
    const createNewTeamButton = await findByText('Vytvořit nový tým');
    expect(createNewTeamButton).toBeTruthy();

    // Test that header has right text
    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    expect(pageHeading).toBeTruthy();

    // There should be a button with text 'Koupit za 9,-'
    const buyForFullPriceButton = getByText('Koupit za 9,-');
    expect(buyForFullPriceButton.textContent).toContain(
      expiredGroupMockData.data.commodity.originalPrice
    );
    expect(buyForFullPriceButton).toBeTruthy();

    // Test if Availability is displayed
    const availability = getByText('Skladem');
    expect(availability).toBeTruthy();

    // Test that more info button is displayed
    const moreInfoButton = getByTestId('test-btn-moreInfo');
    expect(moreInfoButton.textContent).toContain('Více o Sdílej a ušetři');
  });

  test('Desktop - Create new team button fires correct action and redirects user to product detail page with correct parameter in URL ', async () => {
    mockedAxios.get.mockResolvedValueOnce(expiredGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={expiredGroupMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 creating new team
    const createNewTeamButton = await findByText('Vytvořit nový tým');

    // Test if correct endpoint with proper request body was called
    fireEvent.click(createNewTeamButton);
    await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith(
      'https://www.alza.cz/api/socialShopping/v1/commodities/4844942',
      {
        commodityId: 4844942,
        count: 1.0,
        services: [],
        hooks: [],
      },

      { headers: { 'Accept-Language': 'cs-CZ' } }
    );

    // User should be redirected to Order1
    expect(window.location.href).toBe(
      `http://localhost${expiredGroupMockData.data.commodity.url}?createSocialShoppingGroup=true`
    );
  });

  test('Desktop - Buy for full price button calls right action and redirects to Order1', async () => {
    mockedAxios.get.mockResolvedValueOnce(expiredGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={expiredGroupMockData.data.hash}
          isMobile='false'
        />
      </AnalyticsProvider>
    );

    // There should be a button with text 'Koupit za 9,-'
    const buyForFullPriceButton = await findByText('Koupit za 9,-');

    fireEvent.click(buyForFullPriceButton);
    await wait(() =>
      expect(axios.post).toHaveBeenCalledWith(
        'https://www.alza.cz/api/basket/v1/items',
        {
          items: [
            {
              commodityId: 4844942,
              count: 1.0,
              services: [],
              hooks: [],
            },
          ],
        },
        { headers: { 'Accept-Language': 'cs-CZ' } }
      )
    );

    // User should be redirected to Order1
    expect(window.location.href).toBe('/Order1.htm');
  });

  test('Mobile - Correct buttons and texts are displayed', async () => {
    mockedAxios.get.mockResolvedValueOnce(expiredGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText, getByText, getByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={expiredGroupMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 creating new team
    const createNewTeamButton = await findByText('Vytvořit nový tým');
    expect(createNewTeamButton).toBeTruthy();

    // Test that header has right text
    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    expect(pageHeading).toBeTruthy();

    // There should be a button with text 'Koupit za 9,-'
    const buyForFullPriceButton = getByText('Koupit za 9,-');
    expect(buyForFullPriceButton).toBeTruthy();

    // Test if Availability is displayed
    const availability = getByText('Skladem');
    expect(availability).toBeTruthy();

    // Test that more info button is displayed
    const moreInfoButton = getByTestId('test-btn-moreInfo');
    expect(moreInfoButton.textContent).toContain('Více o Sdílej a ušetři');
  });

  test('Mobile - Create new team button fires correct action and redirects user to product detail page with correct parameter in URL ', async () => {
    mockedAxios.get.mockResolvedValueOnce(expiredGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={expiredGroupMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 creating new team
    const createNewTeamButton = await findByText('Vytvořit nový tým');

    // Test if correct endpoint with proper request body was called
    fireEvent.click(createNewTeamButton);
    await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith(
      'https://www.alza.cz/api/socialShopping/v1/commodities/4844942',
      {
        commodityId: 4844942,
        count: 1.0,
        services: [],
        hooks: [],
      },

      { headers: { 'Accept-Language': 'cs-CZ' } }
    );

    // User should be redirected to Order1
    expect(window.location.href).toBe(
      `http://localhost${expiredGroupMockData.data.commodity.url}?createSocialShoppingGroup=true`
    );
  });

  test('Mobile - Buy for full price button calls right action and redirects to Order1', async () => {
    mockedAxios.get.mockResolvedValueOnce(expiredGroupMockData);
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={expiredGroupMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    // There should be a button with text 'Koupit za 9,-'
    const buyForFullPriceButton = await findByText('Koupit za 9,-');

    fireEvent.click(buyForFullPriceButton);
    await wait(() =>
      expect(axios.post).toHaveBeenCalledWith(
        'https://www.alza.cz/api/basket/v1/items',
        {
          items: [
            {
              commodityId: 4844942,
              count: 1.0,
              services: [],
              hooks: [],
            },
          ],
        },
        { headers: { 'Accept-Language': 'cs-CZ' } }
      )
    );

    // User should be redirected to Order1
    expect(window.location.href).toBe('/Order1.htm');
  });
});
