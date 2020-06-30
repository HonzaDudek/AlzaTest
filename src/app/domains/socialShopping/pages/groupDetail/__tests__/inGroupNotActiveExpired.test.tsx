import { fireEvent, render, wait } from '@testing-library/react';
import GroupDetail from '../groupDetail';

import axios from 'axios';
import React from 'react';
import { withMarkup } from '../../../../../../utils/customMatchers/customMatchers';
import { inGroupNotActiveExpiredMockData } from '../__fixtures__/inGroupNotActiveExpired';
import { mock, mockClear } from 'jest-mock-extended';
import { Analytics } from '../../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../../services/analyticsContext';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const { location } = window;

Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
});

describe('Group Detail Status 8 - Expired - tests ', function() {
  const analytics = mock<Analytics>();
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

  beforeEach(() => {
    mockClear(analytics);
  });

  test('Desktop - Correct buttons and texts are displayed', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveExpiredMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { getByText, getAllByText, findAllByRole } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveExpiredMockData.data.hash}
          isMobile='false'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    const buttonGroup = await findAllByRole('button');
    expect(buttonGroup).toHaveLength(4);

    // Test that header has right text
    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    expect(pageHeading).toBeTruthy();

    const createNewTeamButton = getAllByText('Vytvořit nový tým');
    expect(createNewTeamButton).toBeTruthy();

    const BuyForFullPriceButton = getAllByText('Koupit za 9,-');
    expect(BuyForFullPriceButton).toBeTruthy();

    const orderInfoButton = getByText('Zobrazit objednávku');
    expect(orderInfoButton).toBeTruthy();
  });

  test('Desktop - User is redirected to BO after clicking Zobrazit Objednavku Button ', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveExpiredMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveExpiredMockData.data.hash}
          isMobile='false'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 button for joining group
    const orderInfoButton = await findByText('Zobrazit objednávku');

    // Test if correct endpoint with proper request body was called
    fireEvent.click(orderInfoButton);
    await wait(() =>
      expect(window.location.href).toBe('/moje-objednavky/id=12345798')
    );
  });

  test('Desktop - Create new team button fires correct action and redirects user to product detail page with correct parameter in URL ', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveExpiredMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveExpiredMockData.data.hash}
          isMobile='false'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 creating new team
    const createNewTeamButton = await findByText('Vytvořit nový tým');

    // Test if correct endpoint with proper request body was called
    fireEvent.click(createNewTeamButton);
    await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith(
      'https://legolas.alza.cz/api/socialShopping/v1/commodities/5459001',
      {
        commodityId: 5459001,
        count: 1.0,
        services: [],
        hooks: [],
      },

      { headers: { 'Accept-Language': 'cs-CZ' } }
    );

    // User should be redirected to Order1
    expect(window.location.href).toBe(
      `http://localhost${inGroupNotActiveExpiredMockData.data.commodity.url}?createSocialShoppingGroup=true`
    );
  });

  test('Desktop - Buy for full price button calls right action and redirects to Order1', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveExpiredMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveExpiredMockData.data.hash}
          isMobile='false'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    // There should be a button with text 'Koupit za 3 599,-'
    const buyForFullPriceButton = await findByText('Koupit za 9,-');

    fireEvent.click(buyForFullPriceButton);
    await wait(() =>
      expect(axios.post).toHaveBeenCalledWith(
        'https://legolas.alza.cz/api/basket/v1/items',
        {
          items: [
            {
              commodityId: 5459001,
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
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveExpiredMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { getByText, getAllByText, findAllByRole } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveExpiredMockData.data.hash}
          isMobile='false'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    const buttonGroup = await findAllByRole('button');
    expect(buttonGroup).toHaveLength(4);

    // Test that header has right text
    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    expect(pageHeading).toBeTruthy();

    const createNewTeamButton = getAllByText('Vytvořit nový tým');
    expect(createNewTeamButton).toBeTruthy();

    const BuyForFullPriceButton = getAllByText('Koupit za 9,-');
    expect(BuyForFullPriceButton).toBeTruthy();

    const orderInfoButton = getByText('Zobrazit objednávku');
    expect(orderInfoButton).toBeTruthy();
  });

  test('Mobile - User is redirected to BO after clicking Zobrazit Objednavku Button ', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveExpiredMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveExpiredMockData.data.hash}
          isMobile='true'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 button for joining group
    const orderInfoButton = await findByText('Zobrazit objednávku');

    // Test if correct endpoint with proper request body was called
    fireEvent.click(orderInfoButton);
    await wait(() =>
      expect(window.location.href).toBe('/moje-objednavky/id=12345798')
    );
  });

  test('Mobile - Create new team button fires correct action and redirects user to product detail page with correct parameter in URL ', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveExpiredMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveExpiredMockData.data.hash}
          isMobile='true'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 creating new team
    const createNewTeamButton = await findByText('Vytvořit nový tým');

    // Test if correct endpoint with proper request body was called
    fireEvent.click(createNewTeamButton);
    await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith(
      'https://legolas.alza.cz/api/socialShopping/v1/commodities/5459001',
      {
        commodityId: 5459001,
        count: 1.0,
        services: [],
        hooks: [],
      },

      { headers: { 'Accept-Language': 'cs-CZ' } }
    );

    // User should be redirected to Order1
    expect(window.location.href).toBe(
      `http://localhost${inGroupNotActiveExpiredMockData.data.commodity.url}?createSocialShoppingGroup=true`
    );
  });

  test('Mobile - Buy for full price button calls right action and redirects to Order1', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveExpiredMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveExpiredMockData.data.hash}
          isMobile='true'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    // There should be a button with text 'Koupit za 3 599,-'
    const buyForFullPriceButton = await findByText('Koupit za 9,-');

    fireEvent.click(buyForFullPriceButton);
    await wait(() =>
      expect(axios.post).toHaveBeenCalledWith(
        'https://legolas.alza.cz/api/basket/v1/items',
        {
          items: [
            {
              commodityId: 5459001,
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
