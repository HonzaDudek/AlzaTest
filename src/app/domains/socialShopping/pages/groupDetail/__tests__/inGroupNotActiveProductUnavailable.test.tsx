import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import GroupDetail from '../groupDetail';

import axios from 'axios';
import { withMarkup } from '../../../../../../utils/customMatchers/customMatchers';
import { AnalyticsProvider } from '../../../../../services/analyticsContext';
import { Analytics } from '../../../../../../utils/analytics/analytics';
import ReactGA from 'react-ga';
import { inGroupNotActiveProductUnavailableMockData } from '../__fixtures__/inGroupNotActiveProductUnavailable';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const { location } = window;

Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
});

describe('Group Detail Status 8 - Product unavailable - tests ', function() {
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
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveProductUnavailableMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { getByText, findAllByRole, getByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveProductUnavailableMockData.data.hash}
          isMobile='false'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    const buttonGroup = await findAllByRole('button');
    expect(buttonGroup).toHaveLength(3);

    // Test that header has right text
    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    expect(pageHeading).toBeTruthy();

    const orderInfoButton = getByText('Zobrazit objednávku');
    expect(orderInfoButton).toBeTruthy();

    const productInfoButton = getByText('Podrobnosti o zboží');
    expect(productInfoButton).toBeTruthy();

    // Test that more info button is displayed
    const moreInfoButton = getByTestId('test-btn-moreInfo');
    expect(moreInfoButton.textContent).toContain('Více o Sdílej a ušetři');
  });

  test('Desktop - User is redirected to BO after clicking Zobrazit Objednavku Button ', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveProductUnavailableMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveProductUnavailableMockData.data.hash}
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

  test('Desktop - Button to show product detail works', async () => {
    mockedAxios.get.mockResolvedValueOnce(
      inGroupNotActiveProductUnavailableMockData
    );
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveProductUnavailableMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    const productInfoButton = await findByText('Podrobnosti o zboží');

    // Test that user is redirected to correct url after button is clicked
    fireEvent.click(productInfoButton);
    const target =
      inGroupNotActiveProductUnavailableMockData.data.commodity.url;
    await wait(() => expect(window.location.href).toBe(target));
  });

  test('Mobile - Correct buttons and texts are displayed', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveProductUnavailableMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { getByText, getByTestId, findAllByRole } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveProductUnavailableMockData.data.hash}
          isMobile='false'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    const buttonGroup = await findAllByRole('button');
    expect(buttonGroup).toHaveLength(3);

    // Test that header has right text
    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    expect(pageHeading).toBeTruthy();

    const orderInfoButton = getByText('Zobrazit objednávku');
    expect(orderInfoButton).toBeTruthy();

    const productInfoButton = getByText('Podrobnosti o zboží');
    expect(productInfoButton).toBeTruthy();

    // Test that more info button is displayed
    const moreInfoButton = getByTestId('test-btn-moreInfo');
    expect(moreInfoButton.textContent).toContain('Více o Sdílej a ušetři');
  });

  test('Mobile - User is redirected to BO after clicking Zobrazit Objednavku Button ', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupNotActiveProductUnavailableMockData.data,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveProductUnavailableMockData.data.hash}
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

  test('Mobile - Button to show product detail works', async () => {
    mockedAxios.get.mockResolvedValueOnce(
      inGroupNotActiveProductUnavailableMockData
    );
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupNotActiveProductUnavailableMockData.data.hash}
          isMobile='true'
        />
      </AnalyticsProvider>
    );

    const productInfoButton = await findByText('Podrobnosti o zboží');

    // Test that user is redirected to correct url after button is clicked
    fireEvent.click(productInfoButton);
    const target =
      inGroupNotActiveProductUnavailableMockData.data.commodity.url;
    await wait(() => expect(window.location.href).toBe(target));
  });
});
