import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import { RemoveProductCrossButton } from './removeProductCrossButton';
import { activeOrderDetailMockData } from '../../pages/orderDetail/__fixtures__/activeGroupOrderMockData';

const removeProduct = jest.fn();
const buyProduct = jest.fn();

describe('RemoveProductCrossButton tests: ', () => {
  test('Two buttons should appear in popover after click', async () => {
    const { findAllByRole, getByRole } = render(
      <RemoveProductCrossButton
        removeProduct={removeProduct}
        buyProduct={buyProduct}
        isMobile={false}
        testId={123}
        popoverContent={{
          buttonTexts: {
            confirmButtonText:
              activeOrderDetailMockData.socialShoppingInfo.paymentAction.name,
            refundButtonText:
              activeOrderDetailMockData.socialShoppingInfo.refundAction.name,
          },
        }}
      />
    );

    // Button for toggling popover should be present
    const popoverToggleButton = getByRole('button');
    expect(popoverToggleButton).toBeTruthy();
    fireEvent.click(popoverToggleButton);

    // Popover with two buttons should be displayed after click
    // making the total number of buttons 3
    const buttons = await findAllByRole('button');
    expect(buttons).toHaveLength(3);
  });

  test('One button should have same content as a name of a payment action and should contain price difference', async () => {
    const { findByTestId, getByTestId } = render(
      <RemoveProductCrossButton
        removeProduct={removeProduct}
        buyProduct={buyProduct}
        isMobile={false}
        testId={123}
        popoverContent={{
          buttonTexts: {
            confirmButtonText:
              activeOrderDetailMockData.socialShoppingInfo.paymentAction.name,
            refundButtonText:
              activeOrderDetailMockData.socialShoppingInfo.refundAction.name,
          },
        }}
      />
    );

    // Icon should be rendered
    const crossButton = getByTestId('removeProductCrossButton');
    fireEvent.click(crossButton);

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

  test('Buy button should fire buyProduct action from props', async () => {
    const { getByTestId, findByTestId } = render(
      <RemoveProductCrossButton
        removeProduct={removeProduct}
        buyProduct={buyProduct}
        isMobile={false}
        testId={123}
        popoverContent={{
          buttonTexts: {
            confirmButtonText:
              activeOrderDetailMockData.socialShoppingInfo.paymentAction.name,
            refundButtonText:
              activeOrderDetailMockData.socialShoppingInfo.refundAction.name,
          },
        }}
      />
    );

    // Icon should be rendered
    const crossButton = getByTestId('removeProductCrossButton');
    fireEvent.click(crossButton);

    // Button with price difference should be displayed
    const buyForFullPriceButton = await findByTestId('btn__buyForFullPrice');

    // After clicking the buy Button, buy function should be called once
    fireEvent.click(buyForFullPriceButton);
    await wait(() => expect(buyProduct).toHaveBeenCalledTimes(1));
  });

  test('Refund button should have same text as refundAction name', async () => {
    const { getByTestId, findByTestId } = render(
      <RemoveProductCrossButton
        removeProduct={removeProduct}
        buyProduct={buyProduct}
        isMobile={false}
        testId={123}
        popoverContent={{
          buttonTexts: {
            confirmButtonText:
              activeOrderDetailMockData.socialShoppingInfo.paymentAction.name,
            refundButtonText:
              activeOrderDetailMockData.socialShoppingInfo.refundAction.name,
          },
        }}
      />
    );

    // Icon should be rendered
    const crossButton = getByTestId('removeProductCrossButton');
    fireEvent.click(crossButton);

    // Button for refund order should be displayed
    const refundButton = await findByTestId('btn__refund');
    expect(refundButton).toBeTruthy();
    expect(refundButton.textContent).toBe(
      activeOrderDetailMockData.socialShoppingInfo.refundAction.name
    );
  });

  test('Refund button should fire removeProduct action from props', async () => {
    const { getByTestId, findByTestId } = render(
      <RemoveProductCrossButton
        removeProduct={removeProduct}
        buyProduct={buyProduct}
        isMobile={false}
        testId={123}
        popoverContent={{
          buttonTexts: {
            confirmButtonText:
              activeOrderDetailMockData.socialShoppingInfo.paymentAction.name,
            refundButtonText:
              activeOrderDetailMockData.socialShoppingInfo.refundAction.name,
          },
        }}
      />
    );

    // Icon should be rendered
    const crossButton = getByTestId('removeProductCrossButton');
    fireEvent.click(crossButton);

    // Button for refund order should be displayed
    const refundButton = await findByTestId('btn__refund');

    // After clicking the buy Button, buy function should be called once
    fireEvent.click(refundButton);
    await wait(() => expect(removeProduct).toHaveBeenCalledTimes(1));
  });
});
