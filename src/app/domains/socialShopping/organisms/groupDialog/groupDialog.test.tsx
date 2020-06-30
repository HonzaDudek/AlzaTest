import React from 'react';
import axios from 'axios';
import {
  render,
  waitForElement,
  fireEvent,
  within,
} from '@testing-library/react';

import GroupDialog from './groupDialog';
import * as commodity from './__fixtures__/commodity.json';
import * as commodityWithOneGroup from './__fixtures__/commodityWithOneGoup.json';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import { mock, mockClear } from 'jest-mock-extended';

jest.mock('react-i18next');

jest.mock('axios');
const axiosMocked = axios as jest.Mocked<typeof axios>;

// This comes as a prop from detailPageApp.tsx
const socialShoppingLowestPrice = '2 299,-';

const buttonText = {
  header: 'Novinka! Sílej a ušetři',
  body: 'Sežeňte další kupce a všichni dostanete slevu',
  price: `od ${socialShoppingLowestPrice}`,
  more: 'Vice',
};

describe('GroupDialog: ', () => {
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

  test('Display correct minimal price for commodity on toggle button', async () => {
    axiosMocked.post.mockResolvedValue({ data: commodity });

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDialog
          toggleButtonText={buttonText}
          commodityId={commodity.id}
          apiUrl={'/api'}
          preselectedAccessories={[123]}
        />
      </AnalyticsProvider>
    );

    const minimalPriceText = await findByText('od 2 299,-');
    expect(minimalPriceText).toBeTruthy();
  });

  test('should open drawer after click on toggle button', async () => {
    axiosMocked.post.mockResolvedValue({
      data: commodity,
    });

    const { getByText, queryByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDialog
          toggleButtonText={buttonText}
          isMobile={true}
          commodityId={commodity.id}
          apiUrl={'/api'}
          preselectedAccessories={[123]}
        />
      </AnalyticsProvider>
    );

    //check for closed drawer
    const mainContent = queryByText('Sdílej a ušetři');
    expect(mainContent).toBeNull();

    //toggle drawer open
    const toggleButton = getByText('od 2 299,-');
    fireEvent.click(toggleButton);

    //check drawer present
    await waitForElement(() =>
      getByText((content, element) => {
        return (
          !!element.tagName.toLowerCase().match(/h[1-6]/) &&
          content.startsWith('Sdílej a ušetři')
        );
      })
    );
  });

  test('PriceLevel component should set correct price level when clicked', async () => {
    axiosMocked.post.mockResolvedValue({ data: commodity });

    const { getByText, findByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDialog
          toggleButtonText={buttonText}
          commodityId={commodity.id}
          apiUrl={'/api'}
          preselectedAccessories={[123]}
        />
      </AnalyticsProvider>
    );

    //toggle drawer open
    const toggleButton = getByText('od 2 299,-');
    fireEvent.click(toggleButton);

    // Original price should be visible in priceCompareBlock actual price
    const prices = await findByTestId('priceCompareBlock__actualPrice');
    expect(prices.textContent).toBe('2 299,-');

    // First price level with text 'Bude náš 5 should be visible'
    const priceLevel = getByText('Bude nás 5');
    expect(priceLevel).toBeTruthy();

    // After selecting first price level, price in priceCompareBlock should update
    fireEvent.click(priceLevel);

    const { findByText } = within(prices);

    const updatedSelectedPrice = await findByText('2 199,-');

    expect(updatedSelectedPrice).toBeTruthy();
  });

  test('Check if content request sends properly', async () => {
    axiosMocked.post.mockResolvedValue({ data: commodity });

    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDialog
          toggleButtonText={buttonText}
          commodityId={commodity.id}
          apiUrl={'/api'}
          preselectedAccessories={[123]}
        />
      </AnalyticsProvider>
    );

    // Toggle drawer open
    const toggleButton = await findByText('od 2 299,-');
    fireEvent.click(toggleButton);

    // Click and choose price level
    const priceLevel = await findByText('Bude nás 5');
    expect(priceLevel).toBeTruthy();
  });

  test('Check if alone group is selected after render', async () => {
    axiosMocked.post.mockResolvedValue({ data: commodityWithOneGroup });

    const { findByText, getByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDialog
          toggleButtonText={buttonText}
          commodityId={commodityWithOneGroup.id}
          apiUrl={'/api'}
          preselectedAccessories={[123]}
        />
      </AnalyticsProvider>
    );

    const toggleButton = await findByText('od 2 299,-');
    fireEvent.click(toggleButton);

    // Check if group is selected
    const totalPriceSaving = await findByText('Společně ušětříte 500,-');
    expect(totalPriceSaving).toBeTruthy();

    // Click on AddToBasket button
    const addToBasket = getByText('Vložit do košíku');
    fireEvent.click(addToBasket);
  });

  test('Test GA events of dialog', async () => {
    axiosMocked.post.mockResolvedValue({ data: commodity });

    const { findByText, getByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <GroupDialog
          toggleButtonText={buttonText}
          commodityId={commodity.id}
          apiUrl={'/api'}
          preselectedAccessories={[123]}
        />
      </AnalyticsProvider>
    );

    expect(analytics.callEvent).toHaveBeenCalledWith({
      Event: {
        action: 'Group Dialog Toggle Button Shown',
        category: 'Social Shopping',
      },
      Type: 0,
    });

    const toggleButton = await findByText('od 2 299,-');
    fireEvent.click(toggleButton);

    // Check GA events

    expect(analytics.callEvent).toHaveBeenCalledWith({
      Event: {
        action: 'Social Shopping Group Dialog Show',
        category: 'Social Shopping',
      },
      Type: 0,
    });

    const priceLevel = await findByText('Bude nás 5');
    fireEvent.click(priceLevel);

    const confirmButton = getByText('Vložit do košíku');
    fireEvent.click(confirmButton);

    // Check GA events
    expect(analytics.callEvent).toHaveBeenCalledWith({
      Event: {
        action: 'Group Dialog Confirmed',
        category: 'Social Shopping',
      },
      Type: 0,
    });
  });
});
