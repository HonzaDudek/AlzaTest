import { render, wait, fireEvent } from '@testing-library/react';
import GroupDetail from '../groupDetail';

import axios from 'axios';
import React from 'react';
import { inGroupActiveMockData } from '../__fixtures__/inGroupActive';
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

describe('Group Detail Status 7 tests ', function() {
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
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupActiveMockData,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { getByText, findAllByText, getAllByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupActiveMockData.hash}
          isMobile='false'
          redirectUrl='#'
        />
      </AnalyticsProvider>
    );

    const shareLink = await findAllByText('Sdílet slevu');
    expect(shareLink).toBeTruthy();

    const shareButtons = getAllByText('Sdílejte nabídku');
    expect(shareButtons).toHaveLength(3);

    const orderInfoButton = getByText('Zobrazit objednávku');
    expect(orderInfoButton).toBeTruthy();

    // Test that header has right text
    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    expect(pageHeading).toBeTruthy();
  });

  test('Desktop - User is redirected to BO after clicking Zobrazit Objednavku Button ', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupActiveMockData,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupActiveMockData.hash}
          isMobile='false'
          redirectUrl={`/muj-ucet/objednavka-123.htm`}
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 button for joining group
    const orderInfoButton = await findByText('Zobrazit objednávku');

    // Test if correct endpoint with proper request body was called
    fireEvent.click(orderInfoButton);
    await wait(() =>
      expect(window.location.href).toBe('/muj-ucet/objednavka-123.htm')
    );
  });

  test('Desktop - Sharing dialog is displayed when share button is clicked', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupActiveMockData,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findAllByText, getByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupActiveMockData.hash}
          isMobile='false'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 button for joining group
    const shareButton = await findAllByText('Sdílejte nabídku');
    const shareDialog = getByTestId('modalDialog');
    expect(shareDialog.classList).toContain('closed');

    // Test if correct endpoint with proper request body was called
    fireEvent.click(shareButton[0]);

    await wait(() => expect(shareDialog.classList).toContain('open'));
  });

  test('Mobile - Correct buttons and texts are displayed', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupActiveMockData,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { getByText, findAllByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupActiveMockData.hash}
          isMobile='true'
          redirectUrl='#'
        />
      </AnalyticsProvider>
    );

    const shareLink = await findAllByText('Sdílet slevu');
    expect(shareLink).toBeTruthy();

    const orderInfoButton = getByText('Zobrazit objednávku');
    expect(orderInfoButton).toBeTruthy();

    // Test that header has right text
    const pageHeadingWithMarkup = withMarkup(getByText);
    const pageHeading = pageHeadingWithMarkup(
      'Připojte se, sdílejte a ušetřete 150 Kč'
    );
    expect(pageHeading).toBeTruthy();

    const capacityLeftTextWithMarkup = withMarkup(getByText);
    const capacityLeftText = capacityLeftTextWithMarkup('3 zájemce.');
    expect(capacityLeftText).toBeTruthy();
  });

  test('Mobile - User is redirected to BO after clicking Zobrazit Objednavku Button ', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupActiveMockData,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupActiveMockData.hash}
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

  test('Mobile - Sharing dialog is displayed when share button is clicked', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: inGroupActiveMockData,
      isLoading: false,
      isError: false,
    });
    mockedAxios.post.mockResolvedValueOnce(200);

    const { findAllByText, getByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDetail
          groupHash={inGroupActiveMockData.hash}
          isMobile='false'
          redirectUrl='/moje-objednavky/id=12345798'
        />
      </AnalyticsProvider>
    );

    // Test, that there is 1 button for joining group
    const shareButton = await findAllByText('Sdílejte nabídku');
    const shareingDiv = getByText('https://legolas.alza.cz/url/M5fcjLMzuh');

    const shareDialog =
      shareingDiv.parentElement?.parentElement?.parentElement?.parentElement;
    expect(shareDialog).toBeTruthy();

    expect(shareDialog?.className).toContain('close');
    // Test if correct endpoint with proper request body was called
    fireEvent.click(shareButton[0]);

    await wait(() => expect(shareDialog?.className).toContain('open'));
  });
});
