import React from 'react';
import ReactGA from 'react-ga';
import {
  render,
  waitForElement,
  fireEvent,
  wait,
} from '@testing-library/react';

import OrderDetail from './orderDetail';
import { activeOrderDetailMockData } from './__fixtures__/activeGroupOrderMockData';
import { fullOrderDetailMockData } from './__fixtures__/fullGroupOrderMockData';
import { expiredOrderDetailMockData } from './__fixtures__/expiredGroupOrderMockData';
import { ActiveOrderDetailContentDesktop } from '../../organisms/orderDetailContent/orderDetailContentStates/activeOrderDetailContent.desktop';
import { Analytics } from '../../../../../utils/analytics/analytics';
import { AnalyticsProvider } from '../../../../services/analyticsContext';
import { ActiveOrderDetailContentMobile } from '../../organisms/orderDetailContent/orderDetailContentStates/activeOrderDetailContent.mobile';

const buyProduct = jest.fn();
const removeProduct = jest.fn();
const openConfirmationDialog = jest.fn();
const share = jest.fn();

describe('Social Shopping Order detail display test suite: ', function() {
  const channels = ['UA-2123123', 'UA-2155423'];
  const analytics = Analytics.getInstance();

  beforeEach(() => {
    ReactGA.testModeAPI.resetCalls();
    analytics.initChannels(channels, true);
  });

  test('Displays Active group', async () => {
    const { queryAllByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <OrderDetail orderItemInfo={activeOrderDetailMockData} />
      </AnalyticsProvider>
    );

    // Since there must be empty spot in GroupList element, we should render CTA text for sharing
    await waitForElement(() =>
      queryAllByText('Sdílejte slevu a sežeňte zájemce')
    );
  });
  test('Displays Expired group', async () => {
    const { getByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <OrderDetail orderItemInfo={fullOrderDetailMockData} isMobile={true} />
      </AnalyticsProvider>
    );

    // Progress bar info text should state, that the group was filled
    await waitForElement(() => getByText('Splněno! Sleva byla aktivována'));
  });
  test('Displays Full group', async () => {
    const { getByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <OrderDetail
          orderItemInfo={expiredOrderDetailMockData}
          isMobile={true}
        />
      </AnalyticsProvider>
    );

    // Vypršelo should be displayed next to the product name
    await waitForElement(() => getByText('Vypršelo'));

    // Buy button with full price should be displayed
    await waitForElement(() => getByText('Doplatit 495 Kč a koupit'));
  });
  test('Buy buttons displays name of paymentAction from API and displays priceDifference', async () => {
    const { findByText, findByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <ActiveOrderDetailContentDesktop
          orderItemInfo={activeOrderDetailMockData}
          buyProduct={buyProduct}
          removeProduct={removeProduct}
        />
      </AnalyticsProvider>
    );

    const leaveTeamLink = await findByText(
      'Opustit tým / koupit za plnou cenu'
    );
    expect(leaveTeamLink).toBeTruthy();

    fireEvent.click(leaveTeamLink);

    // Button with price difference should be displayed
    const buyForFullPriceButton = await findByTestId('btn__buyForFullPrice');
    expect(buyForFullPriceButton).toBeTruthy();
    expect(buyForFullPriceButton.textContent).toBe(
      activeOrderDetailMockData.socialShoppingInfo.paymentAction.name
    );
    expect(buyForFullPriceButton.textContent).toContain(
      activeOrderDetailMockData.socialShoppingInfo.priceDifference
    );
  });
  test('Refund buttons displays name of refundAction from API', async () => {
    const { findByText, findByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <ActiveOrderDetailContentDesktop
          orderItemInfo={activeOrderDetailMockData}
          buyProduct={buyProduct}
          removeProduct={removeProduct}
        />
      </AnalyticsProvider>
    );

    const leaveTeamLink = await findByText(
      'Opustit tým / koupit za plnou cenu'
    );
    expect(leaveTeamLink).toBeTruthy();

    fireEvent.click(leaveTeamLink);

    // Button for refund order should be displayed
    const refundButton = await findByTestId('btn__refund');
    expect(refundButton).toBeTruthy();
    expect(refundButton.textContent).toBe(
      activeOrderDetailMockData.socialShoppingInfo.refundAction.name
    );
  });
  test('buyProduct action from props was called', async () => {
    const { findByText, findByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <ActiveOrderDetailContentDesktop
          orderItemInfo={activeOrderDetailMockData}
          buyProduct={buyProduct}
          removeProduct={removeProduct}
        />
      </AnalyticsProvider>
    );

    const leaveTeamLink = await findByText(
      'Opustit tým / koupit za plnou cenu'
    );
    expect(leaveTeamLink).toBeTruthy();

    fireEvent.click(leaveTeamLink);

    // Button with price difference should be displayed
    const buyForFullPriceButton = await findByTestId('btn__buyForFullPrice');

    // After clicking the buy Button, buy function should be called once
    fireEvent.click(buyForFullPriceButton);
    await wait(() => expect(buyProduct).toHaveBeenCalledTimes(1));
  });
  test('removeProduct action from props was called', async () => {
    const { findByText, findByTestId } = render(
      <AnalyticsProvider Analytics={analytics}>
        <ActiveOrderDetailContentDesktop
          orderItemInfo={activeOrderDetailMockData}
          buyProduct={buyProduct}
          removeProduct={removeProduct}
        />
      </AnalyticsProvider>
    );

    const leaveTeamLink = await findByText(
      'Opustit tým / koupit za plnou cenu'
    );
    expect(leaveTeamLink).toBeTruthy();

    fireEvent.click(leaveTeamLink);

    // Button for refund order should be displayed
    const refundButton = await findByTestId('btn__refund');

    // After clicking the buy Button, buy function should be called once
    fireEvent.click(refundButton);

    await wait(() => expect(removeProduct).toHaveBeenCalledTimes(1));
  });

  test('Desktop - GA action for share button click should be sent', async () => {
    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <ActiveOrderDetailContentDesktop
          orderItemInfo={activeOrderDetailMockData}
          buyProduct={buyProduct}
          removeProduct={removeProduct}
        />
      </AnalyticsProvider>
    );

    const shareButton = await findByText('Sdílet slevu');
    expect(shareButton).toBeTruthy();

    // We dont want to test other GA events than click on add to cart button
    ReactGA.testModeAPI.resetCalls();

    fireEvent.click(shareButton);

    expect(ReactGA.testModeAPI.calls).toEqual([
      [
        'send',
        {
          eventAction: 'Share Button BO Clicked',
          eventCategory: 'Social Shopping',
          hitType: 'event',
        },
      ],
    ]);
  });

  test('Desktop - GA action for share after clicking on link under empty slot should be sent', async () => {
    const { findAllByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <ActiveOrderDetailContentDesktop
          orderItemInfo={activeOrderDetailMockData}
          buyProduct={buyProduct}
          removeProduct={removeProduct}
        />
      </AnalyticsProvider>
    );

    const shareLinks = await findAllByText('Sdílejte slevu a sežeňte zájemce');
    expect(shareLinks).toHaveLength(4);

    // We dont want to test other GA events than click on add to cart button
    ReactGA.testModeAPI.resetCalls();

    fireEvent.click(shareLinks[0]);

    await wait(() => {
      expect(ReactGA.testModeAPI.calls).toEqual([
        [
          'send',
          {
            eventAction: 'Share Button BO Clicked',
            eventCategory: 'Social Shopping',
            hitType: 'event',
          },
        ],
      ]);
    });
  });

  test('Mobile - GA action for share button click should be sent', async () => {
    const { findByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <ActiveOrderDetailContentMobile
          orderItemInfo={activeOrderDetailMockData}
          share={share}
          openConfirmationDialog={openConfirmationDialog}
          renderActions={true}
        />
      </AnalyticsProvider>
    );

    const shareButton = await findByText('Sdílet slevu');
    expect(shareButton).toBeTruthy();

    // We dont want to test other GA events than click on add to cart button
    ReactGA.testModeAPI.resetCalls();

    fireEvent.click(shareButton);

    await wait(() => {
      expect(ReactGA.testModeAPI.calls).toEqual([
        [
          'send',
          {
            eventAction: 'Share Button BO Clicked',
            eventCategory: 'Social Shopping',
            hitType: 'event',
          },
        ],
      ]);
    });
  });

  test('Mobile - GA action for share after clicking on link under empty slot should be sent', async () => {
    const { findAllByText } = render(
      <AnalyticsProvider Analytics={analytics}>
        <ActiveOrderDetailContentMobile
          orderItemInfo={activeOrderDetailMockData}
          share={share}
          openConfirmationDialog={openConfirmationDialog}
          renderActions={true}
        />
      </AnalyticsProvider>
    );

    const shareLinks = await findAllByText('Sdílejte slevu a sežeňte zájemce');
    expect(shareLinks).toHaveLength(4);

    // We dont want to test other GA events than click on add to cart button
    ReactGA.testModeAPI.resetCalls();

    fireEvent.click(shareLinks[0]);

    await wait(() => {
      expect(ReactGA.testModeAPI.calls).toEqual([
        [
          'send',
          {
            eventAction: 'Share Button BO Clicked',
            eventCategory: 'Social Shopping',
            hitType: 'event',
          },
        ],
      ]);
    });
  });
});
